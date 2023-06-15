//important matterJS variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;

var board, die;
var bluePiece, blueSpaces, blueMoved;
var greenPiece, greenSpaces;
var greenMoved;

var buttonClicked = false;

var chanceCount = 0;

var gp, bp;
var winner;

function preload() {
  board = loadImage("3.jpg");
}

function drawDie(x, y, side) {
  fill("white");
  strokeWeight(8);
  rectMode(CENTER);
  rect(x, y, 100, 100, 20);

  fill("black");
  strokeWeight(3);
  if (side === 1) {
    circle(x, y, 20);
  } else if (side === 2) {
    circle(x - 25, y - 25, 20);
    circle(x + 25, y + 25, 20);
  } else if (side === 3) {
    circle(x - 25, y - 25, 20);
    circle(x, y, 20);
    circle(x + 25, y + 25, 20);
  } else if (side === 4) {
    circle(x - 25, y - 25, 20);
    circle(x + 25, y + 25, 20);
    circle(x - 25, y + 25, 20);
    circle(x + 25, y - 25, 20);
  } else if (side === 5) {
    circle(x - 25, y - 25, 20);
    circle(x + 25, y + 25, 20);
    circle(x, y, 20);
    circle(x - 25, y + 25, 20);
    circle(x + 25, y - 25, 20);
  } else if (side === 6) {
    circle(x - 25, y - 25, 20);
    circle(x + 25, y + 25, 20);
    circle(x - 25, y + 25, 20);
    circle(x + 25, y - 25, 20);
    circle(x - 25, y, 20);
    circle(x + 25, y, 20);
  }
}

function checkForBlueUpsAndDowns() {
  //ladders
  if (blueSpaces === 4) {
    Matter.Body.setVelocity(bluePiece.body, { x: 7, y: -12 });
    blueSpaces = 25;
  }
  if (blueSpaces === 13) {
    Matter.Body.setVelocity(bluePiece.body, { x: -13, y: -19.5 });
    blueSpaces = 46;
  }
  if (blueSpaces === 33) {
    Matter.Body.setVelocity(bluePiece.body, { x: 6, y: -7 });
    blueSpaces = 49;
  }
  if (blueSpaces === 42) {
    Matter.Body.setVelocity(bluePiece.body, { x: 6, y: -12 });
    blueSpaces = 63;
  }
  if (blueSpaces === 50) {
    Matter.Body.setVelocity(bluePiece.body, { x: -6, y: -13 });
    blueSpaces = 69;
  }
  if (blueSpaces === 62) {
    Matter.Body.setVelocity(bluePiece.body, { x: -7, y: -12 });
    blueSpaces = 81;
  }
  if (blueSpaces === 74) {
    Matter.Body.setVelocity(bluePiece.body, { x: 12, y: -12 });
    blueSpaces = 92;
  }

   //SNAKES
   if (blueSpaces === 27) {
    Matter.Body.setVelocity(bluePiece.body, { x: -13, y: 14 });
    blueSpaces = 5;
   }
  if (blueSpaces === 40) {
    Matter.Body.setVelocity(bluePiece.body, { x: 12, y: 19 });
    blueSpaces = 3;
  }
  if (blueSpaces === 43) {
    Matter.Body.setVelocity(bluePiece.body, { x: -1, y: 19});
    blueSpaces = 18;
  }
  if (blueSpaces === 54) {
    Matter.Body.setVelocity(bluePiece.body, { x: 20, y: 14 });
    blueSpaces = 31;
  }
  if (blueSpaces === 66) {
    Matter.Body.setVelocity(bluePiece.body, { x: -7, y: 12 });
    blueSpaces = 45;
  }
  if (blueSpaces === 76) {
    Matter.Body.setVelocity(bluePiece.body, { x: -14, y: 14 });
    blueSpaces = 58;
  }
  if (blueSpaces === 89) {
    Matter.Body.setVelocity(bluePiece.body, { x: -7, y: 19 });
    blueSpaces = 53;
  }
  if (blueSpaces === 99) {
    Matter.Body.setVelocity(bluePiece.body, { x: -7, y: 34 });
    greenSpaces = 41;
  }
}


