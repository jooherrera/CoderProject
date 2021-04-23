$(() => {
// let data : Idata 

  loadItems(jsonURL).then(res => {
    // drawItems(res!);
    //  data = res!
    
    router(res!)
  
  })
      
  




});

// console.log(a);
//  let carrito: Array<{title:string,image:string,price:number}>  = []
const app = new ProductController(new ProductModel(),new ProductVista())
// app.load()
// console.log(app.load());

const routes : Iroutes[] = [
  {path : '/',action:'home'},
  {path : '/home',action:'home'},
  {path : '/carrito',action:'carrito'},
  {path : '/productos',action:'productos'},
  {path : '/descriptionitem',action:'item'},
  {path : '/buscar',action:'buscar'},
  {path : '/error',action:'error'},
  {path : '/construccion',action:'construccion'},
]


const ErrorComponent = (padre : string) => {
    $(padre).html("<h2>No se ha encontrado elementos</h2>");
  }

const ErrorComponentConstruccion = (padre : string) => {
    $(padre).html("<h2>Sitio bajo construccion</h2>");
  }

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';


const findActionByPath = (path : string, routes : Iroutes[] ) => routes.find(r => r.path == path || undefined)

const router =  (data:Idata) => {
  const path =  parseLocation()
  const {action = 'distinto'} =  findActionByPath(path, routes) || {}

  switch (action) {
     case 'home':
        app.irInicio('#app',data)
        break
     case 'carrito':
        app.irCarrito('#app')
        break
     case 'productos':
        app.irProductos('#app',data)
        break
     case 'item':
        app.irDescripcionItem('#app',data)
        break
     case 'buscar':
     
        app.irBuscar('#app',data)
        break
      case 'error':
        ErrorComponent('#app')
       
        break
        case 'construccion':
        ErrorComponentConstruccion('#app')
       
        break
     default:
        app.irBuscar('#app',data)
        break
  }
}



$( window ).on( 'load', function()  {
  // router();
   loadItems(jsonURL).then(res => {
    // drawItems(res!);
    //  data = res!
     router(res!)
  });
  //  router(app.productoModel.data!)
});


$(window).on('hashchange',()=>{
  // router()
   loadItems(jsonURL).then(res => {
  //   // drawItems(res!);
  //   //  data = res!
    // location.reload()
   router(res!)
  });
})