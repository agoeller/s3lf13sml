// ♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~SETUP~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~
// ♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~

// Both an animation and a mouseMove program

// global variables ~~~~~
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var mouseX = 0;
var mouseY = 0;

// functions ~~~~~
function resizeCanvas(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function updateMouseXY(eve){
  mouseX = eve.clientX;
  mouseY = eve.clientY;
}

// events ~~~~~
// The resizeCanvas function does not seem to be working as I expected
window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', updateMouseXY);


resizeCanvas();

// ♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~DRAW~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~
// ♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~♥‿♥~

// Here I copy+pasted my code over and over again
// There must be an easier way - for loop?
// Could not figure out any other way
// Alternates between images animating and mouseMove function
// Animation 1
setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img0'),
            0,0,canvas.width,canvas.height);
}, 400);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img1'),
            0,0,canvas.width,canvas.height);
}, 500);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img2'),
            0,0,canvas.width,canvas.height);
}, 600);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img3'),
            0,0,canvas.width,canvas.height);
}, 700);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img4'),
            0,0,canvas.width,canvas.height);
}, 800);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img5'),
            0,0,canvas.width,canvas.height);
}, 900);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img6'),
            0,0,canvas.width,canvas.height);
}, 1000);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img7'),
            0,0,canvas.width,canvas.height);
}, 1100);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img8'),
            0,0,canvas.width,canvas.height);
}, 1200);


// MouseMove 1
setTimeout(function draw(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('source'),
                mouseX, mouseY, 202, 225);
  requestAnimationFrame(draw);     // browser function to animate, what's the fastest fps animation speed, but will adjust fps according to computer speed
}, 1400);

// Animation 2
setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img0'),
            0,0,canvas.width,canvas.height);
}, 1700);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img1'),
            0,0,canvas.width,canvas.height);
}, 1800);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img2'),
            0,0,canvas.width,canvas.height);
}, 1900);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img3'),
            0,0,canvas.width,canvas.height);
}, 2000);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img4'),
            0,0,canvas.width,canvas.height);
}, 2100);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img5'),
            0,0,canvas.width,canvas.height);
}, 2200);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img6'),
            0,0,canvas.width,canvas.height);
}, 2300);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img7'),
            0,0,canvas.width,canvas.height);
}, 2400);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img8'),
            0,0,canvas.width,canvas.height);
}, 2500);

// MouseMove 2
setTimeout(function draw(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('source'),
                mouseX, mouseY, 202, 225);
  requestAnimationFrame(draw);
}, 2600);

// Animation 2
setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img0'),
            0,0,canvas.width,canvas.height);
}, 2900);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img1'),
            0,0,canvas.width,canvas.height);
}, 3000);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img2'),
            0,0,canvas.width,canvas.height);
}, 3100);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img3'),
            0,0,canvas.width,canvas.height);
}, 3200);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img4'),
            0,0,canvas.width,canvas.height);
}, 3300);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img5'),
            0,0,canvas.width,canvas.height);
}, 3400);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img6'),
            0,0,canvas.width,canvas.height);
}, 3500);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img7'),
            0,0,canvas.width,canvas.height);
}, 3600);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img8'),
            0,0,canvas.width,canvas.height);
}, 3700);

// MouseMove 3
setTimeout(function draw(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('source'),
                mouseX, mouseY, 202, 225);
  requestAnimationFrame(draw);
}, 3800);

// Animation 3
setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img0'),
            0,0,canvas.width,canvas.height);
}, 4100);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img1'),
            0,0,canvas.width,canvas.height);
}, 4200);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img2'),
            0,0,canvas.width,canvas.height);
}, 4300);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img3'),
            0,0,canvas.width,canvas.height);
}, 4400);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img4'),
            0,0,canvas.width,canvas.height);
}, 4500);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img5'),
            0,0,canvas.width,canvas.height);
}, 4600);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img6'),
            0,0,canvas.width,canvas.height);
}, 4700);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img7'),
            0,0,canvas.width,canvas.height);
}, 4800);

setTimeout(function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('img8'),
            0,0,canvas.width,canvas.height);
}, 4900);
