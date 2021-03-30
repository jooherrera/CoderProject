//Espera a que cargue el DOM para buscar los items en el JSON
$(() => {
  loadItems(jsonURL).then((res) => {
    drawItems(res);
  });
});

//Dibuja en el DOM la lista de productos
const drawItems = (data: any) => {
  for (const element of data.title) {
    content.append(`
   
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
   `)
  }

  for (const element of $(".itemButton")) {
    $(element).on('click',() => {
      switch (element.id) {
        case "0":
          sessionStorage.setItem("item", "0");
          location.href = "../pages/productos.html";
          break;
        case "1":
          sessionStorage.setItem("item", "1");
          location.href = "../pages/productos.html";
          break;
        default:
          break;
      }
    });
  }
};
