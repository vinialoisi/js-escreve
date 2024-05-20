function setup() {
    createCanvas(400, 400);
    background("brown");
  }
  
  function draw() {
    
    stroke("white");
    fill("white");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 35, 35);
    }
  }