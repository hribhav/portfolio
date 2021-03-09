



var sketch;

function preload(){

  p1=loadImage("p1.svg");
  p2=loadImage("p2.svg");
  p3=loadImage("p3.svg");
  p4=loadImage("p4.svg");
  p5=loadImage("p5.svg");
  p6=loadImage("p6.svg");
  p7=loadImage("p7.svg");
  p8=loadImage("p8.svg");
  p9=loadImage("p9.svg");
  p10=loadImage("p10.svg");
  p11=loadImage("p11.svg");
  p12=loadImage("p12.svg");
  p13=loadImage("p13.svg");
  p14=loadImage("p14.svg");
  p15=loadImage("meme-8.png");
  p16=loadImage("hair.svg");
  
 
  


  
  // s1=loadImage("Artboard 2.png");
  // s2=loadImage("donut.png");
  // s3=loadImage("heart.png");
  // s4=loadImage("ice.png");
  // s5=loadImage("illuminati.png");
  // s6=loadImage("juice.png");
  // s7=loadImage("kiss.png");
  // s8=loadImage("music.png");
  // s9=loadImage("heart.png");
  // sa1=loadImage("rocket.png");
  // sa2=loadImage("rocket copy.png");


  sketch=loadSound("Writing-slow-with-a-marker-www.fesliyanstudios.com.mp3")
}
var x;
var can;
function setup() {
  can=createCanvas(5000, 878);
  can.style("z-index:-99");
  image(p1,1000,100);
  
   image(p2,1300,500);
   image(p3,900,480);
  image(p4,1400,40);
  image(p5,1400,700);
  image(p6,1000,600);
  image(p7,1200,150);
  image(p8,1450,450);
  image(p9,1100,450);
  image(p10,800,150);
  image(p11,1200,650);
  image(p12,1600,80);
  image(p13,1700,500);
  image(p14,1600,630);
  image(p15,2700,500);
 
image(p16,200,600);
 
  strokeWeight(2);
  stroke(0);
  

 
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
if(!mouseIsPressed()){
  sketch.play();
  sketch.setVolume(0.1);
  
}
else{
  sketch.pause();
}
  
  return false;
}

function mouseIsPressed(){
  s1.resize(20,20);
}

const cursor = document.querySelector("#cursor");

window.addEventListener('mousemove', (e) => {
let x =e.pageX,
    y=e.pageY;

    cursor.style.left = '$(x)px';
    cursor.style.top = '$(y)px';


})