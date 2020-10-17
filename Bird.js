class Bird {
    constructor(x,y){
        var options = {
            isStatic:false,
    'restitution':0.5,
    'friction': 0,
    'density': 0.1
    }
    
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    this.image= loadImage("paper.png")
    World.add(world, this.body);
    
    }
    display() {
    var pos = this.body.position;
    var angle = this.body.angle;
   // pos.x=mouseX
   // pos.y=mouseY


    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("purple");
    stroke("white")
    strokeWeight(5)
    image(this.image,0,0,this.width,this.height)
    //rect(0,0,this.width,this.height);
    pop();
    
    }
    
    
    
    };