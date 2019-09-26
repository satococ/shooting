'use strict';
   var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var hp = document.getElementById('hp');
    var bom = document.getElementById('bom');
    var setu1 = document.getElementById('setu1');
    var setu2 = document.getElementById('setu2');
    var setu3 = document.getElementById('setu3');
    var setu4 = document.getElementById('setu4');

     //var rink1 = document.getElementById('rink1');
     //var rink2 = document.getElementById('rink2');
     //var rink3 = document.getElementById('rink3');


    //クリック時の時間を保持するための変数定義
    var startTime;

    //経過時刻を更新するための変数。 初めはだから0で初期化
    var elapsedTime = 0;
 //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    var timerId;

    var fighterX;
    var fighterY;
    var flg=0; //0だと動ける


function updateTimetText(){

        //m(分) = 135200 / 60000ミリ秒で割った数の商　-> 2分
        var m = Math.floor(elapsedTime / 60000);

        //s(秒) = 135200 % 60000ミリ秒で / 1000 (ミリ秒なので1000で割ってやる) -> 15秒
        var s = Math.floor(elapsedTime % 60000 / 1000);

        //ms(ミリ秒) = 135200ミリ秒を % 1000ミリ秒で割った数の余り
        var ms = elapsedTime % 1000;


        //HTML 上で表示の際の桁数を固定する　例）3 => 03　、 12 -> 012
        //javascriptでは文字列数列を連結すると文字列になる
        //文字列の末尾2桁を表示したいのでsliceで負の値(-2)引数で渡してやる。
        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-3);

        //HTMLのid　timer部分に表示させる　
        timer.textContent ='Time ' + m + ':' + s + ':' + ms;
        setu1.textContent = '十字キー　移動';
        setu2.textContent = 'Zキーorスペースキー　発射';
        setu3.textContent = 'Shift + 十字キー　低速移動';
        setu4.textContent = 'Xボタン　ボム';
        //rink1.textContent = '<a href =select.html>ステージセレクト画面に</a>';
        //rink2.textContent = '<a href=demo.html>デモプレイに</a>';
        //rink3.textContent = '<a href =rank.html>ランキング画面に</a>';

}

function countUp(){

        //timerId変数はsetTimeoutの返り値になるので代入する
        timerId = setTimeout(function(){

            //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
            elapsedTime = Date.now() - startTime ;
            updateTimetText()

            //countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
            countUp();

        //1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
        },10);
}

class TextLabel extends Actor {
    constructor(x, y, text) {
        const hitArea = new Rectangle(0, 0, 0, 0);
        super(x, y, hitArea);

        this.text = text;
    }

    render(target) {
        const context = target.getContext('2d');
        context.font = '40px sans-serif';
        context.fillStyle = 'white';
        context.fillText(this.text, this.x, this.y);
    }
}

class Bullet extends SpriteActor {
    constructor(x, y, velocityX) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(0, 32, 32, 32));
        const hitArea = new Rectangle(8, 0, 16, 32);
        super(x, y, sprite, hitArea, ['playerBullet']);

        this._speed = 6;		//自機の発射間隔(初期値６)
        this.velocityX = velocityX;
        // 敵に当たったら消える
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('enemy')) { this.destroy(); }
        });
    }

    update(gameInfo, input) {


       if(flg==0){
           this.x += this.velocityX;
          this.y -= this._speed;
      }

        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}

