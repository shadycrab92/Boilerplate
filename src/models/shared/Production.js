export default class Production {
  constructor(availableProducts, inProgressProducts, readyProducts){
    this.availableProducts = availableProducts;
    this.progressProducts = inProgressProducts;
    this.readyProducts = readyProducts;
  }

  addProduct(product){
    if(this.isProductAvailable(product)){
      this.progressProducts.push(product);
    }
  }

  removeProduct(product){
    if(this.isProductProgress(product)){
      this.progressProducts = this.progressProducts.filter((el)=>{
        return el.id != product.id;
      });
    }
  }

  makeProgress(productivity){
    let remainingProductivity = productivity;
    this.progressProducts.map((el)=>{
      if(remainingProductivity > 0){
        el.remainingProgress-=remainingProductivity;
      }

      if(el.remainingProgress < 0){
        remainingProductivity = Math.abs(el.remainingProgress);
      } else {
        remainingProductivity = 0;
      }

      return el.id != product.id;
    });
  }

  isProductAvailable(product){
    return this.availableProducts.any((el)=>{
      return el.type == product.type;
    });
  }

  isProductProgress(product){
    return this.progressProducts.any((el)=>{
      return el.id == product.id;
    });
  }
}

