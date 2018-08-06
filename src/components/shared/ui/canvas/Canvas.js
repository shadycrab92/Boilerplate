import React, { Component } from "react";
import "./canvas.sass";


import sand from "src/static/sand.png";

export default class Canvas extends Component {
  constructor(){
    super();
    this.canvas = null;
    this.context = null;

    this.bufferingCanvas = null;
    this.bufferingContext = null;

    this.viewport = {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
      startMouseX: null,
      startMouseY: null
    };

    this.backgroundImg = null;

    this.startMovingViewport = ::this.startMovingViewport;
    this.movingViewport = ::this.movingViewport;
    this.endMovingViewport = ::this.endMovingViewport;

    this.draw = ::this.draw;

    setInterval(()=>{
      this.draw();
    }, 20);
  }

  componentDidMount(){
    this.canvas = document.getElementById("canvasMain");
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");

    this.bufferCanvas = document.getElementById("canvasBuffer");
    this.bufferCanvas.width = 600;
    this.bufferCanvas.height = 600;
    this.bufferContext = this.bufferCanvas.getContext("2d");

    this.loadBackground();

    this.canvas.addEventListener("mousedown", this.startMovingViewport);
  }

  loadBackground(){
    let background = new Image();
    background.onload = () => {
      this.backgroundImg = background;
    };
    background.src = sand;
  }

  startMovingViewport(e){
    this.viewport.startX = this.viewport.x;
    this.viewport.startY = this.viewport.y;
    this.viewport.startMouseX = e.offsetX;
    this.viewport.startMouseY = e.offsetY;

    this.canvas.addEventListener("mouseup", this.endMovingViewport);
    this.canvas.addEventListener("mousemove", this.movingViewport);
  }

  movingViewport(e){
    const difX = this.viewport.startMouseX - e.offsetX;
    const difY = this.viewport.startMouseY - e.offsetY;
    this.viewport.x = this.viewport.startX - difX;
    this.viewport.y = this.viewport.startY - difY;
  }

  endMovingViewport(e){
    this.canvas.removeEventListener("mouseup", this.endMovingViewport);
    this.canvas.removeEventListener("mousemove", this.movingViewport);
  }

  toDataURL(src, callback, outputFormat) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }
  }

  drawBackground(){
    if(this.backgroundImg){
      for(let i=0; i < 2500; i+=300){
        for(let j=0; j < 2500; j+=300){
          this.bufferContext.drawImage(this.backgroundImg, i, j);
        }
      }
    }
  }

  draw(){
    this.bufferContext.clearRect(0, 0, 2500, 2500);
    this.bufferContext.setTransform(1, 0, 0, 1, 0, 0);
    this.bufferContext.translate(this.viewport.x, this.viewport.y);

    this.drawBackground();
    const sourceImageData = this.bufferCanvas.toDataURL("image/png");
    const image = new Image();
    image.onload = () => {
      this.context.clearRect(0, 0, 2500, 2500);
      this.context.drawImage(image, 0, 0);
    };
    image.src = sourceImageData;
  }

  render() {
    return (
      <div className="canvas">
        <canvas id="canvasMain" className="canvas__main"/>
        <canvas id="canvasBuffer" className="canvas__buffer"/>
      </div>
    );
  }
}

