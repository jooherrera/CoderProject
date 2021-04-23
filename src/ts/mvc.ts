
class ProductModel {
  carrito: Product[]
 
  constructor(){
    let carrito : Iproducts[]  = []
    localStorage.getItem("Carrito") ? carrito  = JSON.parse(localStorage.getItem("Carrito")!) : localStorage.setItem("Carrito","")
    this.carrito = carrito.map(producto => new Product(producto.title,producto.image,producto.price))

    // console.log(carrito);
    // console.log(this.carrito)
  }

  guardarProducto() {
    localStorage.setItem("Carrito",JSON.stringify(this.carrito))
  }

  agregarProducto(producto : Iproducts) {
    this.carrito.push(new Product(producto.title,producto.image,producto.price))
    this.guardarProducto()
  }

  searchProducto(data : Idata,palabra : string) {

  

   let filter = data.title[0].Productos.filter(el => {

  

       const lower = el.title.toLowerCase()
      //  console.log(lower.includes("kris"))
      if(lower.includes(palabra)){
        return el.title.toLowerCase()
      }

       
    //  console.log(lower)
    })
    console.log(filter);
     return filter
    
 
    // console.log(filter);
     
   
  }
} 



class ProductVista {

  home(padre : string,data: Idata,_callback : void){
   let element : Iitems
   let html : string = ""
   html = `  <div class=" row  row-cols-md-3 g-4 text-center mt-0"  >`

  for ( element of data!.title) {

    
    
    html += `   

                  <div class="col-6">
                    <div class="card">
                      <div class="">
                      <img src="${element.image}" class="card-img-top img-thumb" alt="item">
                      </div>
                    <div class="card-footer itemButton" id="${element.id}">
                        <h5 class="card-title">${element.title}</h5>
                      </div>
                    </div>
                  </div>

                  `

    $(padre).html(html)
  }

  html = ` </div>`


  for (const element of $(".itemButton")) {
    $(element).on('click',() => {
      switch (element.id) {
        case "0":
          sessionStorage.setItem("item", "0");
          location.href = "#/productos";
   
    
          break;
        case "1":
          sessionStorage.setItem("item", "1");
          location.href = "#/productos";
         
          break;
        default:
          break;
      }
    });
  }


  // $('#form').on('submit',(e) =>{
  //   e.preventDefault()
  //     const searchTerm : string | number | string[] | undefined = $('#exampleDataList').val()

  //     if (searchTerm && searchTerm !== ''){
  //       sessionStorage.setItem("palabra",String(searchTerm))
  //       location.href = "#/buscar"
  //     }
  // })





  };

  carrito(padre : string,carrito : Iproducts[],Carro : Carrito){
    let element : Iproducts
if (!carrito){
  $(padre).html("")
}
    let html : string = ""


    for ( element of carrito) {
      html +=  `
        <div class="container m-auto row text-center mt-5 bg-white p-3 border-custom">
            <div class=" bg-white col-5 rounded ">
              <img src="${element.image}" class="card-img-top img-thumb" alt="...">
            </div>
            <div class="col-7  container bg-white rounded mx-auto  d-flex flex-column justify-content-around">
              <h4 class="fs-3 ">${element.title}</h4>
              <hr class="w-75 mx-auto ">
              <h2>$ ${element.price}</h2>
            </div>
          </div> 
          `
       
    }
    $(padre).html(html)

    $(padre).append(`
    <div class="container mb-5" id="contentPagar" >
        <div class="row text-center mt-5 bg-white p-3 border-custom">
        <div class="col-6 container bg-white rounded">
          <h3>Total a Pagar</h3>
          <hr class="w-75 mx-auto">
          <h2>$${Carro.total}</h2>
          <hr class="w-75 mx-auto">
          <button class="btn btn-primary w-100"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="payment" >Pagar</button>
        </div>
      </div>
    </div>
    `)

 $('#close').on('click',() => {
        location.reload()
      })

const payment = $('#payment')
if(Carro.total > 0){
payment.on('click',() =>{
    return Carro.pagar
 })
}else{
  payment.css({
    display : "none"
  })
}


//  $('#form').on('submit',(e) =>{
//     e.preventDefault()
//       const searchTerm : string | number | string[] | undefined = $('#exampleDataList').val()

//       if (searchTerm && searchTerm !== ''){
//         sessionStorage.setItem("palabra",String(searchTerm))
//         location.href = "#/buscar"
//       }
//   })






  }

