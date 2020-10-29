class Box {
    constructor (x, y, width, height){

        var body_options = {
            restitution : 0.6
        }
        
        this.body = Bodies.rectangle(x,y,width,height, body_options);
        
        this.width = width;
        this.height = height;
        
        World.add (world, this.body);
        
    }

    display(){

        
        push(); //saves the previous setting

        //changes the origin
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        fill ("white");
        rect(0, 0, this.width, this.height);
        
        pop();  //goes back to previous setting
    }
}