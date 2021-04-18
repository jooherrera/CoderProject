class Carrito {
  productos: Array<Iproducts>;
 //Carrito recibe un array de productos. 
  constructor(productos : Array<Iproducts>){
    this.productos = productos
  }

    get type(){
      return console.log(this.productos);
    }
  
   get total(){
    let sumaTotal = 0
    for(let el of this.productos){
      sumaTotal += el.price
    }
    return sumaTotal
  }

  get borrarCarrito(){
    return localStorage.clear()
    
  }

  get pagar(){
    console.log("Carrito Pagado");
     return this.borrarCarrito
  }


}

