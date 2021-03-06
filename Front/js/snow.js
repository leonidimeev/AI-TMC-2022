const rand = (max = 1) => Math.random() * max;

function Vector2(x, y) {
  this.x = x;
  this.y = y;
  this.add = (other) => new Vector2(this.x + other.x, this.y + other.y);
  this.multiply = (n) => new Vector2(this.x * n, this.y * n);
  this.equals = (other) => this.x === other.x && this.y === other.y;
  this.toString = () => "<" + this.x + ", " + this.y + ">";
}

function Object2(position, velocity, scale, color = "white") {
  this.position = position;
  this.velocity = velocity;
  this.scale = scale;
  this.color = color;

  this.move = function () {
    this.position = this.position.add(this.velocity);
  }

  this.draw = function (ctx) {
    ctx.shadowBlur = 5;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.scale.x, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }

  this.wrap = function (canvas) {
    const wrap = (x, y) => {
      this.position = new Vector2(x, y);
    };
    if (this.position.y > canvas.height) {
      wrap(rand(canvas.width), -this.scale.y);
    } else if (this.position.y < -this.scale.y) {
      wrap(rand(canvas.width), canvas.height);
    } else if (this.position.x < -this.scale.x) {
      wrap(canvas.width, rand(canvas.height));
    } else if (this.position.x > canvas.width + this.scale.x) {
      wrap(-this.scale.x, rand(canvas.height));
    }
  };
}

function createCanvas(width, height) {
  const newCanvas = document.createElement("canvas");
  newCanvas.width = width;
  newCanvas.height = height;
  return newCanvas;
}

const snow = {

  "createRandomSnowflake": function (canvas, position = new Vector2(rand(canvas.width), rand(canvas.height))) {
    let snowflakePosition = position;
    let snowflakeVelocity = new Vector2(rand(3) - 1, rand(10) + 2);
    let randSize = rand(3) + 1;
    let snowflakeSize = new Vector2(randSize, randSize);
    let snowflake = new Object2(snowflakePosition, snowflakeVelocity, snowflakeSize);
    return snowflake;
  },

  "createSnowflakes": function (canvas, numSnowflakes) {
    let snowflakes = [];
    for (let i = 0; i < numSnowflakes; i++) {
      snowflakes.push(this.createRandomSnowflake(canvas));
    }
    return snowflakes;
  },

  "update": function (canvas, snowflakes) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.requestAnimationFrame(() => this.update(canvas, snowflakes));

    for (let i = 0; i < snowflakes.length; i++) {
      snowflakes[i].draw(canvas.getContext("2d"));
      snowflakes[i].wrap(canvas);
      snowflakes[i].move();
    }
  },

  "main": function () {

    const canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.id = "snowCanvas";

    let snowflakes = this.createSnowflakes(canvas, 20);
    

    this.update(canvas, snowflakes);


    document.body.insertBefore(canvas, document.body.firstChild);
    document.getElementById("Home").appendChild(canvas);
  },
}