class Fighter extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('my'), new Rectangle(0, 0, 32, 32));
        const hitArea = new Rectangle(16, 16, 4, 4);
        super(x, y, sprite, hitArea);

        this._interval = 5;		//(自機の弾幕の発射間隔)初期値５
        this._intervalS = 30;		//(自機狙い弾の発射感覚)初期値30
        this._timeCount = 0;
        this._timeCountS = 0;
        this._speed = 4; //自機のスピード
        this._speedS = 1;     //低速移動時のスピード
        this._velocityX = 0;		//X方向のスピード。上書きされるので意味ないかも？
        this._velocityY = 0;		//Y(ry
        this._intervalB = 30;		//の間隔
		this._timeCountB = 0;
		this.bombval = 5;

        // 敵の弾に当たったらdestroyする
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('enemyBullet')) {
               this.destroy();
           }
        });
    }


    update(gameInfo, input) {
         fighterX = this.x;   //自機の座標を送る
         fighterY = this.y;

        // キーを押されたら移動する

        this._velocityX = 0;
        this._velocityY = 0;
   if(flg==0){
       	if(input.getKey('Shift')){
        	if(input.getKey('ArrowRight')) { this._velocityX = this._speedS; }
        }else{
        	if(input.getKey('ArrowRight')) { this._velocityX = this._speed; }
        }
        if(input.getKey('Shift')){
        	if(input.getKey('ArrowLeft')) { this._velocityX = -this._speedS; }
        }else{
        	if(input.getKey('ArrowLeft')) { this._velocityX = -this._speed; }
        }
        if(input.getKey('Shift')){
        	if(input.getKey('ArrowUp')) { this._velocityY = -this._speedS; }
        }else{
        	if(input.getKey('ArrowUp')) { this._velocityY = -this._speed; }
        }
        if(input.getKey('Shift')){
        	if(input.getKey('ArrowDown')) { this._velocityY = this._speedS; }
        }else{
        	if(input.getKey('ArrowDown')) { this._velocityY = this._speed; }
        }

   }

       this._timeCountS++;
        if(this._timeCountS > this._intervalS) {
           // this.shootBulletA(6);		//自機狙い弾の発射
           // this.shootBulletB(6);
            this._timeCountS = 0;
        }

        this.x += this._velocityX;
        this.y += this._velocityY;

        // 画面外に行ってしまったら押し戻す
        const boundWidth = gameInfo.screenRectangle.width - this.width;
        const boundHeight = gameInfo.screenRectangle.height - this.height;
        const bound = new Rectangle(this.width, this.height, boundWidth, boundHeight);

        if(this.isOutOfBounds(bound)) {
            this.x -= this._velocityX;
            this.y -= this._velocityY;
        }

        // スペースキーで弾を打つ
        this._timeCount++;
        const isFireReady = this._timeCount > this._interval;
        if(isFireReady) {
        	if(input.getKey(' ')||input.getKey('z')||input.getKey('Z')){
            	const bullet = new Bullet(this.x-2, this.y-20,0);
            	this.spawnActor(bullet);
            	const bullet2 = new Bullet(this.x-2, this.y-20,1);
            	this.spawnActor(bullet2);
            	const bullet3 = new Bullet(this.x-2, this.y-20,-1);
            	this.spawnActor(bullet3);
            	this._timeCount = 0;
            }
        }

        if(flg==0){
             this._timeCountB++;
             if(this._timeCountB > this._intervalB) {
             	if(input.getKey('x')||input.getKey('X')){
             		if(this.bombval>0){
             			const bumb = new Bumb(this.x-256, this.y-160);
             			this.spawnActor(bumb);
             			this._timeCountB = 0;
             			this.bombval -= 1;
             			startTime -= 1000;
             		}
             	}
             }
        }
        bom.textContent = 'ボム:'+this.bombval;
    }
}

class Bumb extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('bom'), new Rectangle(0, 0, 512, 384));
        const hitArea = new Rectangle(0, 0, 512, 384);
        super(x, y, sprite, hitArea, ['bomb']);
		this._timeCount = 0;
		this._interval = 5;
    }

    update(gameInfo, input) {
        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
        this._timeCount++;
        if(this._timeCount > this._interval) {
        	this.destroy();
        	this._timeCount = 0;
        }
    }
}

class EnemyBullet extends SpriteActor {
    constructor(x, y, velocityX, velocityY, isFrozen = false) {
        const sprite = new Sprite(assets.get('knife'), new Rectangle(0, 0, 15, 58));
        const hitArea = new Rectangle(4, 15, 8, 58);
        super(x, y, sprite, hitArea, ['enemyBullet']);

        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.isFrozen = isFrozen;
        this.addEventListener('hit', (e) => {
          if(e.target.hasTag('bomb')) {
              this.destroy();
          }
       });
    }

