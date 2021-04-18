
$(()=>{
const contentItemCarrito = $('#content')
const contentItemCarritoPagar = $('#contentPagar')
//Busca en el local storage si existe un carrito, sino crear uno vacio.
localStorage.getItem("Carrito") ? carrito   = JSON.parse(localStorage.getItem("Carrito")!) : localStorage.setItem("Carrito","") 

let Carro = new Carrito(carrito)
Object.freeze(Carro)
//Pinta en el DOM los elementos del carrito.
for (const element of carrito) {
   contentItemCarrito.append( `
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
    `)
}

//Calcula el total a pagar.
contentItemCarritoPagar.append(`
    <div class="row text-center mt-5 bg-white p-3 border-custom">
      <div class="col-6 container bg-white rounded">
        <h3>Total a Pagar</h3>
        <hr class="w-75 mx-auto">
        <h2>$${Carro.total}</h2>
        <hr class="w-75 mx-auto">
        <button class="btn btn-primary w-100"  data-bs-toggle="modal" data-bs-target="#exampleModal" id="payment" >Pagar</button>
      </div>
    </div>
`) 

//Si hay items para pagar..  aparece el boton.
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

const closedWindow = $('#close')

closedWindow.on('click',() =>{
  return location.reload()
})


})