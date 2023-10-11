let xoff = 0;
let save = 200;
let saveOne = 200;
let gravity = 0.1;
let x=width/2.0-50;
let y=0;
let amount = random(20,100);
let current = height/2.0;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  let bgColor = color(0); //background color
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
        rect(width/2.0-97.5+(g*5),height/2-140+c*5,5,5);
      }
    }
    fill(250,0,0,70);
    strokeWeight(85);
    ellipse(width/2.0,height/2.0-40,200,200);
    strokeWeight(0);
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
        rect(0 + a, height / 2.0 + i+80, 10, 10);
    }
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

  
  for(let  i = 0;i < amount;i++){
    let size = random(10,40)
    fill(255,255,255,random(100));
    ellipse(random(width),current,size,size);



  }
  current += 0.1;
  if(current > height){
    current = 0;
  }

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
  //  strokeWeight(0);
  //  for(let i = 0; i < vocal*2;i++){
  //    fill(2*vocal,2*vocal,2*vocal);
  //    for(let a =0;a<vocal;a++){
  //      ellipse(width/3+a*4+20,height/3-vocal,40+vocal,40+vocal);
  //    }
  //  }
   // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
   // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
  //  fill(0,0,0,0);
  //  strokeWeight(1);
  //  translate(width / 2, height / 2);
  //   rotate(PI *bass);
  //   rect(-70, -70, 52, 52);
  //  fill(255,255,255);
  // rotate(0.02);
  // ellipse(width/2.0-40,height/2.0,20,20);
}