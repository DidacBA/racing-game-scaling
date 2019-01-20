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

//context.beginPath();
//context.moveTo(width/6,0);
//context.lineTo(width/4,centerY)
//context.stroke();


// Alternating colors. Rendering line by line

//for (var y = height ; y > 0 ; y--) {
//  if (y == parseInt(zDepth)) {
//    if (colorChange == false) {
//      context.strokeStyle = green2;
//    } else {
//      context.strokeStyle = green1;
//    };
//    zDepth /= razon;
//    colorChange = !colorChange; 
//  }
//  var posY = centerY + y;
//
//  context.beginPath();
//  context.moveTo(0, posY);
//  context.lineTo(width, posY);
//  context.stroke();
//}
//
function _updateReason() {

  if (razon > 1.2) {
    razon -= 0.00004;
  } else {
    razon = 1.26;
  }

}

function _drawPerspective() {
  var y = height;
  do {
    y /= razon;
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
    
    debugger;


    context.fillStyle = 'blue';
    context.fillRect(width - width, height - height, width, centerY + 10);
    //IF Y < 2 CALL FUNCTION SENDING IMAGE TO RENDER (CANVAS2?)
  } while (y > 1);

}

var frames = 60;
var timerId = 0;

timerId = setInterval(gameLoop, 1000/frames);

var gameLoopTimeout = null;

function gameLoop() {

  //clearTimeout(gameLoopTimeout);
  //window.requestAnimationFrame(gameLoop);

  _clearCanvas();
  _updateReason();
  //_drawPerspective();










  //for (var y = height ; y > 1 ; y /= razon) {
//
    ////y /= razon
    //var posY = centerY + y;
    ////context.strokeStyle = 'white';
    ////context.lineWidth = 5;
////
    ////context.beginPath();
    ////context.moveTo(width - width, height - 40);  
    ////context.lineTo(width/2 - 40, centerY + 2)
    ////context.stroke();
////
    ////context.beginPath();
    ////context.moveTo(width, height - 40);
    ////context.lineTo(width - width/2 + 40, centerY + 2);
    ////context.stroke();
//
    //context.lineWidth = 2;
    //context.strokeStyle = green1;
//
    //if (colorChange == true) {
    //  context.fillStyle = green2;
    //  colorChange = !colorChange;
    //} else if (colorChange == false) {
    //  context.fillStyle = green1;
    //  colorChange = !colorChange;
    //}
//
    //context.fillRect(0, posY, width, y);
    //debugger;
//
    ////context.beginPath();
    ////context.moveTo(0, posY);
    ////context.lineTo(width, posY);
    ////context.stroke();
//
    //context.fillStyle = 'blue';
    //context.fillRect(width - width, height - height, width, centerY + 10);
    ////context.globalAlpha = 0.1;
//
//
    ////I need to save previous posY to know the height of the rectangle
//
    ////if (colorChange == false) {
    ////  context.fillStyle = green2;
    ////  context.fillRect(0, posY, width, 2);
    ////  colorChange = true;
    ////} else if (colorChange == true) {
    ////  context.fillStyle = green1;
    ////  context.fillRect(0, posY, width, 2);
    ////  colorChange = false;
    ////}
    //
  //}//
//
  gameLoopTimeout = setTimeout(gameLoop, 1000 / frames);

}

//window.requestAnimationFrame(gameLoop);

//
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