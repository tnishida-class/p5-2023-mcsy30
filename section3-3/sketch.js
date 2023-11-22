// テキスト「キーボード操作に反応する」
let x, y,vy;
const g = 1;     // 重力（いろいろな値を試してみましょう）
const jump = 20; // ジャンプ力（いろいろな値を試してみましょう）
const ground = 20;
const size = 50;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y =  height - ground - size / 2;
  vy = 0;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; 
    if(keyIsDown("B".charCodeAt(0))){x-=10}}
  if(keyIsDown(RIGHT_ARROW)){ x += 5; 
    if(keyIsDown("B".charCodeAt(0))){x+=10} }

  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown(" ".charCodeAt(0))){y-=30;}

  let gy = height - ground;
  line(0, gy, width, gy); // 地面の線
  

  
  y += vy;
   
  
  if(y < height - ground - size / 2){ // 地面より上、つまり空中にいる
    vy += g; // 下方向に重力の影響で加速する
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
}




// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
