let values = [];

function setup() {
  createCanvas(4000, 400);
  for(let i = 0; i < 200; i++){
    values[i] = random(0, 200);
  }
}

function draw() {
  background(220);
  barChartLine();
}

function barChartLine(){
  strokeWeight(5);
  for(let i = 0; i < values.length; i++){
    line(10 + (10 * i), 375, 10 + (10 * i), values[i]);
  }
}