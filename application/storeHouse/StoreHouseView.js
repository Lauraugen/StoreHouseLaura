"use strict";

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
                <button type="button" class="btn-success" id="bProducts" value=${iterator.product}>Comprar</button>
              </div>
            </div>
          </div>` );
      cont++;

  }
}

showInfoProducts(store) {


  // <button type="button" class="btn btn-success" data-bs-toggle="modal"
  //                           data-bs-target="#exampleModal">
  //                           Comprar
  //                       </button>


//    <!-- Modal -->
//    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//    <div class="modal-dialog">
//        <div class="modal-content">
//            <div class="modal-header">
//                <h5 class="modal-title" id="exampleModalLabel">Notificación de Compra</h5>
//                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//            </div>
//            <div class="modal-body">
//                x 1 Volumen
//            </div>
//            <div class="modal-footer">
//                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Añadir a Carrito</button>
//            </div>
//        </div>
//    </div>
// </div>
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
      //Muestra las tiendas 
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
        console.log(tienda);
        handlerStoreProducts(tienda);
      })
      
    })
    
  }
  //Bind Stores menú secundario que muestre la tienda indicada
  bindLoadStoreProductsDropDown(handleStoreProductsDropDown) {

    //Los eventos .click solo funcionan con elementos estáticos de html
    //Para los dinámicos se hace con el on sobre el padre,delegando el evento a los hijos (DropDownStore > .aStore)
     this.DropDownStore.on('click','.aStore' , function(event) {
        //Recogemos el valor del atributo value del botón de productos(Contiene el Objecto Store)
        
        let tienda=$(this).attr('value'); //this button
        console.log(tienda);
        handleStoreProductsDropDown(tienda);
      })
      
    
    
  }
  //Información de los Productos
  bindLoadInfoProducts(handleInfoProducts) {

    $document.ready(function (event){
      $('#bProducts').click(function (event) {
        let tienda=$(this).attr('value'); //this button
        console.log(tienda);
        handleInfoProducts(tienda);
      })
      
    })

  }
  
}

export default View;