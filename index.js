
  var
  canvas,
  ctx,
  width,
  height,
  fgpos = 0,
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

    var img = new Image();
    img.onload = function(){
      initSprites(this);
      run();
    }
    img.src = "res/sheet.png";
  }

  function run(){
    var loop = function(){
      update();
      render();
      window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
  }

  function update(){}
  function render(){
    s_bg.draw(ctx, 0, height - s_bg.height);
    s_bg.draw(ctx, s_bg.width, height - s_bg.height);
    s_fg.draw(ctx, fgpos, height -s_fg.height);
    s_fg.draw(ctx, fgpos+s_fg.width, height -s_fg.height);
  }

  main();
