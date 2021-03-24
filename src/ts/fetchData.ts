
const content = <HTMLElement>document.getElementById('content')
const jsonURL:string = "../assets/JSON/categorias.json"
let carrito: Array<{title:string,image:string,price:number}>  = []

// ----------------------------------------------------------------
// Leer JSON 
async function loadItems(url:string){
  try{
    const response : any = await fetch(url)
    const data : any = await response.json()
    //  drawItems(data)
    return  data

  }
  catch(err){
    console.log('fetch failed', err);
  }
}

// ---------------------------------------------------------------
