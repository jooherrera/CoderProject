// const contentItem = <HTMLElement>document.getElementById('content')
const contentItem = $('#content')
//Busca en el local storage si existe un carrito, sino crear uno vacio.
localStorage.getItem("Carrito") ? carrito = JSON.parse(localStorage.getItem("Carrito")!) : localStorage.setItem("Carrito","") 
$(()=>{
  loadItems(jsonURL).then(res => {
  drawSelected(res)
})
})

 
const drawSelected = (data: Idata | undefined) =>{
  let pNumber : number = parseInt(sessionStorage.getItem("producto")!)
  let iNumber : number = parseInt(sessionStorage.getItem("item")!)
  let items = data!.title[iNumber].Productos[pNumber]

  content.append(`
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
    `)

  const addCarritoBtn = $('#addCarrito')

  addCarritoBtn.on('click',() => {
      //Se agregar el producto al carrito.    
      const ObjetoProducto = new Product(items.title,items.image,items.price)
    
    carrito.push(ObjetoProducto)
    localStorage.setItem("Carrito",JSON.stringify(carrito))
    location.href = "../pages/carrito.html";
  })

}