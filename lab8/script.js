const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ballRadius = 20; // promień kulki
let x = canvas.width / 2; // początkowa pozycja x kulki
let y = canvas.height - 30; // początkowa pozycja y kulki
let dx = 2; // prędkość pozioma
let dy = -2; // prędkość pionowa
const balls = []; // tablica zawierająca kulki
let yThreshold = 0.2 * canvas.width; // próg odległości pomiędzy kulkami

// Klasa reprezentująca pojedynczą kulkę
class Ball {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  // Rysowanie kulki na canvasie
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  // Aktualizowanie pozycji kulki
  update() {
    // Odbijanie się od krawędzi canvasu
    if (this.x + this.dx > canvas.width - ballRadius || this.x + this.dx < ballRadius) {
      this.dx = -this.dx;
    }
    if (this.y + this.dy > canvas.height - ballRadius || this.y + this.dy < ballRadius) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Rysowanie linii pomiędzy kulkami, jeśli odległość jest mniejsza niż yThreshold
    for (let i = 0; i < balls.length; i++) {
      if (this !== balls[i]) {
        let distance = Math.sqrt(Math.pow(this.x - balls[i].x, 2) + Math.pow(this.y - balls[i].y, 2));
        if (distance < yThreshold) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(balls[i].x, balls[i].y);
          ctx.strokeStyle = "#0095DD";
          ctx.stroke();
        }
      }
    }
  }
}

