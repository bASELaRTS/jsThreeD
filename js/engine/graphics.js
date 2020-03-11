class Graphics {
  constructor(w,h){
    this.width = w;
    this.height = h;

    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    
    this.canvas.width = w;
    this.canvas.height = h;
    
    this.imageData = this.context.getImageData(0,0,this.width,this.height);
    this.pixels = this.imageData.data;
  }
  getIndex(x,y){
    if ((x>=0)&&(x<this.width)&&(y>=0)&&(y<this.height)){
      return (y*this.width+x)*4;
    }
    return -1;
  }
  setPixel(x,y,r,g,b){
    var index = this.getIndex(x,y);
    if (index>=0){
      this.pixels[index+0]=r;
      this.pixels[index+1]=g;
      this.pixels[index+2]=b;
      this.pixels[index+3]=255;
    }
  }
  clear(){
    this.fillRect(0,0,this.width,this.height,0,0,0);
  }      
  fillRect(x,y,w,h,r,g,b){
    var i = 0;
    var j = 0;
    var yh = 0;
    var xw = 0;
    
    if ((x>=this.width)||(y>=this.height)||(w<=0)||(h<=0)||((x+w)<0)||((y+h)<0)) return;
    if (x<0) x=0;
    if (y<0) y=0;
    yh = y+h;
    if (yh>this.height) yh=this.height;
    xw = x+w;
    if (xw>this.width) xw=this.width;
    for(j=y;j<yh;j++){
      this.drawHLine(x,j,xw,r,g,b);
    }
  } 
  drawHLine(x1,y,x2,r,g,b){
    var i = 0;
    if (x1>x2){
      i = x1;
      x1 = x2;
      x2 = i;
    }
    if ((x1>=this.width)||(x2<0)||(y<0)||(y>=this.height)) return;
    if (x1<0) x1=0;
    if (x2>this.width) x2=this.width;

    for(i=x1;i<x2;i++){
      this.setPixel(i,y,r,g,b);
    }
  }
  drawLine(x1,y1,x2,y2,r,g,b){
    var steep = Math.abs(y2 - y1) > Math.abs(x2 - x1);
    var i = 0;
    var dx;
    var dy;
    var ystep;
    
    if (steep) {
      i = x1;
      x1 = y1;
      y1 = i;
      
      i = x2;
      x2 = y2;
      y2 = i;
    }

    if (x1 > x2) {
      i = x1;
      x1 = x2;
      x2 = i;
      
      i = y1;
      y1 = y2;
      y2 = i;
    }

    dx = x2 - x1;
    dy = Math.abs(y2 - y1);

    var err = dx / 2;

    if (y1 < y2) {
      ystep = 1;
    } else {
      ystep = -1;
    }

    for (; x1<=x2; x1++) {
      if (steep) {
        this.setPixel(y1,x1,r,g,b);
      } else {
        this.setPixel(x1,y1,r,g,b);
      }
      
      err -= dy;
      if (err < 0) {
        y1 += ystep;
        err += dx;
      }
    }
  }
  paint(){
    this.context.putImageData(this.imageData, 0, 0);
  }
}