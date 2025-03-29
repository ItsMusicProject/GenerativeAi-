let canvas; function setup() { canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.6); canvas.parent('artCanvas'); noLoop(); generateArt(); }

function draw() {}

function generateArt() { background(10); for (let i = 0; i < 200; i++) { let x = random(width); let y = random(height); let size = random(5, 50); let alpha = random(100, 255); let colorPick = color(random(200, 255), random(50, 100), random(0, 50), alpha); fill(colorPick); noStroke(); ellipse(x, y, size, size); } drawWarriorEffect(); }

function drawWarriorEffect() { stroke(255, 69, 0, 180); strokeWeight(3); for (let i = 0; i < 10; i++) { let x1 = random(width); let y1 = random(height); let x2 = x1 + random(-50, 50); let y2 = y1 + random(-50, 50); line(x1, y1, x2, y2); } }

document.getElementById('regenerate').addEventListener('click', () => { clear(); generateArt(); });

function windowResized() { resizeCanvas(windowWidth * 0.8, windowHeight * 0.6); generateArt(); }

