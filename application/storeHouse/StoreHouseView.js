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
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bx bx-link"></i></a>
              </figure>
    
              <div class="portfolio-info" id="tienda${cont}">
                <h4><a href="portfolio-details.html">${iterator.DataStore.name}</a></h4>
                <p>STORE</p>
              </div>
            </div>
          </div>` );
      cont++; //Para diferenciarlo (los id)
    }

  }
  ///TERMINA DE MODIFICAR ESTO
  showLoadCategory(category) {
    this.tiendasContainer.empty();
    let cont = 0;
    for (const iterator of category.categoryKey) {
      this.tiendasContainer.append(`<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="${iterator.DataStore.photos}" class="img-fluid" alt="">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bx bx-link"></i></a>
              </figure>
    
              <div class="portfolio-info" id="tienda${cont}">
                <h4><a href="portfolio-details.html">${iterator.DataStore.name}</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>` );
      cont++; //Para diferenciarlo (los id)
    }

   

  }

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
     this.DropDownStore.append(`<li><a href="#">${iterator.DataStore.name}</a></li>`);
   }
 }

  bindLoadStores(handlerController) {
    //Ocurre en carga del documento, para mostrarlo al usuario lo primero
    $(document).ready(function (event) {

      handlerController();
      
    })
    $('#bHome').click(function (event) {
      handlerController();
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



  
}

export default View;