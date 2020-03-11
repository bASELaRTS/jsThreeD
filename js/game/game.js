class Game extends Engine {      
  constructor(){
    super(320,240);
  }
  setup(){
  }
  paint(){
    //this.graphics.clear();
    var i = 0;
    var c = 0;
    for(i=0;i<100;i++){
      c = (Math.random()*255)|0;
      this.graphics.setPixel(
         (Math.random()*this.width)|0
        ,(Math.random()*this.height)|0
        ,c,c,c
        /*
        ,(Math.random()*255)|0
        ,(Math.random()*255)|0
        ,(Math.random()*255)|0
        /**/
      );
    }
    this.graphics.paint();
    
    var span = document.getElementById("lblMessage");
    span.innerText  = ""+this.timer.fps;
    span.innerText += "\r\n"+this.entities.count();
  }
}      