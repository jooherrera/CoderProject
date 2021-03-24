document.addEventListener('DOMContentLoaded',()=>{
loadItems(jsonURL).then(res => {
  drawItemsPerfumes(res)
})

})







const drawItemsPerfumes = (data:any) =>{
let parseNumber : number = parseInt(sessionStorage.getItem("item")!)
let items = data.title[parseNumber].Productos
 for (const element of items) {
   console.log(element);
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
  </div
    `
 }


 const itemSelected = document.querySelectorAll('.itemButton')

for (const element of itemSelected) {
  element.addEventListener('click', () => {
    console.log(element);
    sessionStorage.setItem("producto",element.id)
    location.href = "../pages/descriptionItem.html"
    })
  }



}