function checkForGreenUpsAndDowns() {
  //ladders
  if (greenSpaces === 4) {
    Matter.Body.setVelocity(greenPiece.body, { x: 7, y: -12 });
    greenSpaces = 25;
  }
  if (greenSpaces === 13) {
    Matter.Body.setVelocity(greenPiece.body, { x: -13, y: -19.5 });
    greenSpaces = 46;
  }
  if (greenSpaces === 33) {
    Matter.Body.setVelocity(greenPiece.body, { x: 6, y: -7 });
    greenSpaces = 49;
  }
  if (greenSpaces === 42) {
    Matter.Body.setVelocity(greenPiece.body, { x: 6, y: -12 });
    greenSpaces = 63;
  }
  if (greenSpaces === 50) {
    Matter.Body.setVelocity(greenPiece.body, { x: -6, y: -13 });
    greenSpaces = 69;
  }
  if (greenSpaces === 62) {
    Matter.Body.setVelocity(greenPiece.body, { x: -7, y: -12 });
    greenSpaces = 81;
  }
  if (greenSpaces === 74) {
    Matter.Body.setVelocity(greenPiece.body, { x: 12, y: -12 });
    greenSpaces = 92;
  }

   //SNAKES
   if (greenSpaces === 27) {
    Matter.Body.setVelocity(greenPiece.body, { x: -13, y: 14 });
    greenSpaces = 5;
   }
  if (greenSpaces === 40) {
    Matter.Body.setVelocity(greenPiece.body, { x: 12, y: 19 });
    greenSpaces = 3;
  }
  if (greenSpaces === 43) {
    Matter.Body.setVelocity(greenPiece.body, { x: -1, y: 19});
    greenSpaces = 18;
  }
  if (greenSpaces === 54) {
    Matter.Body.setVelocity(greenPiece.body, { x: 20, y: 14 });
    greenSpaces = 31;
  }
  if (greenSpaces === 66) {
    Matter.Body.setVelocity(greenPiece.body, { x: -7, y: 12 });
    greenSpaces = 45;
  }
  if (greenSpaces === 76) {
    Matter.Body.setVelocity(greenPiece.body, { x: -14, y: 14 });
    greenSpaces = 58;
  }
  if (greenSpaces === 89) {
    Matter.Body.setVelocity(greenPiece.body, { x: -7, y: 19 });
    greenSpaces = 53;
  }
  if (greenSpaces === 99) {
    Matter.Body.setVelocity(greenPiece.body, { x: -7, y: 34 });
    greenSpaces = 41;
  }
}



function setup() {
  //create canvas
  createCanvas(950, 725);
  background("blue");

  p1 = createInput();
  p2 = createInput();
  p1.position(50, 320);
  p2.position(300, 320);

  label1 = createElement("h5").html("Name of Player1-").position(50, 270);
  label2 = createElement("h5").html("Name of Player2-").position(300, 270);
  heading = createElement("h1").html("Enter the name of the players").position(80, 200);
  
  button = createButton("PLAY");
  button.position(235, 420);
  button.mouseClicked(() => {
    buttonClicked = true;
    p1.hide();
    p2.hide();
    label1.hide();
    label2.hide();
    heading.hide();
    button.hide();
  });

  label1.class("label");
  label2.class("label");

  heading.class("heading");

  button.class("button");

  p1.class("input");
  p2.class("input");
  
  //setup
  engine = Engine.create();
  world = engine.world;

  //set gravity
  engine.world.gravity.y = 0;

  //create the die array
  die = [false, 1, 0, false, 0];

  //create the pieces
  bluePiece = new BluePiece(30, 550, 50, 50);
  blueSpaces = 1;
  blueMoved = false;

  greenPiece = new GreenPiece(30, 560, 50, 50);
  greenSpaces = 1;
  greenMoved = false;

  bluePiece.body.collisionFilter.category = greenPiece.body;
  //opposite of category is mask
  //to detect group of physics bodies we can use group
}

