// Diwali rangoli, drawn ring by ring
const C = [540, 860];  // center
const COLS = ['#ffd24a', '#ff8a1f',
              '#ff3fa4', '#4fe08a'];
let dots = [];

function setup() {
  createCanvas(1080, 1920);
  pixelDensity(1);
  noStroke();
  for (let k = 0; k < 9; k++) {
    let n = 8 * (k + 2), r = 70 + k * 42;
    for (let i = 0; i < n; i++) {
      let a = TWO_PI * i / n;
      dots.push([cos(a) * r, sin(a) * r,
                 k * 36 + i * 1.2,
                 COLS[k % 4]]);
    }
  }
}

function draw() {
  background(12, 6, 24);
  for (let [x, y, t, c] of dots) {
    let p = (frameCount - t) / 18;
    p = constrain(p, 0, 1);
    fill(c);
    circle(C[0] + x, C[1] + y, 16 * p);
  }
  petals();
  diyas();
  title();
}

function petals() {
  for (let k = 0; k < 8; k++) {
    let t = frameCount - 400 - k * 45;
    let p = constrain(t / 50, 0, 1);
    let r = 91 + k * 42;
    fill(COLS[(k + 1) % 4]);
    for (let i = 0; i < 8; i++) {
      let a = TWO_PI / 8 * (i + k % 2 / 2);
      push();
      translate(C[0] + cos(a) * r,
                C[1] + sin(a) * r);
      rotate(a + HALF_PI);
      ellipse(0, 0, 22 * p, 42 * p);
      pop();
    }
  }
}

function diyas() {
  for (let i = 0; i < 12; i++) {
    if (frameCount < 780 + i * 12) continue;
    let a = TWO_PI * i / 12;
    let x = C[0] + cos(a) * 500;
    let y = C[1] + sin(a) * 500;
    let f = 4 * sin(frameCount * 0.3 + i);
    fill(200, 90, 30);
    arc(x, y + 6, 46, 26, 0, PI, CHORD);
    fill(255, 190, 60);
    ellipse(x, y - 14 - f / 2, 14, 26 + f);
  }
}

function title() {
  let t = frameCount - 930;
  let p = constrain(t / 90, 0, 1);
  if (p <= 0) return;
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(104);
  drawingContext.shadowBlur = 60;
  drawingContext.shadowColor = '#ff8c00';
  fill(255, 210, 74, 255 * p);
  text('HAPPY DIWALI', C[0], 1500);
}
