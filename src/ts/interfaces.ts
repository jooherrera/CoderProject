interface Iproductos {
   id : number;
      image : string;
      title : string;
      price : number;
}

interface Iitems {
  id : number;
  image : string;
  title : string;
  Productos : Iproductos[],
   
}

interface Idata {
  id : string;
  title : Iitems[];

}
interface Iproducts {
  
    price : number;
    image : string;
    title : string;
  
}