const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
      this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
      this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

class DemonCircle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dragging = false;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  eatBall(ball) {
    const dx = this.x - ball.x;
    const dy = this.y - ball.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.radius + ball.radius) {
      this.radius += ball.radius / 2;
      return true;
    }
    return false;
  }

  handleMouseDown(e) {
    const dx = this.x - e.clientX;
    const dy = this.y - e.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.radius) {
      this.dragging = true;
    }
  }

  handleMouseUp() {
    this.dragging = false;
  }

  handleMouseMove(e) {
    if (this.dragging) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
  }
}

// 创建弹球数组
let balls = [];
for (let i = 0; i < 50; i++) {
  let radius = Math.random() * 20 + 5;
  let x = Math.random() * (canvas.width - radius * 2) + radius;
  let y = Math.random() * (canvas.height - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 5;
  let dy = (Math.random() - 0.5) * 5;
  let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  balls.push(new Ball(x, y, dx, dy, radius, color));
}

let demonCircle = new DemonCircle(canvas.width / 2, canvas.height / 2, 50, 'pink');

canvas.addEventListener('mousedown', (e) => {
  demonCircle.handleMouseDown(e);
});
canvas.addEventListener('mouseup', () => {
  demonCircle.handleMouseUp();
});
canvas.addEventListener('mousemove', (e) => {
  demonCircle.handleMouseMove(e);
});

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach((ball, index) => {
    ball.update();
    if (demonCircle.eatBall(ball)) {
      balls.splice(index, 1);
    }
  });

  if (balls.length === 0) {
    ctx.font = '48px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('游戏结束', canvas.width / 2 - 80, canvas.height / 2);
    return;
  }

  demonCircle.draw();
}

animate();