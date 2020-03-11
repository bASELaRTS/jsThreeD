class Vector4 {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
  }
  
  setCoordinates(dx,dy,dz,dw){
    this.x = dx;
    this.y = dy;
    this.z = dz;
    this.w = dw;
  }
  
  setVector(v){
    this.setCoordinates(v.x,v.y,v.z,v.w);
  }
  
  setVector3(v){
    this.setCoordinates(v.x,v.y,v.z,1.0);
  }
  
  static fromXYZW(dx,dy,dz,dw){
    var v = new Vector4();
    v.setCoordinates(dx,dy,dz,dw);
    return v;
  }
  
  static fromVector3(v){
    return Vector4.fromXYZW(v.x,v.y,v.z,1.0);
  }
}