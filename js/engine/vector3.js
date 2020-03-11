class Vector3 {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  
  setCoordinates(dx,dy,dz){
    this.x = dx;
    this.y = dy;
    this.z = dz;
  }
  
  setVector(v){
    this.setCoordinates(v.x,v.y,v.z);
  }
  
  length(){
    return Vector3.length(this);
  }
  
  toString(){
    var s = "";
    s += "(";
    s += this.x;
    s += ";"
    s += this.y;
    s += ";"
    s += this.z;
    s += ")";
    return s;
  }
  
  static add(v1,v2,v3){
    v3.x = v1.x + v2.x;
    v3.y = v1.y + v2.y;
    v3.z = v1.z + v2.z;
  }
  
  static subtract(v1,v2,v3){
    v3.x = v1.x - v2.x;
    v3.y = v1.y - v2.y;
    v3.z = v1.z - v2.z;
  }

  static multiply(v1,v2,v3){
    v3.x = v1.x * v2.x;
    v3.y = v1.y * v2.y;
    v3.z = v1.z * v2.z;
  }
  
  static scale(v1,scalar,v2){
    v2.x = v1.x * scalar;
    v2.y = v1.y * scalar;
    v2.z = v1.z * scalar;
  }
  
  static length(v1){
    var d = (v1.x*v1.x)+(v1.y*v1.y)+(v1.z*v1.z);
    return Math.sqrt(d);
  }

  static dot(v1,v2){
    return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);
  }

  static cross(v1,v2,v3){
      v3.x = v1.y * v2.z - v2.y * v1.z;
      v3.y = v1.z * v2.x - v2.z * v1.x;
      v3.z = v1.x * v2.y - v2.x * v1.y;
  }

  static normalize(v1){
    var d = Vector3.length(v1);
    v1.x = v1.x/d;
    v1.y = v1.y/d;
    v1.z = v1.z/d;
  }
  
  static fromXYZ(dx,dy,dz){
    var v = new Vector3();
    v.setCoordinates(dx,dy,dz);
    return v;
  }
}