    update(gameInfo, input) {
        if(!this.isFrozen && flg==0) {
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}

class SpiralBulletsSpawner extends Actor {
    constructor(x, y, rotations) {
        const hitArea = new Rectangle(0, 0, 0, 0);
        super(x, y, hitArea);

        this._rotations = rotations;
        this._interval = 2;
        this._timeCount = 0;
        this._angle = 0;      //角度
        this._radius = 140;    //半径
        this._bullets = [];
    }

    update(gameInfo, input) {
        // 指定回数回転したらやめる
        const rotation = this._angle / 360;
        if(rotation >= this._rotations) {
            this._bullets.forEach((b) => b.isFrozen = false); // 凍結解除
            flg=0;  //動けるようにする

            this.destroy();
            return;
        }


        // インターバル経過までは何もしない
        this._timeCount ++;
        if(this._timeCount < this._interval) { return;}
        this._timeCount = 0;

        // 角度と半径を増加させていく
        this._angle += 20;
        this._radius += 2;

        // 弾を発射する
        const rad = this._angle / 180 * Math.PI;
        const bX = this.x + Math.cos(rad) * this._radius;
        const bY = this.y + Math.sin(rad) * this._radius;
        const bSpdX = Math.random() * 4 - 1; // -1〜+1
        const bSpdY = Math.random() * 4 - 1;
        const bullet = new EnemyBullet(bX, bY, bSpdX, bSpdY, true);
        this._bullets.push(bullet);

        this.spawnActor(bullet);
    }
}

//エネミーマーカーのを表示させるクラス
class aBullet extends SpriteActor {
    constructor(x, y, velocityX, velocityY) {
        const sprite = new Sprite(assets.get('mark'), new Rectangle(32, 32, 32, 32));
        const hitArea = new Rectangle(8, 8, 16, 16);
        super(x, y, sprite, hitArea, ['enemyBullet']);

        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    update(gameInfo, input) {
        this.x += this.velocityX;
        this.y += this.velocityY;
		if(input.getKey('x')||input.getKey('X')){
			this.destroy();
		}
        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}
//背景を表示させるクラス
class BackG extends SpriteActor {
constructor(x, y) {
       var sprite = new Sprite(assets.get('uchu'), new Rectangle(0, 0, 600, 1200));
       const hitArea = new Rectangle(0, 0, 0, 0);
       super(x, y, sprite, hitArea, ['back']);

   }
   update(gameInfo, input) {		//すべての処理を司るメソッド
        if(flg==1){
             this.sprite = new Sprite(assets.get('uchu2'), new Rectangle(0, 0, 600, 1200));
       }else{
             this.sprite = new Sprite(assets.get('uchu'), new Rectangle(0, 0, 600, 1200));
       }

   }





}


//敵のクラス
class Enemy extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('meido'), new Rectangle(0, 0, 50, 98));
        const hitArea = new Rectangle(0, 0, 50, 98);
        super(x, y, sprite, hitArea, ['enemy']);

        this.maxHp = 300;		//敵の最大HP
        this.currentHp = this.maxHp;

        this._interval = 400; //回転弾用
        this._intervalS = 70; //通常弾用
        this._timeCount = this._interval;
        this._timeCountS = 0;		//通常弾幕用
        this._velocityX = 2;		//敵の動くスピード(初期値は0.3でした)


        // プレイヤーの弾に当たったらHPを減らす



       this.addEventListener('hit', (e) => {
          if(e.target.hasTag('playerBullet')) {
               if(flg==0){
                    this.currentHp--;
                    this.dispatchEvent('changehp', new GameEvent(this));
               }

          }
       });
    }

    // degree度の方向にspeedの速さで弾を発射する
    shootBullet(degree, speed) {
        const rad = degree / 180 * Math.PI;		//初期値は180
        const velocityX = Math.cos(rad) * speed;
        const velocityY = Math.sin(rad) * speed;

        const bullet = new EnemyBullet(this.x, this.y, velocityX, velocityY);
        this.spawnActor(bullet);
    }

    // num個の弾を円形に発射する
    shootCircularBullets(num, speed) {
        const degree = 360 / num;		//初期値は360
        for(let i = 0; i < num; i++) {
           this.shootBullet(degree * i, speed);
        }
    }

    update(gameInfo, input) {
         	hp.textContent = 'HP:'+this.currentHp;  //現在のHPを反映
         // インターバルを経過していたら弾を撃つ
        if(elapsedTime>=3000){
              this._timeCount++;
              if(this._timeCount > this._interval) {
                  const spawner = new SpiralBulletsSpawner(fighterX, fighterY, 4);
                  flg=1; //時間停止
                  this.spawnActor(spawner);
                  this.shootCircularBullets(10, 3);
                  this._timeCount = 0;
              }
          }
     if(flg==0){
          this._timeCountS++;
          if(this._timeCountS > this._intervalS) {
             this.shootCircularBullets(10, 3);
             this._timeCountS = 0;
           }
     }


         this.x-=this._velocityX;
         if(this.x <= 0 || this.x >= 450) {		//敵が動く範囲？
          this._velocityX *= -1;
         }


        // HPがゼロになったらdestroyする
        if(this.currentHp <= 0) {
            this.destroy();
        }
        const abullet = new aBullet(this.x,882, 0, 5);      //エネミーマーカーの場所を指定
        this.spawnActor(abullet);
    }
}
//敵のHPバー
class EnemyHpBar extends Actor {
    constructor(x, y, enemy) {
        const hitArea = new Rectangle(0, 0, 0, 0);
        super(x, y, hitArea);

        this._width = 400;
        this._height = 10;

        this._innerWidth = this._width;

        // 敵のHPが変わったら内側の長さを変更する
        enemy.addEventListener('changehp', (e) => {
            const maxHp = e.target.maxHp;
            const hp = e.target.currentHp;
            this._innerWidth = this._width * (hp / maxHp);
        });
    }

