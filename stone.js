class Stone extends BaseClass {
    constructor(x,y,width,height){
      super(x,y,50,50);
      
        var options={
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
        }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.image = loadImage("Images/stone.png");
      this.body=Bodies.circle(this.x,this.y,this.r,options)
      //World.add(world, this.body);
    }
  
    display(){
     // var angle = this.body.angle;
      push();
      //translate(this.body.position.x, this.body.position.y);
     // rotate(angle);
      imageMode(CENTER);
      image(this.image, 400, 350, this.width, this.height);
      pop();
    }
  };  