function draw(){
  background("lightgrey");

  Engine.update(engine);

  gp = p1.value();
  bp = p2.value();

  if(buttonClicked == true){
    if(gp === ""){
      swal({
        title: "Enter the name of Player 1",
        confirmButtonText: "OK"
      }, function(m){
        if((m)){
          window.location.reload();
        }
      })
    }
    else if(bp === ""){
      swal({
        title: "Enter the name of Player 2",
        confirmButtonText: "OK"
      }, function(m){
        if((m)){
          window.location.reload();
        }
      })
    }
    else{
      play();
    }
  }
}

function play() {
  //draw the background
  background("lightgrey");

  //draw the board
  image(board, 0, 0, 600, 600);

  //display the pieces
  bluePiece.display();
  greenPiece.display();

  push();
  noStroke();
  text(mouseX + ", " + mouseY, mouseX, mouseY);

  textSize(20);
  stroke("green");
  strokeWeight(1);
  fill("green");
  text("Green Player: " + gp, 640, 140);
  text("Score: " + greenSpaces, 640, 180);

  stroke("blue");
  fill("blue");
  text("Blue Player: " + bp, 640, 240);
  text("Score: " + blueSpaces, 640, 280);
  pop();

  //add a divider
  stroke("black");
  strokeWeight(8);
  line(0, 602.5, 600, 602.5);

  //draw die or make it blink or move it
  if (die[3] === false) {
    drawDie(525, 665, die[1]);
  } else {
    if (die[4] % 2 === 0) {
      drawDie(525, 665, die[1]);

      if(chanceCount % 2 == 0){
        if (blueMoved === false && blueSpaces !== 100) {
          if (blueSpaces % 10 === 0) {
          bluePiece.moveUp();
        }  else {
          var num = Math.floor(blueSpaces / 10);
          if (num === 0 || num === 2 || num === 4 || num === 6 || num === 8 || num === 10) {
          bluePiece.moveRight();
          } else {
             bluePiece.moveLeft();
          }
              }
              blueMoved = true;
              blueSpaces++;
              console.log(blueSpaces);
            }
      }
      if(chanceCount % 2 == 1){
        if (greenMoved === false && greenSpaces !== 100) {
          if (greenSpaces % 10 === 0) {
          greenPiece.moveUp();
        }  else {
          var num = Math.floor(greenSpaces / 10);
          if (num === 0 || num === 2 || num === 4 || num === 6 || num === 8 || num === 10) {
          greenPiece.moveRight();
          } else {
             greenPiece.moveLeft();
          }
              }
              greenMoved = true;
              greenSpaces++;
              console.log(greenSpaces);
            }
      }

    }

    if(chanceCount % 2 == 0){
      if (frameCount % 15 === 0) {
        die[4]--;
        blueMoved = false;
  
        if (die[4] === 0) {
          die[3] = false;
          die[0] = false;
          checkForBlueUpsAndDowns();
        }
      }
    }
    if(chanceCount % 2 == 1){
      if (frameCount % 15 === 0) {
        die[4]--;
        greenMoved = false;
  
        if (die[4] === 0) {
          die[3] = false;
          die[0] = false;
          checkForGreenUpsAndDowns();
        }
      }
    }


    //else closing 
  }

  //make the die roll
  if (die[0] === true && die[2] > 0 && frameCount % 5 === 0) {
    die[2]--;

    die[1]++;
    if (die[1] > 6) {
      die[1] = 1;
    }

    if (die[2] === 0) {
      die[3] = true;
      die[4] = die[1] * 2;
    }
  }
  if (greenSpaces >= 100) {
    keyPressed = false;
    winner = gp;
    gameover();
  }
  if (blueSpaces >= 100) {
    keyPressed = false;
    winner = bp;
    gameover();
  }
}

function keyPressed() {
  if (keyCode === 32 && die[0] === false) {
    die[0] = true;
    die[2] = round(random(12, 18));
    chanceCount++;
  }
}

function gameover(){
  swal({
    title: `The winner is - ${"\n"}${winner}`,
    text: "Congratulations on completing this game",
    imageUrl:
      "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    imageSize: "100x100",
    confirmButtonText: "Ok"
  });
}