// 这是我们的玩家要躲避的敌人 
var Enemy = function (x, y, speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};
// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function (dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    if (this.x >= 606) {
        this.x = -101;
    }
    this.x += dt * this.speed
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// 现在实现你自己的玩家类
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.width = 101;
    this.height = 171;
    this.personImg = 'images/char-boy.png';

}
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
Player.prototype.update = function () {

};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.personImg), this.x, this.y, this.width, this.height);
};
Player.prototype.handleInput = function (key) {
    switch (key) {
        case 'left':
            if (this.x >= 101) {
                this.x -= 101;
            }
            break;
        case 'right':
            if (this.x <= 303) {
                this.x += 101;
            }
            break;
        case 'up':
            if (this.y >= 55) {
                this.y -= 83;
            }
            break;
        case 'down':
            if (this.y <= 304) {
                this.y += 83;
            }
            break;
    }
};
// 碰撞检测
Player.prototype.checkCollision = function (enemy) {
    if (this.y === enemy.y && this.x - enemy.x < 55 && (this.x - enemy.x) >= -55) {
        // 碰到敌人，玩家复位
        this.x = 202;
        this.y = 83 * 4 + 55;
    } else {

    }
}


// 现在实例化你的所有对象


// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
var allEnemies = [
    new Enemy(0, 83 * 0 + 55, 90),
    new Enemy(0, 83 * 1 + 55, 120),
    new Enemy(0, 83 * 2 + 55, 140),
    new Enemy(0, 83 * 3 + 55, 100)
];

// 把玩家对象放进一个叫 player 的变量里面
var player = new Player(202, 83 * 4 + 55);

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// 其他图片渲染


