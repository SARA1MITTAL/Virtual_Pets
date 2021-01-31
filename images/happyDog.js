class happyDog{
    constructor(x,y,width,height){
    var options = {
    isStatic: true 
    }
    this.body = Bodies.rectangle (x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    this.image = loadImage("images/doglmg1.png"); 
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,0,380,500,20)
    }
};