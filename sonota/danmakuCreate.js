'use strict';

	var originalValue = location.search.substring(1);
	var value = originalValue.split('&');
	var originalfighterInterval = value[0].split('=');
	var fighterInterval = Number(decodeURIComponent(originalfighterInterval[1]));
	console.log(decodeURIComponent(originalfighterInterval));

	var originalfighterBomb = value[1].split('=');
	var fighterBomb = Number(decodeURIComponent(originalfighterBomb[1]));
	console.log(decodeURIComponent(originalfighterBomb));

	var originalenemyHp = value[2].split('=');
	var enemyHp = Number(decodeURIComponent(originalenemyHp[1]));
	console.log(decodeURIComponent(originalenemyHp));

	var originalcommonStr1 = value[3].split('=');
	var commonStr1 = Number(decodeURIComponent(originalcommonStr1[1]));
	console.log(decodeURIComponent(originalcommonStr1));

	var originalcommonSpeed1 = value[4].split('=');
	var commonSpeed1 = Number(decodeURIComponent(originalcommonSpeed1[1]));
	console.log(decodeURIComponent(originalcommonSpeed1));

	var originalcommonInterval1 = value[5].split('=');
	var commonInterval1 = Number(decodeURIComponent(originalcommonInterval1[1]));
	console.log(decodeURIComponent(originalcommonInterval1));

	var originalcommonStr2 = value[6].split('=');
	var commonStr2 = Number(decodeURIComponent(originalcommonStr2[1]));
	console.log(decodeURIComponent(originalcommonStr2));

	var originalcommonSpeed2 = value[7].split('=');
	var commonSpeed2 = Number(decodeURIComponent(originalcommonSpeed2[1]));
	console.log(decodeURIComponent(originalcommonSpeed2));

	var originalcommonAngle2 = value[8].split('=');
	var commonAngle2 = Number(decodeURIComponent(originalcommonAngle2[1]));
	console.log(decodeURIComponent(originalcommonAngle2));

	var originalcommonInterval2 = value[9].split('=');
	var commonInterval2 = Number(decodeURIComponent(originalcommonInterval2[1]));
	console.log(decodeURIComponent(originalcommonInterval2));

	var originaltargetStr = value[10].split('=');
	var targetStr = decodeURIComponent(originaltargetStr[1]);
	console.log(decodeURIComponent(originaltargetStr));

	var originaltargetSpeed = value[11].split('=');
	var targetSpeed = Number(decodeURIComponent(originaltargetSpeed[1]));
	console.log(decodeURIComponent(originaltargetSpeed));

	var originaltargetInterval = value[12].split('=');
	var targetInterval = Number(decodeURIComponent(originaltargetInterval[1]));
	console.log(decodeURIComponent(originaltargetInterval));

	var originalinductionTime = value[22].split('=');
	var inductionTime = Number(decodeURIComponent(originalinductionTime[1]));
	console.log(decodeURIComponent(originalinductionTime));

	var originalinductionStr = value[13].split('=');
	var inductionStr = Number(decodeURIComponent(originalinductionStr[1]));
	console.log(decodeURIComponent(originalinductionStr));

	var originalinductionSpeed= value[14].split('=');
	var inductionSpeed = Number(decodeURIComponent(originalinductionSpeed[1]));
	console.log(decodeURIComponent(originalinductionSpeed));

	var originalinductionInterval = value[15].split('=');
	var inductionInterval = Number(decodeURIComponent(originalinductionInterval[1]));
	console.log(decodeURIComponent(originalinductionInterval));

	var originalfireworkStr = value[23].split('=');
	var fireworkStr = Number(decodeURIComponent(originalfireworkStr[1]));
	console.log(decodeURIComponent(originalfireworkStr));

	var originalfireworkSpeed = value[16].split('=');
	var fireworkSpeed = Number(decodeURIComponent(originalfireworkSpeed[1]));
	console.log(decodeURIComponent(originalfireworkSpeed));

	var originalfireworkInterval = value[17].split('=');
	var fireworkInterval = Number(decodeURIComponent(originalfireworkInterval[1]));
	console.log(decodeURIComponent(originalfireworkInterval));

	var originalonFire = value[18].split('=');
	var onFire = Number(decodeURIComponent(originalonFire[1]));
	console.log(decodeURIComponent(originalonFire));

	var originalspiralStr= value[19].split('=');
	var spiralStr = Number(decodeURIComponent(originalspiralStr[1]));
	console.log(decodeURIComponent(originalspiralStr));

	var originalspiralSpeed= value[20].split('=');
	var spiralSpeed = Number(decodeURIComponent(originalspiralSpeed[1]));
	console.log(decodeURIComponent(originalspiralSpeed));

	var originalspiralInterval= value[21].split('=');
	var spiralInterval = Number(decodeURIComponent(originalspiralInterval[1]));
	console.log(decodeURIComponent(originalspiralInterval));


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

    var fiX;
    var fiY;


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
        //rink1.textContent = '<a href = ../select.html>ステージセレクト画面に</a>';
        //rink2.textContent = '<a href = demo.html>デモプレイに</a>';
        //rink3.textContent = '<a href =../rank.html>ランキング画面に</a>';

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
    this.x += this.velocityX;
        this.y -= this._speed;
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

        this._interval = fighterInterval;		//(自機の弾幕の発射間隔)初期値５
        this._intervalS = targetInterval;		//(自機狙い弾の発射間隔)初期値30
        this._timeCount = 0;
        this._timeCountS = 0;
        this._speed = 4; //自機のスピード
        this._speedS = 2;     //低速移動時のスピード
        this._velocityX = 0;		//X方向のスピード。上書きされるので意味ないかも？
        this._velocityY = 0;		//Y(ry
        this._intervalB = 30;		//の間隔
		this._timeCountB = 0;
		this.bombval = fighterBomb;


        // 敵の弾に当たったらdestroyする
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('enemyBullet')) {
              //this.destroy();
           }
        });
    }
      shootBulletA(speed,i) {
        const a = this.x - 50;
        const b = this.y - 0;
        const velocityX = a/Math.sqrt(a*a+b*b) * speed;
        const velocityY = b/Math.sqrt(a*a+b*b) * speed;

        const bullet = new EnemyBullet(50, 0, velocityX+i, velocityY);
        this.spawnActor(bullet);
    }
    shootBulletB(speed,j) {
        const a = this.x - 450;
        const b = this.y - 0;
        const velocityX = a/Math.sqrt(a*a+b*b) * speed;
        const velocityY = b/Math.sqrt(a*a+b*b) * speed;

        const bullet = new EnemyBullet(450, 0, velocityX+j, velocityY);
        this.spawnActor(bullet);
    }

    update(gameInfo, input) {
    	fiX = this.x;
    	fiY = this.y;
        // キーを押されたら移動する
        this._velocityX = 0;
        this._velocityY = 0;

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

       this._timeCountS++;
        if(this._timeCountS > this._intervalS) {
          for(let i = -1*((Number(targetStr)-1)/2); i <= ((Number(targetStr)-1)/2); i++) {
            	this.shootBulletA(7,i);		//自機狙い弾の発射
            }
            for(let j = -1*((Number(targetStr)-1)/2); j <= ((Number(targetStr)-1)/2); j++) {
            	this.shootBulletB(7,j);		//自機狙い弾の発射
            }
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
        bom.textContent = 'ボム :'+this.bombval;
    }
}

