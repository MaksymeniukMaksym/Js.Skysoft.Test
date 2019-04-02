class Vec
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }
}

class Rect
{
    constructor(w,h)
    {
        this.pos = new Vec;
        this.size = new Vec(w, h);
    }
    get left()
    {
        return this.pos.x - this.size.x / 2;
    }
    get right()
    {
        return this.pos.x + this.size.x / 2;
    }
    get top()
    {
        return this.pos.y - this.size.y / 2;
    }
    get bottom()
    {
        return this.pos.y + this.size.y / 2;
    }
}

class Square extends Rect 
{
    constructor()
    {
        super(10,10);
        this.vel = new Vec;
    }
    
}

class Physics
{
    constructor(canvas)
    {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.square = new Square;
        this.square.pos.x = 100;
        this.square.pos.y = 50;

        this.square.vel.x = 100;
        this.square.vel.y = 100;

        let lastTime;
        const  callback = (millis) => {
        if(lastTime){
            this.update((millis - lastTime) / 1000);
        }
        lastTime = millis;
        requestAnimationFrame(callback);
        };
        callback();
    }

    draw()
    {
        this._context.fillStyle = "#000";
        this._context.fillRect(0, 0,  this._canvas.width, this._canvas.height);
    
        this.drawRect(this.square);
    }

    drawRect(rect)
    {
        this._context.fillStyle = "#fff";
        this._context.fillRect(rect.pos.x, rect.pos.y,
                            rect.size.x, rect.size.y);
    
    }
    update(dt){
        this.square.pos.x += this.square.vel.x * dt;
        this.square.pos.y += this.square.vel.y * dt;
        
        if(this.square.left < 0 || this.square.right > this._canvas.width){
            this.square.vel.x = -this.square.vel.x;
        }
        if(this.square.top < 0 || this.square.bottom > this._canvas.height){
            this.square.vel.y = -this.square.vel.y;
        }
        
        this.draw();
    }
}

const canvas = document.getElementById('area');
const physics = new Physics(canvas);