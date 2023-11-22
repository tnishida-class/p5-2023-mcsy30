// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);//キャンバスを大きく
  count = 0;
  cycle = 100;
}

function draw(){
  background(25, 25, 112);//背景色をMidnightBlueに
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count<cycle/2){
    size= count +50
  }
  else{
    size=(cycle-count)+50;
  }

  if(keyIsDown("A".charCodeAt(0))){ count+= 5; }
  ellipse(width / 2, height / 2, size);
 
}

function star(cx,cy,r){
  beginShape();
  for(var i =0; i<5; i++){
    let theta =TWO_PI*i* 2/5 - HALF_PI;
    let x= cx +cos(theta)*r;
    let y= cy +sin(theta)*r;
    vertex(x,y);
  }
  endShape(CLOSE);}
