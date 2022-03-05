"use strict";

import { Books, Movie, Music } from "./StoreHouseModel.js";

class View {
  constructor() {
    this.tiendasContainer = $("#tiendasContainer");
    this.DropDownCategory = $("#DropDownCategory");
    this.DropDownStore = $("#DropDownStores");

  }
  //es el init 

  //Cargarmos las tiendas en inicio
  showLoadStores(store) {
    this.tiendasContainer.empty();
    let cont = 0;
    for (const iterator of store.storeKey) {
      this.tiendasContainer.append(`<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="${iterator.DataStore.photos}" class="img-fluid" alt="">
              </figure>
    
              <div class="portfolio-info" id="tienda${cont}">
                <h4>${iterator.DataStore.name}</h4>
                <button type="button" class="btn-success bStore" value=${iterator.DataStore.cif}>Productos</button>
              </div>
            </div>
          </div>` );
      cont++; //Para diferenciarlo (los id)
    }

  }
  //Procedemos a cargar los productos de cada tienda /al hacer clic en la tienda
  showStoreProducts(store) {
    this.tiendasContainer.empty();
    let cont = 0;
    for (const iterator of store.tienda) {
      this.tiendasContainer.append(`<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="${iterator.product.images}" class="img-fluid" alt="">
              </figure>
    
              <div class="portfolio-info" id="product${cont}">
                <h4>${iterator.product.name}</h4>
                <button type="button" class="btn-success" id="bProducts" value=${iterator.product.serialNumber}>Comprar</button>
              </div>
            </div>
          </div>` );
      cont++;

    }
  }

  showInfoProducts(data) {
    this.tiendasContainer.empty();
    let producto = "";
    for (const category of data.categoria) {
      for (const product of category.DataProductsCat) {
        if (product.DataProduct.serialNumber == data.key) {
          producto = product.DataProduct; //Devolvemos el producto completo (comprobamos que coincide el serialNumber)
        }
      }
    }
    if (producto instanceof Books) {
      this.tiendasContainer.append(`
      <section id="about" class="about">
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <img src=${producto.images} class="img-fluid" alt="">
            </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
           <h3>${producto.name}</h3>
           <h4>BOOK</h4>
          <p>
            ${producto.description}<br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i class="bx bx-check-double"></i>Páginas Book: ${producto.pages}</li>
          </ul>
        <div class="row icon-boxes">
          <div class="col-md-6">
            <i class="bx bx-receipt"></i>
            <h4>ISBN : ${producto.isbn}</h4>
            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <i class="bx bx-cube-alt"></i>
            <h4>AUTHOR : ${producto.author}</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>`);
    } else if (producto instanceof Movie) {
      this.tiendasContainer.append(`
      <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
            <img src=${producto.images} class="img-fluid" alt="">
          </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
         <h3>${producto.name}</h3>
         <h4>MOVIE</h4>
        <p>
          ${producto.description}<br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><i class="bx bx-check-double"></i>Duración Película: ${producto.duration}</li>
        </ul>
      <div class="row icon-boxes">
        <div class="col-md-6">
          <i class="bx bx-receipt"></i>
          <h4>AÑO : ${producto.year}</h4>
          <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
        </div>
        <div class="col-md-6 mt-4 mt-md-0">
          <i class="bx bx-cube-alt"></i>
          <h4>DIRECTOR : ${producto.director}</h4>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        </div>
      </div>
    </div>
  </div>

</div>
</section>`);
    } else if (producto instanceof Music) {
      this.tiendasContainer.append(`
      <section id="about" class="about">
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <img src=${producto.images} class="img-fluid" alt="">
            </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
           <h3>${producto.name}</h3>
           <h4>MUSIC</h4>
          <p>
            ${producto.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i class="bx bx-check-double"></i>Número de Canciones: ${producto.songsNumber}</li>
          </ul>
        <div class="row icon-boxes">
          <div class="col-md-6">
            <i class="bx bx-receipt"></i>
            <h4>GÉNERO MÚSICAL : ${producto.musicalGenre}</h4>
            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <i class="bx bx-cube-alt"></i>
            <h4>CANTANTE : ${producto.singer}</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>`);
    }
  }

