var btn_red;
var btn_green;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  btn_red = createButton("red");
  btn_red.position(50,340);
  btn_red.mousePressed(redbackground);

  btn_green = createButton("green");
  btn_green.position(100,340);
  btn_green.mousePressed(greenbackground);

  btn_blue = createButton("blue");
  btn_blue.position(165,340);
  btn_blue.mousePressed(bluebackground);

  add_red = createButton("+");
  add_red.position(55,310);
  add_red.mousePressed(addred);

  minus_red = createButton("-");
  minus_red.position(55,370);
  minus_red.mousePressed(minusred);

  add_green = createButton("+");
  add_green.position(105,310);
  add_green.mousePressed(addgreen);  

  minus_green = createButton("-");
  minus_green.position(105,370);
  minus_green.mousePressed(minusgreen);  

  add_blue = createButton("+");
  add_blue.position(170,310);
  add_blue.mousePressed(addblue);  

  minus_blue = createButton("-");
  minus_blue.position(170,370);
  minus_blue.mousePressed(minusblue);   
}


function redbackground(){
  r = 255;
  g = 0;
  b = 0;
}

function greenbackground(){
  r = 0;
  g = 255;
  b = 0;
}

function bluebackground(){
  r = 0;
  g = 0;
  b = 255;
}

function addred(){
  if(r < 255){
    r += 5;
  }
}

function minusred(){
  if(r > 0){
    r -= 5;
  }
}

function addgreen(){
  if(g < 255){
    g += 5;
  }
}

function minusgreen(){
  if(g > 0){
    g -= 5;
  }  
}

function addblue(){
  if(b < 255){
    b += 5;
  }
}

function minusblue(){
  if(b > 0){
    b -= 5;
  }
}


function draw() {
  background(r,g,b);

  text("(" + r + "," + g + "," + b + ")", 300,350);
}

