var clock;
var hr , mn , sc ;
var hrANGLE , mnANGLE , scANGLE;

function setup()
{

  createCanvas( 200 , 200 );

  hr = hour();
  mn = minute();
  sc = second();

  scANGLE = map( sc , 0 , 60 , 0 , 360 );
  mnANGLE = map( mn , 0 , 60 , 0 , 360 );
  hrANGLE = map( hr , 0 , 60 , 0 , 360 );

}

function draw()
{

  angleMode(DEGREES);
  background( "black" );
  drawSprites();

  //clock
  clock = circle( 0 , 0 , 200 );

  //sc
  push();
  rotate( sc );
  stroke( "red" );
  strokeWeight( 2 );
  translate( 0 , 0 );
  line( 0 , 0 , 100 , 0 );
  pop();
  //mn
  push();
  rotate( mn );
  stroke( "blue" );
  strokeWeight( 2 );
  translate( 0 , 0 );
  line( 0 , 0 , 100 , 0 );
  pop();
  //hr
  push();
  rotate( hr );
  stroke( "green" );
  strokeWeight( 2 );
  translate( 0 , 0 );
  line( 0 , 0 , 100 , 0 );
  pop();

}