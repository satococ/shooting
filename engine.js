'use strict';
/*

座標と幅・高さと当たり判定を持つクラス

*/

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    hitTest(other) {
        const horizontal = (other.x < this.x + this.width) &&
            (this.x < other.x + other.width);
        const vertical = (other.y < this.y + this.height) &&
            (this.y < other.y + other.height);
        return (horizontal && vertical);
    }
}

class Sprite {
    constructor(image, rectangle) {		//イメージと幅をもらっている
        this.image = image;
        this.rectangle = rectangle;
    }
}

//アセット（画像などのリソース）を読み込むためのクラス
class AssetLoader {
    constructor() {
        this._promises = [];
        this._assets = new Map();
    }

    addImage(name, url) {
        const img = new Image();
        img.src = url;

        const promise = new Promise((resolve, reject) =>
            img.addEventListener('load', (e) => {
                this._assets.set(name, img);
                resolve(img);
            }));

        this._promises.push(promise);
    }
    
    loadAll() {
        return Promise.all(this._promises).then((p) => this._assets);
    }
    
    get(name) {
        return this._assets.get(name);
    }
}

const assets = new AssetLoader();


//シーンチェンジの大本クラス？
class EventDispatcher {
    constructor() {
        this._eventListeners = {};
    }

    addEventListener(type, callback) {
        if(this._eventListeners[type] == undefined) {
            this._eventListeners[type] = [];
        }

        this._eventListeners[type].push(callback);
    }

    dispatchEvent(type, event) {
        const listeners = this._eventListeners[type];
        if(listeners != undefined) listeners.forEach((callback) => callback(event));
    }
}

//EventDIspatcherから発火させるイベント用のクラスらしいです

class GameEvent {
    constructor(target) {
        this.target = target;
    }
}

//キャラクター用のクラス
class Actor extends EventDispatcher {
    constructor(x, y, hitArea, tags = []) {
        super();
        this.hitArea = hitArea;
        this._hitAreaOffsetX = hitArea.x;
        this._hitAreaOffsetY = hitArea.y;
        this.tags = tags;

        this.x = x;
        this.y = y;
    }
    
    update(gameInfo, input) {}		//毎フレーム呼ばれてゲーム情報と入力を受け取って動く。サブクラスでオーバーライド

    render(target) {}		//描画処理。サブクラスでオーバーライド

    hasTag(tagName) {		
        return this.tags.includes(tagName);
    }

    spawnActor(actor) {		//弾幕を発射
        this.dispatchEvent('spawnactor', new GameEvent(actor));
    }

    destroy() {		//呼ばれると死ぬ
        this.dispatchEvent('destroy', new GameEvent(this));
    }
    
    get x() {		//座標の取得
        return this._x;
    }
    
    set x(value) {
        this._x = value;
        this.hitArea.x = value + this._hitAreaOffsetX;
    }

    get y() {		
        return this._y;
    }

    set y(value) {
        this._y = value;
        this.hitArea.y = value + this._hitAreaOffsetY;
    }
}


class SpriteActor extends Actor {
    constructor(x, y, sprite, hitArea, tags=[]) {
        super(x, y, hitArea, tags);
        this.sprite = sprite;
        this.width = sprite.rectangle.width;
        this.height = sprite.rectangle.height;
    }
    
    render(target) {		//画像を描画できるようにするためのオーバーライド
        const context = target.getContext('2d');
        const rect = this.sprite.rectangle;
        context.drawImage(this.sprite.image,
            rect.x, rect.y,
            rect.width, rect.height,
            this.x, this.y,
            rect.width, rect.height);
    }
    
    isOutOfBounds(boundRect) {		//画面の外に出られないようにする
        const actorLeft = this.x;
        const actorRight = this.x + this.width;
        const actorTop = this.y;
        const actorBottom = this.y + this.height;

        const horizontal = (actorRight < boundRect.x || actorLeft > boundRect.width);
        const vertical = (actorBottom < boundRect.y || actorTop > boundRect.height);

        return (horizontal || vertical);
    }
}

//updateに値を渡すためのクラス
class Input {
    constructor(keyMap, prevKeyMap) {
        this.keyMap = keyMap;
        this.prevKeyMap = prevKeyMap;
    }

    _getKeyFromMap(keyName, map) {
        if(map.has(keyName)) {
            return map.get(keyName);
        } else {
            return false;
        }
    }

    _getPrevKey(keyName) {
        return this._getKeyFromMap(keyName, this.prevKeyMap);
    }

    getKey(keyName) {		//キーを押し
        return this._getKeyFromMap(keyName, this.keyMap);
    }

    getKeyDown(keyName) {
        const prevDown = this._getPrevKey(keyName);
        const currentDown = this.getKey(keyName);
        return (!prevDown && currentDown);
    }

    getKeyUp(keyName) {		//キーを離した場合？
        const prevDown = this._getPrevKey(keyName);
        const currentDown = this.getKey(keyName);
        return (prevDown && !currentDown);
    }
}

