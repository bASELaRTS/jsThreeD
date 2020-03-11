class Matrix4 {
  constructor(){
  }
  
  setData(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16){
    this.data[ 0]=m1; this.data[ 1]=m2; this.data[ 2]=m3; this.data[ 3]=m4;
    this.data[ 4]=m5; this.data[ 5]=m6; this.data[ 6]=m7; this.data[ 7]=m8;
    this.data[ 8]=m9; this.data[ 9]=m10;this.data[10]=m11;this.data[11]=m12;
    this.data[12]=m13;this.data[13]=m14;this.data[14]=m15;this.data[15]=m16;
  }
  
  static create(){
    var i =0;
    var m = [];
    for(i=0;i<16;i++){
      m.push(0);
    }
    return m;
  }
  
  static set(m,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16){
    m[ 0]=m1;m[ 1]=m2;m[ 2]=m3;m[ 3]=m4;
    m[ 4]=m1;m[ 5]=m2;m[ 6]=m3;m[ 7]=m4;
    m[ 8]=m1;m[ 9]=m2;m[10]=m3;m[11]=m4;
    m[12]=m1;m[13]=m2;m[14]=m3;m[15]=m4;
  }
  
  static clear(m){
    var i = 0;
    for(i=0;i<m.length;i++){
      m[i] = 0;
    }
  }
  
  static identity(m){
    Matrix4.clear(m);
    m[ 0] = 1;
    m[ 5] = 1;
    m[10] = 1;
    m[15] = 1;
  }
  
  static multiply(m1,m2,m3){
    var i = 0;
    var j = 0;
    for (j = 0; j < 4; j++) {
        for (i = 0; i < 4; i++) {
            m3[j*4+i] = 
               m1[j*4+0]*m2[0*4+i]
              +m1[j*4+1]*m2[1*4+i]
              +m1[j*4+2]*m2[2*4+i]
              +m1[j*4+3]*m2[3*4+i]
            ;
        }
    }
  }
  
  static multiplyVector4(m,v1,v2){
    v2.x = (m[0 * 4 + 0] * v1.x) + (m[1 * 4 + 0] * v1.y) + (m[2 * 4 + 0] * v1.z) + (m[3 * 4 + 0] * v1.w);
    v2.y = (m[0 * 4 + 1] * v1.x) + (m[1 * 4 + 1] * v1.y) + (m[2 * 4 + 1] * v1.z) + (m[3 * 4 + 1] * v1.w);
    v2.z = (m[0 * 4 + 2] * v1.x) + (m[1 * 4 + 2] * v1.y) + (m[2 * 4 + 2] * v1.z) + (m[3 * 4 + 2] * v1.w);
    v2.w = (m[0 * 4 + 3] * v1.x) + (m[1 * 4 + 3] * v1.y) + (m[2 * 4 + 3] * v1.z) + (m[3 * 4 + 3] * v1.w);
  }
  
  static copy(m1,m2){
    var i = 0;
    for(i=0;i<m1.length;i++){
      m2[i] = m1[i];
    }
  }
  
  static translate(v,m){
    Matrix4.set(m,
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      v.x, v.y, v.z, 1.0
    );
  }

  static scale(s,m){
    Matrix4.set(m,
      s.x, 0.0, 0.0, 0.0,
      0.0, s.y, 0.0, 0.0,
      0.0, 0.0, s.z, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  
  static rotationX(angle,m){
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    Matrix4.set(m,
      1.0, 0.0, 0.0, 0.0,
      0.0,   c,   s, 0.0,
      0.0,  -s,   c, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  static rotationY(angle,m){
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    Matrix4.set(m,
        c, 0.0,  -s, 0.0,
      0.0, 1.0, 0.0, 0.0,
        s, 0.0,   c, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  static rotationZ(angle,m){
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    Matrix4.set(m,
        c,   s, 0.0, 0.0,
       -s,   c, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
}
