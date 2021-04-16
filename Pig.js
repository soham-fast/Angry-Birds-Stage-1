class Pig{
    constructor(x,y){
        var poption={restituion:0.8};
        this.body=Bodies.rectangle(x,y,50,50,poption);
        World.add(world,this.body);
        


    }

    display(){
       var pos=this.body.position
        rectMode(CENTER);
        push ();
        fill("#028A0F")
        translate(pos.x,pos.y);
        rotate(this.body.angle);
         rect(0,0,50,50);
      
       pop();
    }
    
}