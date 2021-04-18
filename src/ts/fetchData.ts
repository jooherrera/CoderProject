
// const content = <HTMLElement>document.getElementById('content')
const content = $('#content')
const jsonURL:string = "../assets/JSON/categorias.json"
let carrito: Array<{title:string,image:string,price:number}>  = []

// ----------------------------------------------------------------
// Leer JSON 
//La promesa devuelve la data o undefined
const loadItems = async (url:string):Promise<Idata | undefined> =>{
  try{

    const response = await fetch(url)
    const data : Idata = await response.json()

    return  data

  }
  catch(err){
    console.log("fetch failed" + err)
    return undefined
  }
 
}
