// Game variables 
let playerX, playerY;
let coinX, coinY;
let obstacleX, obstacleY;
let obstacleSpeed = 5;
let score = 0;
let gameOver = false;
let hits = 0;

function setup() {
  createCanvas(400, 400);
  initializeGame();
}

function initializeGame() {
  // Initialize player position (bottom center)
  playerX = width/2;
  playerY = height - 20;
  
  // Initialize coin position
  newCoin();
  
  // Initialize obstacle position
  obstacleX = random(20,width-20);
  obstacleY = 0;
}

function draw() {
  background(220);
  
  if (gameOver) {
    displayGameOver();
  } else {
    // Draw game elements
    drawPlayer();
    drawCoin();
    drawObstacle();
    
    // Handle movement
    movePlayer();
    moveObstacle();
    
    // Check for collisions
    checkCoinCollection();
    checkCollisions();
    
    // Display game stats
    displayStats();
  }
}

function drawPlayer() {
  fill(0, 0, 255);  // Blue player
  circle(playerX, playerY, 20);
}

function drawCoin() {
  fill(255, 255, 0);  // Yellow coin
  circle(coinX, coinY, 10);
}

function drawObstacle() {
  fill(255, 0, 0);  // Red obstacle
  rect(obstacleX, obstacleY, 20, 20);
}

// Basic left/right movement provided
function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }
  if (keyIsDown(UP_ARROW)){
    playerY-=5;
  }
  if (keyIsDown(DOWN_ARROW)){
    playerY+=5;
  }
  // TODO: Add up/down movement
  // HINT: Use UP_ARROW and DOWN_ARROW keys
  // Movement should be 5 pixels per frame
  
  // TODO: Add boundary checking
  // HINT: Keep player within canvas bounds
  // Check against 0, width, and height
}

function moveObstacle() {
  // TODO: Move obstacle from left to right
  // HINT: Increase obstacleX by obstacleSpeed
  obstacleY+=obstacleSpeed;
  // TODO: Reset obstacle when it goes off screen
  // HINT: Check if obstacleX > width
  if (obstacleY>=height){
    obstacleY=0;
    obstacleX = random(20, height-20);
  }
  // Reset to left side and new random Y position
  
}

function checkCoinCollection() {
  // TODO: Check if player touches coin
  // HINT: Use dist(playerX, playerY, coinX, coinY)
  if (dist(playerX,playerY,coinX,coinY)<15){
    score++
    newCoin()
    obstacleSpeed++
  }
  // If distance < 15:
  //   - Increase score
  //   - Create new coin
  //   - Increase obstacle speed slightly
}

function checkCollisions() {
  // TODO: Check if player hits obstacle
  // HINT: Similar to coin collection
  if (dist(playerX,playerY,obstacleX,obstacleY)<20){
    hits++
    initializeGame()
    if (hits>=3){
      gameOver=true
    }
  }
  // If hit (distance < 20):
  //   - Increase hits
  //   - Check for game over (hits >= 3)
  //   - Reset positions
}

function displayStats() {
  fill(0);
  textSize(16);
  text("Score: " + score, 10, 20);
  // TODO: Add display for hits and speed
  text("Hits: " + hits, 110, 20 )
  text("Speed :" + obstacleSpeed, 210, 20)
}

function displayGameOver() {
  // TODO: Show game over screen
  // HINT: Use textAlign(CENTER, CENTER)
  // Show:
  //   - "Game Over" message
  //   - Final score
  //   - "Press R to Restart"
  textAlign(CENTER,CENTER)
  text("GAME OVER", 200, 200)
  text('FINAL SCORE: ' + score,200,225)
  text('press r to restart',200,250) 
}

function newCoin() {
  // Generate random position for coin
  coinX = random(20, width-20);
  coinY = random(20, height-20);
}

function resetGame() {
  // TODO: Reset all game variables
  // HINT: Reset score, hits, speed
  // Set gameOver to false
  // Call initializeGame()
  gameOver=false
  score==0;
  hits==0;
  obstacleSpeed==5;
  initializeGame
}

function keyPressed() {
  // TODO: Check for 'R' key to restart game
  // HINT: Use key === 'r' || key === 'R'
  // Only works when game is over
  if (key==r & gameOver==true){
    resetGame()
  }
}

// Helper function you might need
function distance(x1, y1, x2, y2) {
  return dist(x1, y1, x2, y2);
}