    render(target) {
        const context = target.getContext('2d');
        context.strokeStyle = 'white';		//HPバーの外枠の色
        context.fillStyle = 'white';		//HPバーの色

        context.strokeRect(this.x, this.y, this._width, this._height);
        context.fillRect(this.x, this.y, this._innerWidth, this._height);
    }
}

class DanmakuStgEndScene extends Scene {
    constructor(renderingTarget) {
        super('クリア', 'black', renderingTarget);
       const text = new TextLabel(125, 400, 'ゲームクリア！');
        this.add(text);
        setTimeout("location.reload()",2000);		//2秒後にタイトルに戻る(2000ms)


    }update(gameInfo, input) {		//すべての処理を司るメソッド
        this._updateAll(gameInfo, input);
        this._hitTest();
        this._disposeDestroyedActors();
        this._clearScreen(gameInfo);
        this._renderAll();

    }
}

class DanmakuStgGameOverScene extends Scene {
    constructor(renderingTarget) {
        super('ゲームオーバー', 'black', renderingTarget);
        const text = new TextLabel(160, 400, '満身創痍');
        this.add(text);
        setTimeout("location.reload()",2000);		//2秒後にタイトルに戻る(2000ms)
    }
    update(gameInfo, input) {		//すべての処理を司るメソッド
        this._updateAll(gameInfo, input);
        this._hitTest();
        this._disposeDestroyedActors();
        this._clearScreen(gameInfo);
        this._renderAll();
        if(input.getKey(' ')){location.reload();}
    }
}

class DanmakuStgMainScene extends Scene {
    constructor(renderingTarget) {
         super('メイン', 'black', renderingTarget);
	    const backg = new BackG(0,0);
         const fighter = new Fighter(230, 550);    //自機の初期座標
         const enemy = new Enemy(230, 100);
         const hpBar = new EnemyHpBar(50, 20, enemy);
         this.add(backg);
         this.add(fighter);
         this.add(enemy);
         this.add(hpBar);

        // 自機がやられたらゲームオーバー画面にする
        fighter.addEventListener('destroy', (e) => {
            const scene = new DanmakuStgGameOverScene(this.renderingTarget);
            this.changeScene(scene);
        });

        // 敵がやられたらクリア画面にする
        enemy.addEventListener('destroy', (e) => {
        	var m = Math.floor(elapsedTime / 60000);
        	var s = Math.floor(elapsedTime % 60000 / 1000);
        	var ms = elapsedTime % 1000;
        	m = ('0' + m).slice(-2);
        	s = ('0' + s).slice(-2);
        	ms = ('0' + ms).slice(-3);

               alert( m + ':' + s + ':' + ms);

                  const scene = new DanmakuStgEndScene(this.renderingTarget);
                  this.changeScene(scene);



        });
       }
}

//開始画面？
class DanmakuStgTitleScene extends Scene {
    constructor(renderingTarget) {
        super('タイトル', 'black', renderingTarget);
        const title = new TextLabel(160, 400, '弾幕STG');
        const title1 = new TextLabel(10, 600, 'スペースでゲームスタート');
        this.add(title);
        this.add(title1)
    }

    update(gameInfo, input) {
        super.update(gameInfo, input);
        if(input.getKeyDown(' ')) {
            const mainScene = new DanmakuStgMainScene(this.renderingTarget);
            this.changeScene(mainScene);
            startTime = Date.now();

        //再帰的に使えるように関数を作る
        countUp();
        }
    }
}

class DanamkuStgGame extends Game {
    constructor() {
        super('弾幕STG', 500, 890, 60);//引数２と３は画面の広さ。４はフレームレート？(初期値：('弾幕STG', 300, 400, 60)
        const titleScene = new DanmakuStgTitleScene(this.screenCanvas);
        this.changeScene(titleScene);
    }
}
assets.addImage('my', '../image/godhand.png');
assets.addImage('mark', '../image/マーカー.png');
assets.addImage('bom', '../image/bomb2.png');
assets.addImage('uchu', '../image/Inferno/I1.png');
assets.addImage('uchu2', '../image/Inferno/I1_2.png');
assets.addImage('knife', '../image/Inferno/knife.png');
assets.addImage('meido', '../image/Inferno/メイド.png');
assets.addImage('sprite', '../image/sprite.png');
assets.loadAll().then((a) => {
    const game = new DanamkuStgGame();
    var kon = document.body.childNodes[1];
    kon.appendChild(game.screenCanvas);
    game.start();
});
