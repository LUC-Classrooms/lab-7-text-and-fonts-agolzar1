/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("TimesNewRoman");
}

function draw(){
  background(200);
  if(mouseIsPressed) {
  textSize(20);
  text("I love chicken", 20, 60);
} else {

  textSize(40);
  text("My name is Ariana Golzar", 20, 160);
  }
}  
