import React, { Component } from "react";

import sand from "src/static/sand1.png";

export default class Canvas extends Component {
  constructor(){
    super();
    this.canvas = null;
    this.context = null;
    this.global = null;
    this.panning = null;
    this.field = {};
    this.backgroundImg = null;

    this.mouseMove = ::this.mouseMove;
    this.draw = ::this.draw;
    this.pan = ::this.pan;
    this.startPan= ::this.startPan;
    this.endPan = ::this.endPan;
    this.trackMouse = ::this.trackMouse;
  }

  componentDidMount(){
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");

    this.field.width = this.props.fieldWidth;
    this.field.height = this.props.fieldHeight;
    this.canvas.width = 600;
    this.canvas.height = 600;


    if(this.props.fieldBackgroundType == "Sand"){
      this.toDataURL(
        sand,
        (dataUrl) => {
          this.backgroundImg = dataUrl;
        }
      )
    }

    this.global = {
      scale: 1,
      offset: {
        x : 0,
        y : 0,
      }
    };

    this.panning = {
      start: {
        x: null,
        y: null,
      },
      offset: {
        x: 0,
        y: 0,
      }
    };

    this.canvas.addEventListener("mousemove", this.mouseMove);
    this.canvas.addEventListener("mousedown", this.startPan);
    this.draw();
  }

  toDataURL(src, callback, outputFormat) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      let canvas = document.createElement('CANVAS');
      let ctx = canvas.getContext('2d');
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

  mouseMove(e){
    this.pan();
    const offsetX = -this.global.offset.x + e.offsetX;
    const offsetY = -this.global.offset.y + e.offsetY;

    this.draw(offsetX, offsetY);
  }

  draw(mouseX, mouseY) {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.translate(this.panning.offset.x, this.panning.offset.y);

    let newCanvas = document.createElement("canvas");
    newCanvas.width = this.canvas.width;
    newCanvas.height = this.canvas.height;

    let newContext = newCanvas.getContext("2d");
    newContext.setTransform(1, 0, 0, 1, 0, 0);
    newContext.translate(this.panning.offset.x, this.panning.offset.y);



    let background = new Image();
    background.onload = () => {

      for(let i=0; i < this.field.width; i+=200){
        for(let j=0; j < this.field.height; j+=200){
          newContext.drawImage(background, i, j);
        }
      }

      const newFrame = this.props.draw(newContext, this.field, mouseX, mouseY);

      let image = new Image();
      image.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(image, 0, 0);
      };
      image.src = newFrame;
    };
    background.src = this.backgroundImg;

  }

  pan() {
    this.draw();
  }

  startPan(e) {
    this.canvas.removeEventListener("mousemove", this.mouseMove);
    this.canvas.addEventListener("mousemove", this.trackMouse);
    this.canvas.addEventListener("mousemove", this.pan);
    this.canvas.addEventListener("mouseup", this.endPan);
    this.panning.start.x = e.clientX;
    this.panning.start.y = e.clientY;
  }

  endPan(e) {
    this.canvas.addEventListener("mousemove", this.mouseMove);
    this.canvas.removeEventListener("mousemove", this.trackMouse);
    this.canvas.removeEventListener("mousemove", this.pan);
    this.canvas.removeEventListener("mouseup", this.endPan);
    this.panning.start.x = null;
    this.panning.start.y = null;

    this.global.offset.x = this.panning.offset.x;
    this.global.offset.y = this.panning.offset.y;
  }

  trackMouse(e) {
    const offsetX = e.clientX - this.panning.start.x;
    const offsetY = e.clientY - this.panning.start.y;

    this.panning.offset.x = this.global.offset.x + offsetX;
    this.panning.offset.y = this.global.offset.y + offsetY;

    if(this.panning.offset.x > 0){
      this.panning.offset.x = 0;
    }
    if(this.field.width + this.panning.offset.x < this.canvas.width - 1){
      this.panning.offset.x = this.canvas.width - this.field.width - 1;
    }

    if(this.panning.offset.y > 0){
      this.panning.offset.y = 0;
    }
    if(this.field.height + this.panning.offset.y < this.canvas.height - 1){
      this.panning.offset.y = this.canvas.height - this.field.height - 1;
    }
  }

  render() {
    return (
      <canvas id="canvas" className="field__canvas"/>
    );
  }
}

