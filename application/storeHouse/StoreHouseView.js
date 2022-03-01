"use strict";

class View {
  constructor() {
    this.tiendasContainer = $("#tiendasContainer");
    this.DropDownCategory = $("#DropDownCategory");
    this.DropDownStore = $("#DropDownStores");
    
  }
  //es el init 
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
                <button type="button" class="btn-success" id="bProducts" value=${iterator.product}>Comprar</button>
              </div>
            </div>
          </div>` );
      cont++;

  }
}
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
    
    for (const iterator of category.categoryKey) {
      this.DropDownCategory.append(`<li><a href="#">${iterator.DataCategory.title}</a></li>`);
    }
  }

  showDropStores(store) {
    //Limpiamos el contenedor
   this.DropDownStore.empty();
   
   for (const iterator of store.storeKey) {
     this.DropDownStore.append(`<li><a class="aStore" >${iterator.DataStore.name}</a></li>`);
   }
 }

  bindLoadStores(handlerLoadStores) {
    //Ocurre en carga del documento, para mostrarlo al usuario lo primero
    $(document).ready(function (event) {

      handlerLoadStores();
      
    })
    $('#bHome').click(function (event) {
      location.reload(true);
      //Enlace de restauración página de inicio
    })
  }

  bindLoadDropDownCategory(handlerDropCategory) {
    
    $('#hCategory').hover(function (event) {
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
        
        let tienda=$(this).attr('value'); //this button
        handlerStoreProducts(tienda);
      })
      
    })
    
  }
  
  bindLoadStoreProductsDropDown(handlerStoreProductsDropDown) {
    //Añade los listener cuando se haya cargado la página, para que existan
    $(document).ready(function (event) {

      $('.aStore').click(function (event) {
        //Recogemos el valor del atributo value del botón de productos(Contiene el Objecto Store)
        
        let tienda=$(this).attr('value'); //this button
        handlerStoreProductsDropDown(tienda);
      })
      
    })
    
  }


  
}

export default View;