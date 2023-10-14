let xoff = 0;
let save = 200;
let saveOne = 200;
let gravity = 0.1;
let x=width/2.0-50;
let y=0;
let amount = random(20,100);
let current = height/2.0;
let num =0;
let g = -50;
let timer = 0;
let timeArray = []; 
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   stroke(0);
   strokeWeight(0);
  let bgColor = color(0); 
    background(bgColor);
    textFont('Comic Sans MS');
    rectMode(CENTER);
    textSize(24);
    let bar_spacing = height / 10;
    let bar_height = width / 12;
    let bar_pos_x = width / 2;
    let lease = map(vocal, 0, 200, 0, 300);
    
    for(let c= 0;c<40;c++) {
      for(let g = 0;g<40;g++){
        fill(random(250),random(250),random(250));
        rect(width/2.0-105+(g*6),height/2-445+c*6,6,6);
      }
    }
    fill(250,0,0,70);
    strokeWeight(85);
    ellipse(width/2.0,height/2.0-340,300,300);
    strokeWeight(0);
    fill(120);
  rect(width/2.0,0,15,65);
    for (let x = 0; x <= width; x += 10) {
      fill(5 * vocal, 15 * vocal, 10 * vocal);
      let y = noise(xoff) * (vocal * 6);  // Get a noise value based on xoff and scale it according to 'vocal'
      strokeWeight(0);
      fill(6 * vocal, 3 * vocal, 9 * vocal);
      ellipse(x, y, 10, lease);  // Draw an ellipse at x, y
        if(x==width){
          save = y;
        }
        if(x==0){
          saveOne = y;
        }
      xoff += 0.05;  // Increment xoff for the next loop iteration
    }
    
    fill(200);
    strokeWeight(2);
    fill(2*vocal,2*vocal,2*vocal);  
    rect(width,save,20,lease+10);
    rect(0,saveOne,20,lease+10);
    strokeWeight(0);
    for (let a = 0; a < width +3; a += 10) {
      for (let i = 0; i < height+6 / 2.0; i += 10) {
        let t = map(i, 0, width / 2.0, 0, 1); // Map 'a' to a range of 0 to 1, to blend vertically
        
        let checkerColor = color(0); // for black color; use color(255) for white
        
        if ((int(a / 5) + int(i / 5)) % 2 == 0) // for creating checker pattern
          checkerColor = color(255); // use color(0) for black
        
        let col = lerpColor(bgColor, checkerColor, t); // Interpolate between bgColor and checkerColor by t
        fill(col);
        rect(0 + a, height / 2.0+50 + i+120, 10, 10);
    }
  }
  let bs = 1
  //timeArray.push(bs);
  // if(timer>10){
  //   for(let i =0;i<20;i++){
  //     for(let z =0;i<20;i++){
  //     let g = random(-5,2);
  //     if(g>1){textSize(100);
  //       fill(255-i*6, 215-i*6, i*6);
        
  //     }}}
  //   timer = 0;
  // }
  // ellipse( i*30, i*30,20,20);


  // fill(90);
  // rect(100,750-other,50,50+2*other);
  // rect(200,640-drum,50,50+2*drum);
  // rect(300,740-bass,50,50+2*bass);
  // rect(400,660-vocal,50,50+2*vocal);
  let myArray = [vocal, drum, bass, other]; 
  let myArray2 = ['vocal', 'drum', 'bass', 'other']; 
  fill(140,140,140,200);
  rect(100,740-vocal-10+5+30,50,70+2*vocal-10);
  fill(110,110,110,180);
  rect(200,740-drum-100+5+40,50,50+2*drum-10);
  fill(140,140,140,200);
  rect(300,740-bass+5+40,50,50+2*bass-10);
  fill(120,120,120,180);
  rect(400,740-other-80+5+40,50,50+2*other-10);

  drawStars();
for (let i = 0; i < myArray.length; i++) {
  let volume = myArray[i];
  drawWindows(volume, 100 + i * 100, 750,myArray2[i]); // x position spaced by 100 for each building
}
  
  
  // for(let z = 0;z<5;z+=10){
  //   fill(random(250),random(250),random(250));
  //   y+y+gravity;
    
  //     ellipse(x+20*z,y,20,20);
  //     if(y+20<height){
  //       gravity=-0.1;
  //     }
  //     if(y-20>height){
  //       gravity=0.1;
  //     }
  // }
 
  
  // for(let  i = 0;i < amount;i++){
  //   let size = random(10,40)
  //   fill(255,255,255,random(100));
  //   ellipse(random(width),current,size,size);



  // }
  // current += 0.1;
  // if(current > height){
  //   current = 0;
  // }

let mep = map(vocal,0,200,0,255);

  
//NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------------   
//NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP ------------------- 
//NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------------
//NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------------
//NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------------
//NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------------
//NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------- NEEDS A MAP -------------------
  var ae = map(40,100,0,255);
  ellipse(ae);
  if(vocal>50){
  drawShootingStar();}
  // ellipse(width/2.0-40,height/2.0,20,20);
  if(vocal>40){
  fill(random(250),random(250),random(250),50);  
  rect(0,0,width*2,height*2);}

}
function drawWindows(volume, xBase, yBase,a) {
  let windowCount = volume / 10; // Assuming each "10" in volume represents one window
  let v = 0;
  
  if(a == 'vocal'){
    v = -15+40;
  }
  if(a == 'drum'){
    v = -105+40;
  }
  if(a == 'bass'){
    v =-5+40;
  }
  if(a == 'other'){
    v = -85+40;
  }
  for (let i = 0; i < windowCount; i++) {
    let yOffset = i * 20; // Assuming 20 units space for each window stack
    fill(255, 234, 0,200);
    rect(xBase - 10, yBase - yOffset+v, 10, 10);
    rect(xBase + 10, yBase - yOffset+v, 10, 10);
  }
}
function drawStars() {
  let starsCount = 50; // number of stars you want to display
  fill(255); // assuming stars are white

  for (let i = 0; i < starsCount; i++) {
    let starX = random(width);
    let starY = random(height/1.2);
    let starSize = random(2, 5); // random size for stars between 2 and 5
    ellipse(starX, starY, starSize, starSize); // this function draws an ellipse (or circle since width and height are the same)
  }
}
function drawShootingStar() {
  
    let startX = random(width);
    let startY = random(height/2); 
    let endX = startX + random(50,150);
    let endY = startY - random(20,50);
    stroke(255);
    strokeWeight(2);
    line(startX, startY, endX, endY);
  
}
