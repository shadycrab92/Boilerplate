import React, { Component } from "react";
import "./canvas.sass";

import TileManager from "src/utils/TileManager";

export default class Canvas extends Component {
  constructor() {
    super();
    this.layers = {
      background: {canvas: null, context: null, bufferCanvas: null, bufferContext: null, lastUpdateState: null},
      objects: {canvas: null, context: null, bufferCanvas: null, bufferContext: null, lastUpdateState: null},
      interface: {canvas: null, context: null, bufferCanvas: null, bufferContext: null, lastUpdateState: null}
    };

    this.field = {width: 2500, height: 2500, bgTileSize: 100};
    this.canvas = {width: 600, height: 600};
    this.viewport = {
      x: 0,
      y: 0,
      inversedX: 0,
      inversedY: 0,
      startX: 0,
      startY: 0,
      startMouseX: null,
      startMouseY: null,
      zoom: 1
    };

    this.startMovingViewport = ::this.startMovingViewport;
    this.movingViewport = ::this.movingViewport;
    this.endMovingViewport = ::this.endMovingViewport;
    this.draw = ::this.draw;

    this.getDrawArea = ::this.getDrawArea;
    this.coordinateInArea = ::this.coordinateInArea;
    this.addEvent = ::this.addEvent;
    this.removeEvent = ::this.removeEvent;

    this.tileManager = new TileManager();
  }

  componentDidMount(){
    this.initLayers();
    this.draw();

    this.addEvent("mousedown", this.startMovingViewport);
  }

  initLayers(){
    for (const key of Object.keys(this.layers)) {
      let obj = this.layers[key];

      obj.canvas = document.getElementById(key);
      obj.canvas.width = this.canvas.width;
      obj.canvas.height = this.canvas.height;
      obj.context = obj.canvas.getContext("2d");

      obj.bufferCanvas = document.getElementById(`${key}_buffer`);
      obj.bufferCanvas.width = this.canvas.width;
      obj.bufferCanvas.height = this.canvas.height;
      obj.bufferContext = obj.bufferCanvas.getContext("2d");
    }
  }

  addEvent(name, callback){
    this.layers.interface.canvas.addEventListener(name, callback);
  }

  removeEvent(name, callback){
    this.layers.interface.canvas.removeEventListener(name, callback);
  }

  startMovingViewport(e){
    this.viewport.startX = this.viewport.inversedX;
    this.viewport.startY = this.viewport.inversedY;
    this.viewport.startMouseX = e.offsetX;
    this.viewport.startMouseY = e.offsetY;

    this.addEvent("mouseup", this.endMovingViewport);
    this.addEvent("mouseout", this.endMovingViewport);
    this.addEvent("mousemove", this.movingViewport);
  }

  movingViewport(e){
    const difX = this.viewport.startMouseX - e.offsetX;
    const difY = this.viewport.startMouseY - e.offsetY;
    const maxX = this.field.width - this.canvas.width;
    const maxY = this.field.height - this.canvas.height;

    let newX = -(this.viewport.startX - difX);
    let newY = -(this.viewport.startY - difY);

    newX = newX < 0 ? 0 : newX > maxX ? maxX : newX;
    newY = newY < 0 ? 0 : newY > maxY ? maxY : newY;

    this.viewport.x = newX;
    this.viewport.inversedX = -newX;

    this.viewport.y = newY;
    this.viewport.inversedY = -newY;
  }


  endMovingViewport(e){
    this.removeEvent("mouseup", this.endMovingViewport);
    this.removeEvent("mouseout", this.endMovingViewport);
    this.removeEvent("mousemove", this.movingViewport);
  }

  getDrawArea(){
    const offsetX = this.canvas.width/3;
    const offsetY = this.canvas.height/3;

    const startX = this.viewport.x - offsetX;
    const startY = this.viewport.y - offsetY;
    const endX = this.viewport.x + this.canvas.width + offsetX;
    const endY = this.viewport.y + this.canvas.height + offsetY;

    return {
      startX: startX,
      startY: startY,
      endX: endX,
      endY: endY
    }
  }

  coordinateInArea(x, y, area){
    return x > area.startX && x < area.endX && y > area.startY && y < area.endY;
  }

  draw(){
    if(this.tileManager.isReady){
      this.drawBackground();
    }

    requestAnimationFrame(this.draw);
  }

  drawBackground(){
    const backgroundLayer = this.layers.background;
    const currentUpdateState = JSON.stringify({
      viewportX: this.viewport.inversedX,
      viewportY: this.viewport.inversedY,
      viewportZoom: this.viewport.zoom
    });

    if(backgroundLayer.lastUpdateState != currentUpdateState){
      const drawArea = this.getDrawArea();
      const context = backgroundLayer.context;
      const bufferContext = backgroundLayer.bufferContext;
      const tileSize = this.field.bgTileSize;

      bufferContext.setTransform(1, 0, 0, 1, 0, 0);
      bufferContext.translate(this.viewport.inversedX, this.viewport.inversedY);

      for(let i= 0; i < this.field.width; i+= tileSize){
        for(let j= 0; j < this.field.height; j+= tileSize){
          if(this.coordinateInArea(i, j, drawArea)){
            this.tileManager.renderTile("sand", bufferContext, i, j, tileSize, tileSize)
          }
        }
      }

      backgroundLayer.lastUpdateState = currentUpdateState;
      context.clearRect(0, 0, this.field.width, this.field.width);
      context.drawImage(backgroundLayer.bufferCanvas, 0, 0);
      bufferContext.clearRect(0, 0, this.field.width, this.field.width);
    }
  }

  render() {
    return (
      <div className="canvas">
        {
          Object.keys(this.layers).map(key =>
            <div key={key} className={`canvas--${key}`}>
              <canvas id={key} className="canvas__visible"/>
              <canvas id={`${key}_buffer`} className="canvas__buffer"/>
            </div>
          )
        }
      </div>
    );
  }
}