//実際にキー入力を受け付けるクラス
class InputReceiver {
    constructor() {
        this._keyMap = new Map();
        this._prevKeyMap = new Map();

        addEventListener('keydown', (ke) => this._keyMap.set(ke.key, true));	//キーを押すと発生
        addEventListener('keyup', (ke) => this._keyMap.set(ke.key, false));		//キーを離すと発生
    }

    getInput() {		//updateに渡すためのinputを生成
        const keyMap = new Map(this._keyMap);
        const prevKeyMap = new Map(this._prevKeyMap);
        this._prevKeyMap = new Map(this._keyMap);
        return new Input(keyMap, prevKeyMap);
    }
}

//タイトル,ゲーム画面,ゲームーオーバー画面のためのスーパークラス
class Scene extends EventDispatcher {
    constructor(name, backgroundColor, renderingTarget) {
        super();

        this.name = name;
        this.backgroundColor = backgroundColor;
        this.actors = [];
        this.renderingTarget = renderingTarget;

        this._destroyedActors = [];
    }

    add(actor) {		//actorの追加
        this.actors.push(actor);
        actor.addEventListener('spawnactor', (e) => this.add(e.target));
        actor.addEventListener('destroy', (e) => this._addDestroyedActor(e.target));
    }

    remove(actor) {		//actorの削除
        const index = this.actors.indexOf(actor);
        this.actors.splice(index, 1);
    }
    
    changeScene(newScene) {
        const event = new GameEvent(newScene);
        this.dispatchEvent('changescene', event);
    }

    update(gameInfo, input) {		//すべての処理を司るメソッド
        this._updateAll(gameInfo, input);
        this._hitTest();
        this._disposeDestroyedActors();
        this._clearScreen(gameInfo);
        this._renderAll();
    }

    _updateAll(gameInfo, input) {		//actorを更新
        this.actors.forEach((actor) => actor.update(gameInfo, input));
    }

    _hitTest() {		//当たり判定
        const length = this.actors.length;
        for(let i=0; i < length - 1; i++) {
            for(let j=i+1; j < length; j++) {
                const obj1 = this.actors[i];
                const obj2 = this.actors[j];
                const hit = obj1.hitArea.hitTest(obj2.hitArea);
                if(hit) {
                    obj1.dispatchEvent('hit', new GameEvent(obj2));
                    obj2.dispatchEvent('hit', new GameEvent(obj1));
                }
            }
        }
    }

    _clearScreen(gameInfo) {	//画面のクリア
        const context = this.renderingTarget.getContext('2d');
        const width = gameInfo.screenRectangle.width;
        const height = gameInfo.screenRectangle.height;
        context.fillStyle = this.backgroundColor;
        context.fillRect(0, 0, width, height);
    }

    _renderAll() {		//すべての描画処理
        this.actors.forEach((obj) => obj.render(this.renderingTarget));
    }

    _addDestroyedActor(actor) {
        this._destroyedActors.push(actor);
    }

    _disposeDestroyedActors() {
        this._destroyedActors.forEach((actor) => this.remove(actor));
        this._destroyedActors = [];
    }
}

//updateに渡すためのゲーム情報
class GameInformation {
    constructor(title, screenRectangle, maxFps, currentFps) {
        this.title = title;
        this.screenRectangle = screenRectangle;
        this.maxFps = maxFps;
        this.currentFps = currentFps;
    }
}


class Game {
    constructor(title, width, height, maxFps) {
        this.title = title;
        this.width = width;
        this.height = height;
        this.maxFps = maxFps;
        this.currentFps = 0;
	
        this.screenCanvas = document.createElement('canvas');
        this.screenCanvas.height = height;
        this.screenCanvas.width = width;

        this._inputReceiver = new InputReceiver();
        this._prevTimestamp = 0;

        console.log(`${title}が初期化されました。`);
    }

    changeScene(newScene) {
        this.currentScene = newScene;
        this.currentScene.addEventListener('changescene', (e) => this.changeScene(e.target));
        console.log(`シーンが${newScene.name}に切り替わりました。`);
    }

    start() {
        requestAnimationFrame(this._loop.bind(this));
    }

    _loop(timestamp) {
        const elapsedSec = (timestamp - this._prevTimestamp) / 1000;
        const accuracy = 0.9; // あまり厳密にするとフレームが飛ばされることがあるので
        const frameTime = 1 / this.maxFps * accuracy; // 精度を落とす
        if(elapsedSec <= frameTime) {
            requestAnimationFrame(this._loop.bind(this));
            return;
        }

        this._prevTimestamp = timestamp;
        this.currentFps = 1 / elapsedSec;

        const screenRectangle = new Rectangle(0, 0, this.width, this.height);
        const info = new GameInformation(this.title, screenRectangle,
                                         this.maxFps, this.currentFps);
        const input = this._inputReceiver.getInput();
        this.currentScene.update(info, input);

        requestAnimationFrame(this._loop.bind(this));
    }
}