  productos(padre : string, data:Idata){
    let parseNumber : number = parseInt(sessionStorage.getItem("item")!)
    let items = data.title[parseNumber].Productos
    let element : Iproductos
    let html = ""
    
    html = `  <div class=" row  row-cols-md-3 g-4 text-center mt-0"  >`
    for ( element of items) {

      //  console.log(element);
     
        html += `
        <div class="col-6">
        <div class="card">
          <div class="">
          <img src="${element.image}" class="card-img-top img-thumb" alt="item">
          </div>
        <div class="card-footer itemButton" id="${element.id}">
            <h5 class="card-title">${element.title}</h5>
          </div>
        </div>
      </div>
        `

       
       $(padre).html(html) 

       
    }
      html += `</div>`

    for (const el of $('.itemButton')) {
      $(el).on('click', () => {
        sessionStorage.setItem("producto",el.id)
        location.href = "#/descriptionItem";
       
        })
      }



  }

  descripcionItem(padre : string, items:Iproductos, callback : VoidFunction){
    
    
     let html = ""
     html = `
        <div class="container m-auto row text-center mt-5 bg-white p-3 border-custom">
            <div class=" bg-white col-5 rounded ">
              <img src="${items.image}" class="card-img-top img-thumb" alt="...">
            </div>
            <div class="col-7  container bg-white rounded mx-auto  d-flex flex-column justify-content-around">
              <h4 class="fs-3 ">${items.title}</h4>
              <hr class="w-75 mx-auto ">
              <h2>$ ${items.price}</h2>
            <hr class="w-75 mx-auto ">
              <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal" id="addCarrito">Agregar al carrito</button>
      
            </div>
          </div> 
          `

     $(padre).html(html)
    

    const addCarritoBtn = $('#addCarrito')

      $('#close').on('click',() => {
        
      })

      addCarritoBtn.click(callback)



          //Se agregar el producto al carrito.    
          // const ObjetoProducto = new Product(items.title,items.image,items.price)
        
        

        // carrito.push(ObjetoProducto)
        // localStorage.setItem("Carrito",JSON.stringify(carrito))
        // location.href = "#/carrito";

     




 

    
  }
  
  buscar(padre : string,array:Iproductos[]) {
  

    if(array.length === 0){
      $(padre).html("")
      location.href = "#/error"
    }
      let element : Iproductos
   
    
      let html = ""
    
    

    html = `  <div class=" row  row-cols-md-3 g-4 text-center mt-0"  >`
    for ( element of array) {

      //  console.log(element);
     
        html += `
        <div class="col-6">
        <div class="card">
          <div class="">
          <img src="${element.image}" class="card-img-top img-thumb" alt="item">
          </div>
        <div class="card-footer itemButton" id="${element.id}">
            <h5 class="card-title">${element.title}</h5>
          </div>
        </div>
      </div>
        `

       
       $(padre).html(html) 

       
    }
      html += `</div>`
    

 for (const el of $('.itemButton')) {
      $(el).on('click', () => {
        sessionStorage.setItem("producto",el.id)
        location.href = "#/descriptionItem";
       
        })
      }

    //  $(padre).html("")
  }
}


  class ProductController {
    productoModel: ProductModel;
    productoView: ProductVista;
    func: () => void

    constructor(productoModel : ProductModel,productoVista : ProductVista){
      this.productoModel = productoModel
      this.productoView = productoVista

        this.func  = ()  => {
          $('#form').on('submit',(e) =>{
          e.preventDefault() 
       
            const searchTerm : string | number | string[] | undefined = $('#exampleDataList').val()

            if (searchTerm && searchTerm !== ''){
              // location.reload()
              sessionStorage.setItem("palabra",String(searchTerm))
                console.log(parseLocation());
              location.href = "#/buscar=" + searchTerm
             
            
            }
        })


  }
      
    }

    irInicio(app : string,data : Idata){
      // this.func()
      this.productoView.home(app,data,this.func())   
     
   
    }

    irCarrito(app:string){
        let Carro = new Carrito(this.productoModel.carrito)
        // this.func()
      this.productoView.carrito(app,this.productoModel.carrito,Carro)
    }

    irProductos(app : string, data : Idata) {
      // this.func()
      this.productoView.productos(app,data)
    }

    irDescripcionItem(app : string, data : Idata) {
 let pNumber : number = parseInt(sessionStorage.getItem("producto")!)
     let iNumber : number = parseInt(sessionStorage.getItem("item")!)
     let items = data!.title[iNumber].Productos[pNumber]
    // this.func()
      this.productoView.descripcionItem(app,items,() => {
        this.productoModel.agregarProducto(items)
      })
    }

    irBuscar(app : string,data : Idata){
      // this.func()
     
      this.productoView.buscar(app,this.productoModel.searchProducto(data,sessionStorage.getItem("palabra")!))
    }

    
  }

 