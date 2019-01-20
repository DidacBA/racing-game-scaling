"use strict";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var context2 = document.getElementById("canvas2").getContext("2d");

var width = 1280;
var height = 720;

//Finds the center of the canvas
var centerX = width / 2;
var centerY = height / 2;
var razon = 1.26;
var zDepth = centerY;
var colorChange = false;
var green1 = '#006400';
var green2 = '#009900';

function _clearCanvas() {
  context.fillStyle = '#009900';
  context.fillRect(0, 0, width, height);
}


function render1() {

  for (var y = height ; y > 1 ; y /= razon) {
    if (razon > 1.2) {
      razon -= 0.0022;
    } else {
      razon = 1.26;
    }
    _clearCanvas;
    var posY = centerY + y;
  
    context.lineWidth = 2;
    context.strokeStyle = green1;
  
    if (colorChange == true) {
      context.fillStyle = green2;
      colorChange = !colorChange;
    } else if (colorChange == false) {
      context.fillStyle = green1;
      colorChange = !colorChange;
    }
    
    context.fillRect(0, posY, width, y);
    
  
  
   // context.fillStyle = 'blue';
    //context.fillRect(width - width, height - height, width, centerY + 10);
  
    if (y > 2) {
      context2.drawImage(canvas, 0, 0);
    }
    //IF Y < 2 CALL FUNCTION SENDING IMAGE TO RENDER (CANVAS2?)
  }

}

function _updateReason() {

  if (razon > 1.2) {
    razon -= 0.00004;
  } else {
    razon = 1.26;
  }

}

function gameLoop() {

  console.log('hi');
  _updateReason();
  render1();

  window.requestAnimationFrame(gameLoop);

}

window.requestAnimationFrame(gameLoop);