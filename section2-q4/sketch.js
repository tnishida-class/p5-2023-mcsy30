// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  noStroke()
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    fill(255,255,255)
    if(((i)% 2=== 1)){
    rect(0, i * d, width, (i + 1) * d);
  }
  
else{
  fill(0,51,160);
  let size = d * 5;
  rect(0, i*d, d * 15, d * 5);
}
  }
  
  fill(0,51,160);
  rect(0,0,d*5,d*5)
  fill(255);
  rect(40,0,height/9, d*5)
  fill(255);
  rect(0,40,d*5,height/9)
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}