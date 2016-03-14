
var s,s2,x,x2,y,y2,w,z,n,z2,n2;

function setup() {

  // createCanvas(windowWidth, windowHeight);
  createCanvas(600,400);
  colorMode(HSL, 360, 100, 100, 100);
 background(255); // Setzen den Hintergrund auf Weiß (0);

 s =0.0;
s2 =0.0;
 x =0.0;
 y =0.0;
 x2 =0.0;
 y2 =0.0;
 w = 5;
 w2 =0.0;
 z = 0;
 z2 = 0;
 n = 5;
 n2 = 20;

translate (-(width/2),0);

}

function draw() {
 x += Math.cos(Math.PI/2 * (s*s));
 y -= Math.sin(Math.PI/2 * (s*s));
  s += 0.1;

w = w + 0.01;
w = noise(w)*10;
w2 = noise(w);

n = n + 0.01;
z = noise(n)*10;

n2 = n2 + 0.01;
z2 = noise(n2)*10;

 // z = math.round(z);

fill (0,0,0,1);
 ellipse((x*z)+width/2,(y*z)+height/2,w2,w2);


 x2 += Math.cos(Math.PI/2 * (s2*s2));
 y2 -= Math.sin(Math.PI/2 * (s2*s2));
  s2 += 0.1;

fill('#FFF');
 ellipse((x2*z2)+width/2,(y2*z2)+height/2,w2,w2);

}
