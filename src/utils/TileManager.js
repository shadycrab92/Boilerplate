import sand from "src/static/sand.png";

export default class TileManager {
  constructor(){
    this.tiles = {
      sand: {src: sand, texture: null, image: null, fills: ["rgba(0, 0, 0, 0.2)", "rgba(194, 178, 128, 0.8)"]},
      rock: {src: sand, texture: null, image: null, fills: ["rgba(0, 0, 0, 0.2)", "rgba(90, 77, 65, 0.8)"]},
    };

    this.tilesLoadingCount = Object.keys(this.tiles).length;
    this.isReady = false;

    for (const key of Object.keys(this.tiles)) {
      let obj = this.tiles[key];
      this.initTile(obj);
    }
  }

  checkIsReady(){
    if(this.tilesLoadingCount == 0){
      this.isReady = true;
    }
  }

  initTile(obj){
    let texture = new Image();
    texture.onload = () => {
      obj.texture = texture;
      obj.width = texture.naturalWidth;
      obj.height = texture.naturalHeight;

      let tileCanvas = document.createElement("canvas");
      tileCanvas.width =  obj.width;
      tileCanvas.height = obj.height;
      let tileContext = tileCanvas.getContext("2d");

      tileContext.beginPath();
      tileContext.rect(0, 0, tileCanvas.height, tileCanvas.height);

      obj.fills.forEach((fill)=>{
        tileContext.fillStyle = fill;
        tileContext.fill();
      });

      if(obj.texture){
        tileContext.drawImage(obj.texture, 0, 0, tileCanvas.height, tileCanvas.height);
      }

      obj.image = tileCanvas;

      this.tilesLoadingCount--;
      this.checkIsReady();
    };
    texture.src = obj.src;
  }

  renderTile(tileName, context, x, y, w, h) {
    const tile = this.tiles[tileName];

    if(tile && tile.image){
      context.drawImage(tile.image, x, y, w, h);
    }
  }
}
