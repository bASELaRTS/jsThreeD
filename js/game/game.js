class Game extends Engine {      
  constructor(){
    super(320,240);
  }
  setup(){
  }
  update(){
    var m = Matrix4.create();
    var v41 = new Vector4();
    var v42 = new Vector4();
    v41.setCoordinates(1,1,1,1);
    Matrix4.multiplyVector4(v41,m,v42);
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