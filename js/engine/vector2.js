class Vector2 {
  constructor(){
    this.x = 0;
    this.y = 0;
  }
  
  setCoordinates(dx,dy){
    this.x = dx;
    this.y = dy;
  }
  
  setVector(v){
    this.setCoordinates(v.x,v.y);
  }
  
  length(){return Vector2.length(this);}
  
  static length(v){return Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);}
  
  static normalize(v){
    var d = Vector2.length(v);
    v.x = v.x / d;
    v.y = v.y / d;
  }
  
  static add(v1,v2,v3){
    v3.x = v1.x + v2.x;
    v3.y = v1.y + v2.y;
  }

  static subtract(v1,v2,v3){
    v3.x = v1.x - v2.x;
    v3.y = v1.y - v2.y;
  }
  
  static multiply(v1,v2,v3){
    v3.x = v1.x * v2.x;
    v3.y = v1.y * v2.y;
  }
  
  static scale(v1,scalar,v2){
    v2.x = v1.x * scalar;
    v2.y = v1.y * scalar;
  }
  
  static fromXY(dx,dy){
    var v = new Vector2();
    v.setCoordinates(dx,dy);
    return v;
  }
}