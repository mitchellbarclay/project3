function setup() {
  createCanvas(600,800);
  background(260);
  template = loadImage("img/ipad_template.png"); 
  wallpaper = loadImage("img/wallpaper.jpg"); 
}

function draw() {

  image(wallpaper, 20,20,560,760);
  noStroke();
  
  //dock
  
  fill(150,80);
  
  rect(10, 660, 580, 100);
  
  //apps
  
  fill(345, 111, 202);
  
  rect(100,110,50,50,10);
  rect(217,110,50,50, 10);
  rect(334,110,50,50, 10);
  rect(451,110,50,50, 10);
  
  rect(100,220,50,50, 10);
  rect(217,220,50,50, 10);
  rect(334,220,50,50, 10);
  rect(451,220,50,50, 10);
  
  rect(100,330,50,50, 10);
  rect(217,330,50,50,10);
  
  //dock apps
  
  rect(100,675,50,50,10);
  rect(217,675,50,50, 10);
  rect(334,675,50,50, 10);
  rect(451,675,50,50, 10);
  
  
  
  
  image(template, 0,0, 600,800);
  
}