"use strict";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var width = 640;
var height = 480;

//Finds the center of the canvas
var centerWidth = width / 2;
var centerHeight = height / 2;
var razon = 1.25;
var zDepth = centerHeight;
var colorChange = false;
var green1 = '#006400';
var green2 = '#009900';

function _clearCanvas() {
  context.clearRect(0, 0, width, height);
}

function _updateReason() {
  if (razon > 1.2) {
    razon -= 0.01;
  } else {
    razon = 1.25;
  }
}


function loop() {




}
function gameLoop() {

  _updateReason();
  _clearCanvas();
  for (var y = height ; y > 1 ; y /= razon) {
    //_clearCanvas();
    var posY = centerHeight + y;
    //debugger;
    context.beginPath();
    context.moveTo(0, posY);
    context.lineTo(width, posY);
    context.stroke();
    //context.fillRect(0, posY, width, posY);
    
  }
  
  window.requestAnimationFrame(gameLoop);

}

window.requestAnimationFrame(gameLoop);


//  _updateReason();
//  _clearCanvas();
//  for (var y = height ; y > 1 ; y /= razon) {
//    //_clearCanvas();
//    var posY = centerHeight + y;
//    //debugger;
//    context.beginPath();
//    context.moveTo(0, posY);
//    context.lineTo(width, posY);
//    context.stroke();
//    //context.fillRect(0, posY, width, posY);
//    
//  }
//  debugger;
//}
//
//
//
//function gameLoop() {
  

  
//  }
//  window.requestAnimationFrame(gameLoop);
//
//}
//
//
//window.requestAnimationFrame(gameLoop);