//敵のクラス
class Enemy extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(32, 0, 32, 32));
        const hitArea = new Rectangle(0, 0, 32, 32);
        super(x, y, sprite, hitArea, ['enemy']);

        this.maxHp = enemyHp ;		//敵の最大HP
        this.currentHp = this.maxHp;

		this._intervalA = commonInterval1;
		this._intervalB = commonInterval2;
        this._interval = inductionInterval;		//弾幕の発射間隔(初期値は30)
        this._intervalC =spiralInterval;
        this._intervalD = fireworkInterval;
        this._timeCount =  0;		//謎の値
        this._timeCountA = 0;
        this._timeCountB = 0;
        this._timeCountC = 0;
        this._timeCountD = 0;
        this._velocityX = 1.5;		//敵の動くスピード(初期値は0.3でした)

        // プレイヤーの弾に当たったらHPを減らす
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('playerBullet')) {
               this.currentHp--;
               this.dispatchEvent('changehp', new GameEvent(this));
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
    shootCircularBulletsA(num, speed,angle) {
        const degree = 360 / num;		//初期値は360
        for(let i = 0; i < num; i++) {
            this.shootBullet(degree * i+angle, speed);
        }
    }

    update(gameInfo, input) {
    	hp.textContent = 'HP:'+this.currentHp;
        // 左右に移動する
        this.x += this._velocityX;
        if(this.x <= 100 || this.x >= 400) {		//敵が動く範囲？
        	this._velocityX *= -1;
        }
        //誘導弾
		this._timeCount++;
        if(this._timeCount > this._interval) {
        	if(inductionStr==0){
            	this._timeCount = 0;
        	}else{
        		const bullet = new inductionBullet(this.x, this.y);
        		this.spawnActor(bullet);
        		this._timeCount=inductionStr*inductionInterval/40;
        	}
        }
        // インターバルを経過していたら弾を撃つ
        //通常弾
        this._timeCountA++;
        if(this._timeCountA > this._intervalA) {
        	this.shootCircularBullets(commonStr1, commonSpeed1);//引数１は弾幕の密度、引数２は弾速
            this._timeCountA = 0;
        }
		//通常弾2
        this._timeCountB++;
        if(this._timeCountB > this._intervalB) {
        	this.shootCircularBulletsA(commonStr2,commonSpeed2,commonAngle2); //引数１は弾幕の密度、引数２は弾速,3は追加角度
            this._timeCountB = 0;
        }
        //渦巻
        this._timeCountC++;
        if(this._timeCountC > this._intervalC) {
        	const spawner = new SpiralBulletsSpawner(this.x, this.y,spiralStr);
            this.spawnActor(spawner);
            this._timeCountC = 0;
        }
        //花火
         this._timeCountD++;
        if(this._timeCountD > this._intervalD) {
	        for(let fw=1;fw<=fireworkStr;fw++){
	            var spdX = Math.random() *  10  - 2; // -2〜+2
	            var spdY = Math.random() *  8  +1;
	            var explosionTime = onFire ;
	            var bulletEX = new FireworksBullet(this.x, this.y, spdX, spdY,explosionTime);
	            this.spawnActor(bulletEX);
			}
            this._timeCountD = 0;
        }

        // HPがゼロになったらdestroyする
        if(this.currentHp <= 0) {
            this.destroy();
        }
        const abullet = new aBullet(this.x,882, 0, 5);      //エネミーマーカーの場所を指定
        this.spawnActor(abullet);
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

class inductionBullet extends SpriteActor {
    constructor(x, y) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(32, 32, 32, 32));
        const hitArea = new Rectangle(8, 8, 16, 16);
        super(x, y, sprite, hitArea, ['enemyBullet']);
	 	this._interval = inductionTime;
	 	this._timeCount = 0;
	 	this.currentx;
	 	this.currenty;

        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('bomb')) {
               this.destroy();
           }
        });
    }

    update(gameInfo, input) {
		this._timeCount++;
        if(this._timeCount < this._interval) {
	     	const a = fiX - this.x;
	        const b = fiY -this.y;
	        this.currentx= a/Math.sqrt(a*a+b*b) *inductionSpeed;
	        this.currenty= b/Math.sqrt(a*a+b*b) *inductionSpeed
	        this.x += this.currentx;
	        this.y += this.currenty;
		}else{
			this.x += this.currentx;
			this.y += this.currenty;
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
        this._radius = 10;    //半径
        this._bullets = [];
    }

    update(gameInfo, input) {
        // 指定回数回転したらやめる
        const rotation = this._angle / 360;
        if(rotation >= this._rotations) {
            this._bullets.forEach((b) => b.isFrozen = false); // 凍結解除
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
        const bSpdX = Math.random() *  spiralSpeed - 1; // -1?+1
        const bSpdY = Math.random() *  spiralSpeed - 1;
        const bullet = new EnemyBullet2(bX, bY, bSpdX, bSpdY, true);
        this._bullets.push(bullet);

        this.spawnActor(bullet);
    }
}

//spiral用のエネミーバレット
class EnemyBullet2 extends SpriteActor {
    constructor(x, y, velocityX, velocityY, isFrozen = false) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(32, 32, 32, 32));
        const hitArea = new Rectangle(8, 8, 16, 16);
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
        if(!this.isFrozen) {
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}
class EnemyBullet extends SpriteActor {
    constructor(x, y, velocityX, velocityY) {
        const sprite = new Sprite(assets.get('sprite'), new Rectangle(32, 32, 32, 32));
        const hitArea = new Rectangle(8, 8, 16, 16);
        super(x, y, sprite, hitArea, ['enemyBullet']);

        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.addEventListener('hit', (e) => {
           if(e.target.hasTag('bomb')) {
               this.destroy();
           }
        });
    }

    update(gameInfo, input) {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}


class FireworksBullet extends EnemyBullet {
    constructor(x, y, velocityX, velocityY, explosionTime) {
        super(x, y, velocityX, velocityY);
        	console.log(explosionTime);

        this._eplasedTime = 0;
        this.explosionTime = explosionTime;
    }

    // degree度の方向にspeedの速さで弾を発射する
    shootBullet(degree, speed) {
        const rad = degree / 180 * Math.PI;
        const velocityX = Math.cos(rad) * speed;
        const velocityY = Math.sin(rad) * speed;

        const bullet = new EnemyBullet(this.x, this.y, velocityX, velocityY);
        this.spawnActor(bullet);
    }

    // num個の弾を円形に発射する
    shootCircularBullets(num, speed) {
        const degree = 360 / num;
        for(let i = 0; i < num; i++) {
            this.shootBullet(degree * i, speed);
        }
    }

    update(gameInfo, input) {
        super.update(gameInfo, input);

        // 経過時間を記録する
        this._eplasedTime++;

        // 爆発時間を超えたら弾を生成して自身を破棄する
        if(this._eplasedTime > this.explosionTime) {
            this.shootCircularBullets(10, fireworkSpeed);
            this.destroy();
        }
        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
             this.shootCircularBullets(10, fireworkSpeed);
            this.destroy();
        }
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

        if(this.isOutOfBounds(gameInfo.screenRectangle)) {
            this.destroy();
        }
    }
}
//背景を表示させるクラス
class BackG extends SpriteActor {
constructor(x, y) {
       const sprite = new Sprite(assets.get('uchu'), new Rectangle(0, 0, 600, 1200));
       const hitArea = new Rectangle(0, 0, 0, 0);
       super(x, y, sprite, hitArea, ['back']);
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
        const text = new TextLabel(60, 200, 'ゲームクリア！');
        this.add(text);

    }update(gameInfo, input) {		//すべての処理を司るメソッド
        this._updateAll(gameInfo, input);
        this._hitTest();
        this._disposeDestroyedActors();
        this._clearScreen(gameInfo);
        this._renderAll();
        if(input.getKey(' ')){location.reload();}
        alert("おめでとう！！！");

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
        const enemy = new Enemy(300, 100);
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

localStorage.setItem("new", elapsedTime);

var rank5 = localStorage.getItem("fifth");
if(elapsedTime<rank5){

	localStorage.setItem("fifth", elapsedTime);
	var rank4 = localStorage.getItem("fourth");

	if(elapsedTime<rank4){
		localStorage.setItem("fifth",rank4);
		localStorage.setItem("fourth", elapsedTime);
		var rank3 = localStorage.getItem("third");

		if(elapsedTime<rank3){
			localStorage.setItem("fourth",rank3);
			localStorage.setItem("third", elapsedTime);
			var rank2 = localStorage.getItem("second");

			if(elapsedTime<rank2){
				localStorage.setItem("third",rank2);
				localStorage.setItem("second", elapsedTime);
				var rank1 = localStorage.getItem("first");

				if(elapsedTime<rank1){
					localStorage.setItem("second",rank1);
					localStorage.setItem("first", elapsedTime);
				}

			}
		}
	}
}


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

assets.addImage('mark', '../image/マーカー.png');
assets.addImage('my', '../image/godhand.png');
assets.addImage('bom', '../image/bomb2.png');
assets.addImage('uchu', 'ダウンロード.jpg');
assets.addImage('sprite', '../image/sprite.png');
assets.loadAll().then((a) => {
    const game = new DanamkuStgGame();
    var kon = document.body.childNodes[1];
    kon.appendChild(game.screenCanvas);
    game.start();
});
