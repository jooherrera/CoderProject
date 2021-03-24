document.addEventListener('DOMContentLoaded',() =>{

  loadItems(jsonURL).then(res => {
    drawItems(res)
  })
})


const drawItems =  (data:any) => {


 for (const element of data.title) {
   content.innerHTML += `
   
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

 }

 const itemButton = document.querySelectorAll('.itemButton')

for (const element of itemButton) {
  element.addEventListener('click', () => {
    console.log(element);
    switch (element.id) {
      case "0":
        sessionStorage.setItem("item","0")        
         location.href = "../pages/productos.html"
        break;
      case "1":
        sessionStorage.setItem("item","1") 
         location.href = "../pages/productos.html"
        break;
      default:
        break;
    }

    //
  //   content.innerHTML = ""
  //   for (const iterator of items.title[element.id].Productos) {
   
  //     content.innerHTML += `
  //   <div class="col-6">
  //   <div class="card">
  //     <div class="">
  //     <img src="${iterator.image}" class="card-img-top img-thumb" alt="item">
  //     </div>
  //    <div class="card-footer itemButton" id="${element.id}">
  //       <h5 class="card-title">${iterator.title}</h5>
  //     </div>
  //   </div>
  // </div>
  //   `
  //   }
    
    
    })
}

}



