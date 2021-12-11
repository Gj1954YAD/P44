var robot


function setup() {
  canvas = createCanvas(850, 400);
  robotImg = loadImage("Robot.png")
}

function draw() {
  background("pink");
  robot = createSprite(250, 200)
  robot.addImage(robotImg)
  robot.scale = 0.2
  move()
  drawSprites()
}

function move() {
  if (keyDown("w")) {
    robot.y += 5
  }
  if (keyDown("s")) {
    robot.y -= 5
  }
  if (keyDown("a")) {
    robot.x += 5
  }
  if (keyDown("d")) {
    robot.x -= robot.x - 5
  }

}