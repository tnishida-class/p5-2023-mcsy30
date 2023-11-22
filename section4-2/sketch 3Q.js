
let shapes=[];

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(25, 25, 112);//背景色をMidnightBlueに

  for(let i = 0; i < shapes.length; i++){
    let s = shapes[i];
    fill(s.color)
    if(s.type === 'star'){
    star(s.x, s.y, s.size);}

    else if(s.type === 'heart'){
      heart(s.x,s.y,s.size);
    }
    s.x += s.vx;
    s.y += s.vy; 
  }
  

    fill(240,230,140)
    ellipse(width/2,height/2,500)

    noStroke()

    fill(255)
    ellipse(width/2-125,height/2-50,120)//左白目
    fill(0)
    ellipse(width/2-125,height/2-50,100)//左黒目
    fill(255)
    ellipse(width/2-145,height/2-70,20)//左小白目
    

    fill(255)
    ellipse(width/2+125,height/2-50,120)//右白目
    fill(0)
    ellipse(width/2+125,height/2-50,100)//右黒目
    fill(255)
    ellipse(width/2+105,height/2-70,20)//右小白目

    fill(255,182,193)
    ellipse(width/2-170,height/2+30,100,80)//左ほっぺ

    fill(255,182,193)
    ellipse(width/2+170,height/2+30,100,80)//右ほっぺ

    
    fill(160,82,45)
    arc(width/2,height/2+50,100,100,0,PI)
  }





function star(cx,cy,r){//★をかく関数
  noStroke()
  beginShape();
  for(var i =0; i<5; i++){
    let theta =TWO_PI*i* 2/5 - HALF_PI;
    let x= cx +cos(theta)*r;
    let y= cy +sin(theta)*r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function heart(x, y, size) {//♡をかく関数
  beginShape();     
  vertex(x, y);     
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);  
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);  
  endShape(CLOSE);  
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  

  const s ={
    x: mouseX,
    y: mouseY,
    size: random(10, 100),
    vx: dx+5,
    vy: dy+5,
  };
  
  if (keyIsDown("A".charCodeAt(0))) {//Aを押しているときはハートに
    s.type = 'heart';
    s.color = color(255, 192, 203); // ピンクに
  } else {
    s.type = 'star';
    s.color = color(255, 204, 0); // 黄色に
  }

  shapes.push(s);
} 



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