  //categorias con acordittion
  ///TERMINA DE MODIFICAR ESTO
  // showLoadCategory(category) {
  //   this.tiendasContainer.empty();
  //   let cont = 0;
  //   for (const iterator of category.categoryKey) {
  //     this.tiendasContainer.append(`<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
  //           <div class="portfolio-wrap">
  //             <figure>
  //               <img src="${iterator.DataStore.photos}" class="img-fluid" alt="">
  //               <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview"><i class="bx bx-plus"></i></a>
  //               <a href="" class="link-details" title="More Details"><i class="bx bx-link"></i></a>
  //             </figure>

  //             <div class="portfolio-info" id="tienda${cont}">
  //               <h4><a >${iterator.DataStore.name}</a></h4>
  //               <p>App</p>
  //             </div>
  //           </div>
  //         </div>` );
  //     cont++; //Para diferenciarlo (los id)
  //   }



  //}

  //le pasamos el mapa del controller
  showDropCategory(category) {
    //Limpiamos el contenedor
    this.DropDownCategory.empty();
    //Mostramos el menú secundario de las Categorias
    for (const iterator of category.categoryKey) {
      this.DropDownCategory.append(`<li><a href="#">${iterator.DataCategory.title}</a></li>`);
    }
  }

  showDropStores(store) {
    //Limpiamos el contenedor
    this.DropDownStore.empty();
    //Mostramos el menú secundario de las Stores
    for (const iterator of store.storeKey) {
      this.DropDownStore.append(`<li><a class="aStore" value=${iterator.DataStore.cif} >${iterator.DataStore.name}</a></li>`);
    }
  }

  //Unión entre el evento y el controlador
  bindLoadStores(handlerLoadStores) {
    //Ocurre en carga del documento, para mostrarlo al usuario lo primero
    $(document).ready(function (event) {
      //Llama al controlador para que muestre las tiendas 
      handlerLoadStores();

    })
    $('#bHome').click(function (event) {
      location.reload(true);
      //Enlace de restauración página de inicio
    })
  }

  bindLoadDropDownCategory(handlerDropCategory) {

    $('#hCategory').hover(function (event) {
      //Llama al controlador para que muestre el menú secundario de Categorias
      handlerDropCategory();

    })
  }

  bindLoadDropDownStores(handlerDropStore) {

    $('#hStores').hover(function (event) {
      handlerDropStore();

    })
  }

  bindLoadStoreProducts(handlerStoreProducts) {
    //Añade los listener cuando se haya cargado la página, para que existan
    $(document).ready(function (event) {

      $('.bStore').click(function (event) {
        //Recogemos el valor del atributo value del botón de productos(Contiene el Objecto Store)

        let tienda = $(this).attr('value'); //this button
        console.log(tienda);
        handlerStoreProducts(tienda);
      })

    })

  }
  //Bind Stores menú secundario que muestre la tienda indicada
  bindLoadStoreProductsDropDown(handleStoreProductsDropDown) {

    //Los eventos .click solo funcionan con elementos estáticos de html
    //Para los dinámicos se hace con el on sobre el padre,delegando el evento a los hijos (DropDownStore > .aStore)
    this.DropDownStore.on('click', '.aStore', function (event) {
      //Recogemos el valor del atributo value del botón de productos(Contiene el Objecto Store)

      let tienda = $(this).attr('value'); //this button
      console.log(tienda);
      handleStoreProductsDropDown(tienda);
    })



  }
  //Información de los Productos
  bindLoadInfoProducts(handleInfoProducts) {
    this.tiendasContainer.on('click', '#bProducts', function (event) {
      let tienda = $(this).attr('value'); //Recogemos el SerialNumber de Productos
      console.log(tienda);
      handleInfoProducts(tienda);
    })



  }

}

export default View;