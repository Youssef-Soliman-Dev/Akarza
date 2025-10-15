const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let W, H, stars = [];

function resize() {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
  stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 1.2 + 0.2,
      r: Math.random() * 1.2 + 0.2
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (let s of stars) {
    s.x -= 0.3 * (s.z);
    if (s.x < 0) s.x = W;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(122,252,255,${0.2 + 0.6 * s.z})`;
    ctx.fill();
  }
}

window.addEventListener('resize', resize);
resize();

function anim() {
  draw();
  requestAnimationFrame(anim);
}
anim();
