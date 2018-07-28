
  var
  canvas,
  ctx,
  width,
  height,
  frames = 0,
  score = 0,
  best = 0,

  currentstate,
  states = {
    Splash: 0, Games: 1, Score: 2
  }

  bird = {},
  pipes = {};

  function main(){
    canvas = document.createElement('canvas');

    width = window.innerWidth;
    height = window.innerHeight;

    if(width >= 500){
      width = 320;
      height = 480;
    }
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);
  }

  function run(){

  }

  function update(){}
  function render(){}

  main();
