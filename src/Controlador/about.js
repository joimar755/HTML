import vistas from "../vistas/about.html";

export default () => {
  const divElement = document.createElement("div");
  //divElement.classList = 'text-black';
  divElement.innerHTML = vistas;
  class Product {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  class UI {
    addProduct(Producto) {
      const product_list = document.getElementById("product-list");
      const elemtent = document.createElement("div");
      elemtent.innerHTML = ` 
          <div class="card text-white bg-primary text-center mb-4">
          <div class="card-body">
            <strong>nombre Producto</strong>: ${Producto.nombre}
            <strong>Precio</strong>: ${Producto.precio}
            <input name="delete" class="btn btn-danger" type="button" value="Eliminar">
      
          </div>
          </div>
          `;
      product_list.appendChild(elemtent);
    }
    Reset_form() {
      document.getElementById("form").reset();
    }
    deleteProduct(elemento) {
      if (elemento.name === "delete") {
        alertify.confirm(
          "This is a confirm dialog.",
          function () {
            elemento.parentElement.parentElement.parentElement.remove();
            alertify.success("Ok");
          },
          function () {
            alertify.error("Cancel");
          }
        );
      }
    }
  }
  const btn = divElement.querySelector("#form");
  btn.addEventListener("submit", () => {
    const nombre = divElement.querySelector("#nombre").value;
    const precio = divElement.querySelector("#precio").value;
    //console.log(name + precio)
    if (nombre == "" || precio == "") {
      alertify.error("Inserte campos");
      //alert("Inserte campos");
    } else {
      const Producto = new Product(nombre, precio);

      const ui = new UI();
      ui.addProduct(Producto);
      ui.Reset_form();
      alertify.success("Success message");
    }
    document
      .getElementById("product-list")
      .addEventListener("click", function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
      });
  });

  return divElement;
};
