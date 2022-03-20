"use strict";

import { Books, Movie, Music } from "./StoreHouseModel.js";

//Variables form AddTienda
let validoCif;
let validoName;
let validoAddress;
let validoPhone;
let validoCoords;
let validoPhotos;
let iCif;
let iName;
let iAddress;
let iPhone;
let iCoords;
let iPhotos;
let valorCif;
let valorName;
let valorAddress;
let valorPhone;
let valorCoords;
let valorPhotos;

//Variables form AddCategory
let validoTitle;
let validoDescription;
let iTitle;
let iDescription;
let valorTitle;
let valorDescription;

//Variables form AddProductBook
let validoSerialNumber;
let validoNameProduct;
let validoDescriptionProduct;
let validoPrice;
let validoTax;
let validoImages;
let validoIsbn;
let validoAuthor;
let validoPages;

let iSerialNumber;
let iNameProduct;
let iDescriptionProduct;
let iPrice;
let iTax;
let iImages;
let iIsbn;
let iAuthor;
let iPages;

let valorSerialNumber;
let valorNameProduct;
let valorDescriptionProduct;
let valorPrice;
let valorTax;
let valorImages;
let valorIsbn;
let valorAuthor;
let valorPages;

//Variables form AddProductMovie

let validoDirector;
let validoYear;
let validoDuration;
let iDirector;
let iYear;
let iDuration;
let valorDirector;
let valorYear;
let valorDuration;

//Variables form AddProductMusic

let validoSinger;
let validoMusicalGenre;
let validoSongsNumber;
let iSinger;
let iMusicalGenre;
let iSongsNumber;
let valorSinger;
let valorMusicalGenre;
let valorSongsNumber;
let iChecks;

//Variables form Login
let validoUsuario;
let validoPassword;
let iUsuario;
let iPassword;
let valorUsuario;
let valorPassword;



class View {
  constructor() {
    //Declaramos los selectores de los elementos de html que necesitamos modificar
    this.tiendasContainer = $("#tiendasContainer");
    this.DropDownCategory = $("#DropDownCategory");
    this.DropDownStore = $("#DropDownStores");
    this.Ventana = new Map(); //Guardamos como clave el data.key y como valor el newWin

  }



  //Cargarmos las tiendas en inicio (es el init,lo que carga al inicio)
  showLoadStores(store) {
    this.tiendasContainer.empty();
    $('#selectEliminarTienda').empty();
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

      $('#selectEliminarTienda').append(`<option value=${iterator.DataStore.cif}>${iterator.DataStore.name}</option>`)

    }

  }

  showFormAddStores() {

    this.tiendasContainer.empty();
    this.tiendasContainer.append(`
     <form name="formAddTienda" role="form" id="fValidAddTienda" method="post" enctype="multipart/form-data" >
     <h1 class="d-flex justify-content-center">Tienda</h1>
       <div class="mb-3 input-group">

         <label for="iCif" class="form-label">Cif</label>
         <input type="text" class="form-control" id="iCif" name="iCif">
             <div class="msg"></div>
            
       
       </div>

       <div class="mb-3 input-group">

         <label for="iName" class="form-label">Name</label>
         <input type="text" class="form-control" id="iName" name="iName">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iAddress" class="form-label">Address</label>
         <input type="text" class="form-control" id="iAddress" name="iAddress">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iPhone" class="form-label">Phone</label>
         <input type="text" class="form-control" id="iPhone" name="iPhone">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iCoords" class="form-label">Coords</label>
         <input type="text" class="form-control" id="iCoords" name="iCoords">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iPhotos" class="form-label">Photos</label>
         <input type="file" class="form-control" id="iPhotos" name="iPhotos">
             <div class="msg"></div>
       
       </div>
       
       
       <button type="submit" id="bSubmitTienda" class="btn btn-success">Añadir Tienda</button>
     </form>`);
  }

  showFormAddCategory() {

    this.tiendasContainer.empty();
    this.tiendasContainer.append(`
     <form name="formAddTienda" role="form" id="fValidAddCategoria" method="post" enctype="multipart/form-data" >
     <h1 class="d-flex justify-content-center">Categoria</h1>
       <div class="mb-3 input-group">

         <label for="iTitle" class="form-label">Title</label>
         <input type="text" class="form-control" id="iTitle" name="iTitle">
             <div class="msg"></div>
            
       
       </div>

       <div class="mb-3 input-group">

         <label for="iDescription" class="form-label">Description</label>
         <input type="text" class="form-control" id="iDescription" name="iDescription">
             <div class="msg"></div>
             
       
       </div>

       
       <button type="submit" id="bSubmitCategory" class="btn btn-success">Añadir Categoria</button>
     </form>`);
  }


  //Mostramos formulario ProductoBook
  showFormAddProductBook(categorias) {
    this.tiendasContainer.empty();
    this.tiendasContainer.append(`
     <form name="formAddProductoBook" role="form" id="fValidAddProductoBook" method="post" enctype="multipart/form-data" >
     <h1 class="d-flex justify-content-center">Producto Book</h1>
       <div class="mb-3 input-group">

         <label for="iSerialNumber" class="form-label">Serial Number</label>
         <input type="text" class="form-control" id="iSerialNumber" name="iSerialNumber">
             <div class="msg"></div>
            
       
       </div>

       <div class="mb-3 input-group">

         <label for="iNameProduct" class="form-label">Name</label>
         <input type="text" class="form-control" id="iNameProduct" name="iNameProduct">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iDescriptionProduct" class="form-label">Description</label>
         <input type="text" class="form-control" id="iDescriptionProduct" name="iDescriptionProduct">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iPrice" class="form-label">Price</label>
         <input type="text" class="form-control" id="iPrice" name="iPrice">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iTax" class="form-label">Tax</label>
         <input type="text" class="form-control" id="iTax" name="iTax">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iImages" class="form-label">Images</label>
         <input type="file" class="form-control" id="iImages" name="iImages">
             <div class="msg"></div>
       
       </div>
       
       <div class="mb-3 input-group">

         <label for="iIsbn" class="form-label">ISBN</label>
         <input type="text" class="form-control" id="iIsbn" name="iIsbn">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iAuthor" class="form-label">Author</label>
         <input type="text" class="form-control" id="iAuthor" name="iAuthor">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iPages" class="form-label">Pages</label>
         <input type="text" class="form-control" id="iPages" name="iPages">
             <div class="msg"></div>
             
       
       </div>
       <div class="mb-3 input-group check" id="check">

       

       </div>
       
       <button type="submit" id="bSubmitProductoBook" class="btn btn-success">Añadir Book</button>
     </form>`);

    for (const category of categorias.categoria) {

      $(document).find('#check').append(`&nbsp&nbsp&nbsp<input class="form-check-input" type="checkbox" name="CatCheck" value="${category.DataCategory.title}">${category.DataCategory.title}`)
    }

  }

  //Mostramos formulario ProductoMovie
  showFormAddProductMovie(categorias) {
    this.tiendasContainer.empty();
    this.tiendasContainer.append(`
     <form name="formAddProductoMovie" role="form" id="fValidAddProductoMovie" method="post" enctype="multipart/form-data" >
     <h1 class="d-flex justify-content-center">Producto Movie</h1>
       <div class="mb-3 input-group">

         <label for="iSerialNumber" class="form-label">Serial Number</label>
         <input type="text" class="form-control" id="iSerialNumber" name="iSerialNumber">
             <div class="msg"></div>
            
       
       </div>

       <div class="mb-3 input-group">

         <label for="iNameProduct" class="form-label">Name</label>
         <input type="text" class="form-control" id="iNameProduct" name="iNameProduct">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iDescriptionProduct" class="form-label">Description</label>
         <input type="text" class="form-control" id="iDescriptionProduct" name="iDescriptionProduct">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iPrice" class="form-label">Price</label>
         <input type="text" class="form-control" id="iPrice" name="iPrice">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iTax" class="form-label">Tax</label>
         <input type="text" class="form-control" id="iTax" name="iTax">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iImages" class="form-label">Images</label>
         <input type="file" class="form-control" id="iImages" name="iImages">
             <div class="msg"></div>
       
       </div>
       
       <div class="mb-3 input-group">

         <label for="iDirector" class="form-label">Director</label>
         <input type="text" class="form-control" id="iDirector" name="iDirector">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iYear" class="form-label">Year</label>
         <input type="text" class="form-control" id="iYear" name="iYear">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iDuration" class="form-label">Duration</label>
         <input type="text" class="form-control" id="iDuration" name="iDuration">
             <div class="msg"></div>
             
       
       </div>

       
       <div class="mb-3 input-group check" id="check">

       

       </div>
       
       <button type="submit" id="bSubmitProductoMovie" class="btn btn-success">Añadir Movie</button>
     </form>`);

    for (const category of categorias.categoria) {

      $(document).find('#check').append(`&nbsp&nbsp&nbsp<input class="form-check-input" type="checkbox" name="CatCheck" value="${category.DataCategory.title}">${category.DataCategory.title}`)
    }

  }

  //Mostramos formulario Producto Music
  showFormAddProductMusic(categorias) {
    this.tiendasContainer.empty();
    this.tiendasContainer.append(`
     <form name="formAddProductoMusic" role="form" id="fValidAddProductoMusic" method="post" enctype="multipart/form-data" >
     <h1 class="d-flex justify-content-center">Producto Music</h1>
       <div class="mb-3 input-group">

         <label for="iSerialNumber" class="form-label">Serial Number</label>
         <input type="text" class="form-control" id="iSerialNumber" name="iSerialNumber">
             <div class="msg"></div>
            
       
       </div>

       <div class="mb-3 input-group">

         <label for="iNameProduct" class="form-label">Name</label>
         <input type="text" class="form-control" id="iNameProduct" name="iNameProduct">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iDescriptionProduct" class="form-label">Description</label>
         <input type="text" class="form-control" id="iDescriptionProduct" name="iDescriptionProduct">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iPrice" class="form-label">Price</label>
         <input type="text" class="form-control" id="iPrice" name="iPrice">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iTax" class="form-label">Tax</label>
         <input type="text" class="form-control" id="iTax" name="iTax">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iImages" class="form-label">Images</label>
         <input type="file" class="form-control" id="iImages" name="iImages">
             <div class="msg"></div>
       
       </div>
       
       <div class="mb-3 input-group">

         <label for="iSinger" class="form-label">Singer</label>
         <input type="text" class="form-control" id="iSinger" name="iSinger">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iMusicalGenre" class="form-label">MusicalGenre</label>
         <input type="text" class="form-control" id="iMusicalGenre" name="iMusicalGenre">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group">

         <label for="iSongsNumber" class="form-label">SongsNumber</label>
         <input type="text" class="form-control" id="iSongsNumber" name="iSongsNumber">
             <div class="msg"></div>
             
       
       </div>

       <div class="mb-3 input-group check" id="check">

       

       </div>
       
       <button type="submit" id="bSubmitProductoMusic" class="btn btn-success">Añadir Music</button>
     </form>`);

    for (const category of categorias.categoria) {

      $(document).find('#check').append(`&nbsp&nbsp&nbsp<input class="form-check-input" type="checkbox" name="CatCheck" value="${category.DataCategory.title}">${category.DataCategory.title}`)
    }
  }



  //Carga formulario Tiendas
  bindFormAddStores(handleFormAddStores) {
    $('#formAddTienda').click(function () {
      handleFormAddStores();
    })
  }
  //Carga select modal
  bindFormRemoveStores(handleFormRemoveStores) {
    $('#SelectformRemoveTienda').click(function () {
      handleFormRemoveStores();
    })
  }
  //Lanza evento al pulsar boton eliminar
  bindButtonRemoveStore(handleButtonRemoveStore) {
    $('#bEliminarTienda').click(function () {

      let cif = $('#selectEliminarTienda').val();//selec modal (valor)

      handleButtonRemoveStore(cif);
    })
  }
  //Cargamos el select de tiendas para el stock
  bindStockShowStores(handleStockShowStores) {
    $('#SelectStock').click(function () {
      handleStockShowStores();
    })
  }

  //Lanza evento al pulsar boton Mostrar de Stock
  bindButtonMostrarStock(handleButtonMostrarStock) {
    $('#bMostrarStock').click(function () {

      let cif = $('#selectStockTiendas').val();//selec modal (valor)

      handleButtonMostrarStock(cif);
    })
  }

  bindButtonEliminarStock(handleButtonEliminarStock) {
    $('#bEliminarStock').click(function () {

      let serialNumber = $('#selectStockProductos').val();//selec modal (valor)

      handleButtonEliminarStock(serialNumber);
    })
  }

  //Carga formulario Categorias
  bindFormAddCategory(handleFormAddCategory) {
    $('#formAddCategoria').click(function () {
      handleFormAddCategory();
    })
  }
  //Carga select modal eliminar categoria
  bindFormRemoveCategory(handleFormRemoveCategory) {
    $('#SelectformRemoveCategoria').click(function () {
      handleFormRemoveCategory();
    })
  }
  //Lanza evento al pulsar boton eliminar
  bindButtonRemoveCategory(handleButtonRemoveCategory) {
    $('#bEliminarCategoria').click(function () {


      let title = $('#selectEliminarCategoria').val();//selec modal (valor)
      handleButtonRemoveCategory(title);
    })
  }

  //Carga select modal eliminar productos
  bindFormRemoveProduct(handleFormRemoveProduct) {
    $('#SelectformRemoveProducto').click(function () {
      handleFormRemoveProduct();
    })
  }

  //Lanza evento al pulsar boton eliminar
  bindButtonRemoveProduct(handleButtonRemoveProduct) {
    $('#bEliminarProducto').click(function () {


      let serialNumber = $('#selectEliminarProducto').val();//selec modal (valor)
      handleButtonRemoveProduct(serialNumber);
    })
  }

  bindFormAddProductBook(handleFormAddProductBook) {
    $('#formAddProductoBook').click(function () {
      handleFormAddProductBook();
    })
  }
  bindFormAddProductMovie(handleFormAddProductMovie) {
    $('#formAddProductoMovie').click(function () {
      handleFormAddProductMovie();
    })
  }

  bindFormAddProductMusic(handleFormAddProductMusic) {
    $('#formAddProductoMusic').click(function () {
      handleFormAddProductMusic();
    })
  }

  //Login
  bindShowLogin(handleShowLogin){
    $('#Login').click(function(){
      handleShowLogin();
    })
  }

  bindDesconectar(handleDesconectar){
    $('#Desconectar').click(function(){
      handleDesconectar();
    })
  }

  showLogin(){
    this.tiendasContainer.empty();
    this.tiendasContainer.append(`
    <h1 class="d-flex justify-content-center">Login</h1>
    <form name="formLogin" role="form" id="fValidLogin" method="post">
     <div class="mb-3">
      <label for="iUsuario" class="form-label">Usuario</label>
      <input type="text" class="form-control" id="iUsuario" name="iUsuario">
             <div class="msg"></div>
     </div>
    <div class="mb-3">
      <label for="iPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="iPassword" name="iPassword">
          <div class="msg"></div>
    </div>
    
    <button type="submit" class="btn btn-primary" id="bLogin">Iniciar Sesión</button>
   </form>`);

  }

  //Cargamos las tiendas en el select de Stock
  showStockStores(data) {
    $('#selectStockTiendas').empty();
    for (const tienda of data.tienda) {
      $('#selectStockTiendas').append(`<option value=${tienda.DataStore.cif}>${tienda.DataStore.name}</option>`)
    }
  }
  //Cargamos los productos de la tienda seleccionada
  showStockProduct(data) {
    $('#selectStockProductos').empty();
    for (const producto of data.tienda) {
      $('#selectStockProductos').append(`<option value=${producto.product.serialNumber}>${producto.product.name} : ${producto.stock}</option>`)
    }
  }


  showDropDownProducts(tmpProductos) {
    $('#selectEliminarProducto').empty();
    tmpProductos.forEach(product => {
      $('#selectEliminarProducto').append(`<option value=${product.DataProduct.serialNumber}>${product.DataProduct.name}</option>`);
    });


  }

  //Procedemos a cargar los productos de cada tienda al hacer clic en la tienda
  showStoreProducts(store) {
    this.tiendasContainer.empty();

    let mapCat = new Map(); //Guardamos las categorías de la tienda para que no se repitan
    //console.log(store.tienda)
    for (const categorias of store.tienda) {

      if (!mapCat.has(categorias.categoriaProducto)) {
        //Generamos el titulo de la categoría en su contenedor
        mapCat.set(categorias.categoriaProducto, `<div id="${categorias.categoriaProducto}"class="row portfolio-container" ><h3>${categorias.categoriaProducto}</h3></div>`)
      }//Establecemo clave(titulo categoria), valor (div que lo contiene)

    }

    for (const valorMapaCat of mapCat.values()) {
      this.tiendasContainer.append(valorMapaCat)
    }

    let cont = 0;
    //console.log(store.tienda2) Tengo dos tiendas porque los generadores se cierran al recorrerlos una vez 
    for (const iterator of store.tienda2) {
      //Recogemos el id del contenedor de categoria del producto
      //Generamos los productos en el container de las categorias generado dinámicamente
      $(`#${iterator.categoriaProducto}`).append(`<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="${iterator.product.images}" class="img-fluid" alt="">
              </figure>
    
              <div class="portfolio-info" id="product${cont}">
                <h4>${iterator.product.name}</h4>
                <button type="button" class="btn-success" id="bProducts" value=${iterator.product.serialNumber}>Comprar</button>
                <button type="button" class="btn-warning" id="windowProducts" value=${iterator.product.serialNumber}>Mostrar Ventana</button>
              </div>
            </div>
          </div>` );
      cont++;

    }
  }


  showInfoProducts(data) {
    this.tiendasContainer.empty();
    let producto = "";
    //Accedemos al producto recorriendo el iterador
    for (const category of data.categoria) {
      for (const product of category.DataProductsCat) {
        if (product.DataProduct.serialNumber == data.key) {
          producto = product.DataProduct; //Devolvemos el producto completo (comprobamos que coincide el serialNumber)
        }
      }
    }
    if (producto instanceof Books) {
      //Si el producto es tipo Book mostramos su información única
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
      //Si el producto es tipo Movie mostramos su información única
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
      //Si el producto es tipo Music mostramos su información única
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
            ${producto.description}<br>
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

  showCategoryProducts(category) {
    let cont = 0;
    this.tiendasContainer.empty();
    for (const iterator of category.categoria) {

      //Recogemos el id del contenedor de categoria del producto
      //Generamos los productos en el container de las categorias generado dinámicamente
      this.tiendasContainer.append(`<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="${iterator.product.images}" class="img-fluid" alt="">
              </figure>
    
              <div class="portfolio-info" id="product${cont}">
                <h4>${iterator.product.name}</h4>
                <button type="button" class="btn-success" id="bProducts" value=${iterator.product.serialNumber}>Comprar</button>
                <button type="button" class="btn-warning" id="windowProducts" value=${iterator.product.serialNumber}>Mostrar Ventana</button>
              </div>
            </div>
          </div>` );
      cont++;

    }
  }

  //le pasamos el mapa del controller
  showDropCategory(category) {
    //Limpiamos el contenedor
    this.DropDownCategory.empty();

    $('#selectEliminarCategoria').empty();

    //Mostramos el menú secundario de las Categorias
    for (const iterator of category.categoryKey) {
      this.DropDownCategory.append(`<li><a class="aCategory" value=${iterator.DataCategory.title}>${iterator.DataCategory.title}</a></li>`);

      $('#selectEliminarCategoria').append(`<option value=${iterator.DataCategory.title}>${iterator.DataCategory.title}</option>`)
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

  //show nueva ventana
  showNewWindowInfoProducts(data) {
    // this.tiendasContainer.empty();

    if (!(this.Ventana.has(data.key))) {

      let newWin = window.open("about:blank", `${data.key}`, "width=1500,height=900");
      //newWin.name = retorna data.key
      let producto = "";
      //Accedemos al producto recorriendo el iterador
      for (const category of data.categoria) {
        for (const product of category.DataProductsCat) {
          if (product.DataProduct.serialNumber == data.key) {
            producto = product.DataProduct; //Devolvemos el producto completo (comprobamos que coincide el serialNumber)
          }
        }
      }

      //Añadimos los css a la nueva ventana
      newWin.document.write(` <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  
    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  
    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">
    <body>`);

      if (producto instanceof Books) {
        //Si el producto es tipo Book mostramos su información única
        let book = (`
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
  </section>
  </body>`);
        //console.log(newWin.document.producto);
        newWin.document.body.insertAdjacentHTML('afterbegin', book);

      } else if (producto instanceof Movie) {
        //Si el producto es tipo Movie mostramos su información única
        newWin.document.write(`
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
        //Si el producto es tipo Music mostramos su información única
        newWin.document.write(`
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
            ${producto.description}<br>
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
      this.Ventana.set(data.key, newWin); //Añadimos al mapa la ventana creada para que no se vuelva a crear

    }
    this.Ventana.get(data.key).focus();// Recogemos la ventana asociada a la clave y la pone en primer plano ventana producto

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
      //Llama al controlador para que muestre el menú secundario de Categorias al pasar por encima
      handlerDropCategory();

    })
  }


  bindLoadDropDownStores(handlerDropStore) {

    $('#hStores').hover(function (event) {
      //Llama al controlador para que muestre el menú secundario de Stores al pasar por encima
      handlerDropStore();

    })
  }


  bindLoadStoreProducts(handlerStoreProducts) {
    //Añade los listener cuando se haya cargado la página, para que existan


    this.tiendasContainer.on('click', '.bStore', function (event) {
      //Recogemos el valor del atributo value del botón de productos(Contiene el Objecto Store)

      let tienda = $(this).attr('value'); //this button

      //Llamamos al controlador para que nos devuelva la información de los productos de esa tienda
      handlerStoreProducts(tienda);
    })



  }


  //Bind Stores menú secundario que muestre la tienda indicada
  bindLoadStoreProductsDropDown(handleStoreProducts) {

    //Los eventos .click solo funcionan con elementos estáticos de html
    //Para los dinámicos se hace con el on sobre el padre,delegando el evento a los hijos (DropDownStore > .aStore)
    this.DropDownStore.on('click', '.aStore', function (event) {
      //Recogemos el valor del atributo value del botón de productos

      let tienda = $(this).attr('value');

      //Llamamos al mismo controlador de StoreProducts para que al dar click redireccione a los productos de esa tienda
      //Enlazamos tanto el Drop Down y el Boton de la tienda al mismo sitio
      handleStoreProducts(tienda);
    })

  }


  //Información de los Productos
  bindLoadInfoProducts(handleInfoProducts) {
    //Al hacer click en el boton del producto,llama al controlador para recoger los datos del producto y pasarlos al show para que los muestre
    this.tiendasContainer.on('click', '#bProducts', function (event) {
      let serialNumber = $(this).attr('value'); //Recogemos el SerialNumber de Productos

      handleInfoProducts(serialNumber);
    })
  }


  //Mostramos todos los productos de la categoría seleccionada en el menú secundario
  bindLoadCategoryProducts(handleCategoryProducts) {
    //Al hacer click en la categoria,se guarda el value de la categoría
    this.DropDownCategory.on('click', '.aCategory', function (event) {

      let categoria = $(this).attr('value');

      handleCategoryProducts(categoria);
    })
  }

  //Bind para new Window
  bindNewWindow(handleNewWindow) {
    this.tiendasContainer.on('click', '#windowProducts', function (event) {

      let serialNumber = $(this).attr('value'); //Recogemos serial Number del Producto

      handleNewWindow(serialNumber);
    })
  }

  //Bind para Cerrar Ventanas
  bindCloseWindows() {
    $('#bVentanas').click((event) => {
      //Obtenemos los values del mapa que almacena las referencias de cada ventana
      for (const newWin of this.Ventana.values()) {
        newWin.close(); //Cerramos la ventana
      }
      this.Ventana.clear(); //Eliminamos todos los elementos del mapa una vez cerradas 
    })
  }

  //Videos validar formularios
  // https://www.youtube.com/watch?v=CYlNJpltjMM
  // https://www.youtube.com/watch?v=In0nB0ABaUk


  bindValidarNewStore(handleValidarNewStore) {
    this.tiendasContainer.on('input', '#fValidAddTienda', function (event) {
      // event.preventDefault();
      validoCif = false;
      validoName = false;
      validoAddress = false;
      validoPhone = false;
      validoCoords = false;
      validoPhotos = false;
      iCif = document.getElementById('iCif');
      iName = document.getElementById('iName');
      iAddress = document.getElementById('iAddress');
      iPhone = document.getElementById('iPhone');
      iCoords = document.getElementById('iCoords');
      iPhotos = document.getElementById('iPhotos');
      validarEntradasStore()

    })
    this.tiendasContainer.on('submit', '#fValidAddTienda', function (event) {
      console.log('click');
      if ((!validoCif) || (!validoName) || (!validoAddress) || (!validoPhone) || (!validoCoords) || (!validoPhotos)) {
        event.preventDefault(); //No deja lanzar el evento submit si es false
        event.stopPropagation();
      } else {

        event.preventDefault();
        event.stopPropagation();

        // this.setAttribute('data-bs-dismiss','modal');
        handleValidarNewStore(valorCif, valorName, valorAddress, valorPhone, valorCoords, validoPhotos);


      }
    })
  }


  bindValidarNewCategory(handleValidarNewCategory) {
    this.tiendasContainer.on('input', '#fValidAddCategoria', function (event) {
      // event.preventDefault();
      validoTitle = false;
      validoDescription = false;

      iTitle = document.getElementById('iTitle');
      iDescription = document.getElementById('iDescription');
      validarEntradasCategory()

    })
    this.tiendasContainer.on('submit', '#fValidAddCategoria', function (event) {
      console.log('click');
      if ((!validoTitle) || (!validoDescription)) {
        event.preventDefault(); //No deja lanzar el evento submit si es false
        event.stopPropagation();
      } else {

        event.preventDefault();
        event.stopPropagation();

        // this.setAttribute('data-bs-dismiss','modal');
        handleValidarNewCategory(valorTitle, valorDescription);


      }
    })
  }


  bindValidarNewProductBook(handleValidarNewProductBook) {
    this.tiendasContainer.on('input', '#fValidAddProductoBook', function (event) {
      // event.preventDefault();
      validoSerialNumber = false;
      validoNameProduct = false;
      validoDescriptionProduct = false;
      validoPrice = false;
      validoTax = false;
      validoImages = false;
      validoIsbn = false;
      validoAuthor = false;
      validoPages = false;

      iSerialNumber = document.getElementById('iSerialNumber');
      iNameProduct = document.getElementById('iNameProduct');
      iDescriptionProduct = document.getElementById('iDescriptionProduct');
      iPrice = document.getElementById('iPrice');
      iTax = document.getElementById('iTax');
      iImages = document.getElementById('iImages');
      iIsbn = document.getElementById('iIsbn');
      iAuthor = document.getElementById('iAuthor');
      iPages = document.getElementById('iPages');

      validarEntradasProductoBook()

    })
    this.tiendasContainer.on('submit', '#fValidAddProductoBook', function (event) {
      let tmpCategorias = [];
      iChecks = document.querySelectorAll('div.check input[name="CatCheck"]'); //Contiene todas las categorias
      if ((!validoSerialNumber) || (!validoNameProduct) || (!validoDescriptionProduct) || (!validoPrice) || (!validoTax) || (!validoImages) || (!validoIsbn) || (!validoAuthor) || (!validoPages)) {
        event.preventDefault(); //No deja lanzar el evento submit si es false
        event.stopPropagation();
      } else {

        for (const elemento of iChecks) {
          if (elemento.checked) {
            tmpCategorias.push(elemento.value);
          }

        }

        event.preventDefault();
        event.stopPropagation();

        // this.setAttribute('data-bs-dismiss','modal');
        handleValidarNewProductBook(valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorIsbn, valorAuthor, valorPages, tmpCategorias);


      }
    })
  }

  bindValidarNewProductMovie(handleValidarNewProductMovie) {
    this.tiendasContainer.on('input', '#fValidAddProductoMovie', function (event) {
      // event.preventDefault();
      validoSerialNumber = false;
      validoNameProduct = false;
      validoDescriptionProduct = false;
      validoPrice = false;
      validoTax = false;
      validoImages = false;
      validoDirector = false;
      validoYear = false;
      validoDuration = false;

      iSerialNumber = document.getElementById('iSerialNumber');
      iNameProduct = document.getElementById('iNameProduct');
      iDescriptionProduct = document.getElementById('iDescriptionProduct');
      iPrice = document.getElementById('iPrice');
      iTax = document.getElementById('iTax');
      iImages = document.getElementById('iImages');
      iDirector = document.getElementById('iDirector');
      iYear = document.getElementById('iYear');
      iDuration = document.getElementById('iDuration');

      validarEntradasProductoMovie()

    })
    this.tiendasContainer.on('submit', '#fValidAddProductoMovie', function (event) {
      let tmpCategorias = [];
      iChecks = document.querySelectorAll('div.check input[name="CatCheck"]'); //Contiene todas las categorias
      if ((!validoSerialNumber) || (!validoNameProduct) || (!validoDescriptionProduct) || (!validoPrice) || (!validoTax) || (!validoImages) || (!validoDirector) || (!validoYear) || (!validoDuration)) {
        event.preventDefault(); //No deja lanzar el evento submit si es false
        event.stopPropagation();
      } else {

        for (const elemento of iChecks) {
          if (elemento.checked) {
            tmpCategorias.push(elemento.value);
          }

        }

        event.preventDefault();
        event.stopPropagation();

        // this.setAttribute('data-bs-dismiss','modal');
        handleValidarNewProductMovie(valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorDirector, valorYear, valorDuration, tmpCategorias);


      }
    })
  }

  bindValidarNewProductMusic(handleValidarNewProductMusic) {
    this.tiendasContainer.on('input', '#fValidAddProductoMusic', function (event) {
      // event.preventDefault();
      validoSerialNumber = false;
      validoNameProduct = false;
      validoDescriptionProduct = false;
      validoPrice = false;
      validoTax = false;
      validoImages = false;
      validoSinger = false;
      validoMusicalGenre = false;
      validoSongsNumber = false;

      iSerialNumber = document.getElementById('iSerialNumber');
      iNameProduct = document.getElementById('iNameProduct');
      iDescriptionProduct = document.getElementById('iDescriptionProduct');
      iPrice = document.getElementById('iPrice');
      iTax = document.getElementById('iTax');
      iImages = document.getElementById('iImages');
      iSinger = document.getElementById('iSinger');
      iMusicalGenre = document.getElementById('iMusicalGenre');
      iSongsNumber = document.getElementById('iSongsNumber');


      validarEntradasProductoMusic()

    })
    this.tiendasContainer.on('submit', '#fValidAddProductoMusic', function (event) {
      let tmpCategorias = [];
      iChecks = document.querySelectorAll('div.check input[name="CatCheck"]'); //Contiene todas las categorias
      if ((!validoSerialNumber) || (!validoNameProduct) || (!validoDescriptionProduct) || (!validoPrice) || (!validoTax) || (!validoImages) || (!validoSinger) || (!validoMusicalGenre) || (!validoSongsNumber)) {
        event.preventDefault(); //No deja lanzar el evento submit si es false
        event.stopPropagation();
      } else {

        for (const elemento of iChecks) {
          if (elemento.checked) {
            tmpCategorias.push(elemento.value);
          }

        }

        event.preventDefault();
        event.stopPropagation();


        handleValidarNewProductMusic(valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorSinger, valorMusicalGenre, valorSongsNumber, tmpCategorias);


      }
    })
  }

  bindValidarLogin(handleValidarLogin){
    this.tiendasContainer.on('input', '#fValidLogin', function (event) {
      // event.preventDefault();
      validoUsuario = false;
      validoPassword = false;
     
  
      iUsuario = document.getElementById('iUsuario');
      iPassword = document.getElementById('iPassword');
      
  
  
      validarEntradasLogin()
  
    })
    this.tiendasContainer.on('submit', '#fValidLogin', function (event) {
      
      if ((!validoUsuario) || (!validoPassword) ) {
        event.preventDefault(); //No deja lanzar el evento submit si es false
        event.stopPropagation();
      } else {
  
        event.preventDefault();
        event.stopPropagation();
  
  
        handleValidarLogin(valorUsuario, valorPassword);
  
  
      }
    })
  }

}



//Validaciones


//Formulario AddTienda

function validarEntradasStore() {
  valorCif = iCif.value;
  valorName = iName.value;
  valorAddress = iAddress.value;
  valorPhone = iPhone.value;
  valorCoords = iCoords.value;
  valorPhotos = iPhotos.value;

  if (!valorCif) {
    mensajeError(iCif, 'El Cif está vacío');
    validoCif = false;
  } else if (!(/([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/g.test(valorCif))) {
    //B25165028 ej Cif
    mensajeError(iCif, 'El Cif no es correcto');
    validoCif = false;
  } else {
    mensajeCorrecto(iCif, 'Correcto');
    validoCif = true;
  }

  if (!valorName) {
    mensajeError(iName, 'El Nombre está vacío');
    validoName = false;
  } else {
    mensajeCorrecto(iName, 'Correcto');
    validoName = true;
  }
  if (!valorAddress) {
    mensajeError(iAddress, 'La dirección está vacía');
    validoAddress = false;
  } else {
    mensajeCorrecto(iAddress, 'Correcto');
    validoAddress = true;
  }
  if (!valorPhone) {
    mensajeError(iPhone, 'El teléfono está vacío');
    validoPhone = false;
  } else {
    mensajeCorrecto(iPhone, 'Correcto');
    validoPhone = true;
  }

  if (!valorCoords) {
    mensajeError(iCoords, 'Las coordenadas están vacíos');
    validoCoords = false;
  } else {
    mensajeCorrecto(iCoords, 'Correcto');
    validoCoords = true;
  }
  if (!valorPhotos) {
    mensajeError(iPhotos, 'Las fotos están vacías');
    validoPhotos = false;
  } else if (!(/(\.jpg|\.jpeg|\.png)$/i.test(valorPhotos))) {
    mensajeError(iPhotos, 'La foto no es válida');
    validoPhotos = false;
  } else {
    mensajeCorrecto(iPhotos, 'Correcto');
    validoPhotos = true;
  }
}
//Validar Formulario Add Category
function validarEntradasCategory() {
  valorTitle = iTitle.value;
  valorDescription = iDescription.value;

  if (!valorTitle) {
    mensajeError(iTitle, 'El Título está vacío');
    validoTitle = false;
  } else {
    mensajeCorrecto(iTitle, 'Correcto');
    validoTitle = true;
  }

  if (!valorDescription) {
    mensajeError(iDescription, 'La Descripción está vacía');
    validoDescription = false;
  } else {
    mensajeCorrecto(iDescription, 'Correcto');
    validoDescription = true;
  }

}

//Validar Formulario Add Product Book

function validarEntradasProductoBook() {
  valorSerialNumber = iSerialNumber.value;
  valorNameProduct = iNameProduct.value;
  valorDescriptionProduct = iDescriptionProduct.value;
  valorPrice = iPrice.value;
  valorTax = iTax.value;
  valorImages = iImages.value;
  valorIsbn = iIsbn.value;
  valorAuthor = iAuthor.value;
  valorPages = iPages.value;

  if (!valorSerialNumber) {
    mensajeError(iSerialNumber, 'El SerialNumber está vacío');
    validoSerialNumber = false;
  } else {
    mensajeCorrecto(iSerialNumber, 'Correcto');
    validoSerialNumber = true;
  }

  if (!valorNameProduct) {
    mensajeError(iNameProduct, 'El Nombre está vacío');
    validoNameProduct = false;
  } else {
    mensajeCorrecto(iNameProduct, 'Correcto');
    validoNameProduct = true;
  }
  if (!valorDescriptionProduct) {
    mensajeError(iDescriptionProduct, 'La descripción está vacía');
    validoDescriptionProduct = false;
  } else {
    mensajeCorrecto(iDescriptionProduct, 'Correcto');
    validoDescriptionProduct = true;
  }
  if (!valorPrice) {
    mensajeError(iPrice, 'El precio está vacío');
    validoPrice = false;
  } else {
    mensajeCorrecto(iPrice, 'Correcto');
    validoPrice = true;
  }

  if (!valorTax) {
    mensajeError(iTax, 'El Tax está vacío');
    validoTax = false;
  } else {
    mensajeCorrecto(iTax, 'Correcto');
    validoTax = true;
  }
  if (!valorImages) {
    mensajeError(iImages, 'Las fotos están vacías');
    validoImages = false;
  } else if (!(/(\.jpg|\.jpeg|\.png)$/i.test(valorImages))) {
    mensajeError(iImages, 'La foto no es válida');
    validoImages = false;
  } else {
    mensajeCorrecto(iImages, 'Correcto');
    validoImages = true;
  }
  if (!valorIsbn) {
    mensajeError(iIsbn, 'El ISBN está vacío'); //AÑADIR REGEx
    validoIsbn = false;
  } else {
    mensajeCorrecto(iIsbn, 'Correcto');
    validoIsbn = true;
  }
  if (!valorAuthor) {
    mensajeError(iAuthor, 'El Autor está vacío');
    validoAuthor = false;
  } else {
    mensajeCorrecto(iAuthor, 'Correcto');
    validoAuthor = true;
  }
  if (!valorPages) {
    mensajeError(iPages, 'No hay páginas');
    validoPages = false;
  } else {
    mensajeCorrecto(iPages, 'Correcto');
    validoPages = true;
  }
}

//Validar Formulario Add Product Movie

function validarEntradasProductoMovie() {
  valorSerialNumber = iSerialNumber.value;
  valorNameProduct = iNameProduct.value;
  valorDescriptionProduct = iDescriptionProduct.value;
  valorPrice = iPrice.value;
  valorTax = iTax.value;
  valorImages = iImages.value;
  valorDirector = iDirector.value;
  valorYear = iYear.value;
  valorDuration = iDuration.value;

  if (!valorSerialNumber) {
    mensajeError(iSerialNumber, 'El SerialNumber está vacío');
    validoSerialNumber = false;
  } else {
    mensajeCorrecto(iSerialNumber, 'Correcto');
    validoSerialNumber = true;
  }

  if (!valorNameProduct) {
    mensajeError(iNameProduct, 'El Nombre está vacío');
    validoNameProduct = false;
  } else {
    mensajeCorrecto(iNameProduct, 'Correcto');
    validoNameProduct = true;
  }
  if (!valorDescriptionProduct) {
    mensajeError(iDescriptionProduct, 'La descripción está vacía');
    validoDescriptionProduct = false;
  } else {
    mensajeCorrecto(iDescriptionProduct, 'Correcto');
    validoDescriptionProduct = true;
  }
  if (!valorPrice) {
    mensajeError(iPrice, 'El precio está vacío');
    validoPrice = false;
  } else {
    mensajeCorrecto(iPrice, 'Correcto');
    validoPrice = true;
  }

  if (!valorTax) {
    mensajeError(iTax, 'El Tax está vacío');
    validoTax = false;
  } else {
    mensajeCorrecto(iTax, 'Correcto');
    validoTax = true;
  }
  if (!valorImages) {
    mensajeError(iImages, 'Las fotos están vacías');
    validoImages = false;
  } else if (!(/(\.jpg|\.jpeg|\.png)$/i.test(valorImages))) {
    mensajeError(iImages, 'La foto no es válida');
    validoImages = false;
  } else {
    mensajeCorrecto(iImages, 'Correcto');
    validoImages = true;
  }
  if (!valorDirector) {
    mensajeError(iDirector, 'El Director está vacío');
    validoDirector = false;
  } else {
    mensajeCorrecto(iDirector, 'Correcto');
    validoDirector = true;
  }
  if (!valorYear) {
    mensajeError(iYear, 'El Año está vacío');
    validoYear = false;
  } else {
    mensajeCorrecto(iYear, 'Correcto');
    validoYear = true;
  }
  if (!valorDuration) {
    mensajeError(iDuration, 'No tiene duración');
    validoDuration = false;
  } else {
    mensajeCorrecto(iDuration, 'Correcto');
    validoDuration = true;
  }
}


//Validar Formulario Add Product Music

function validarEntradasProductoMusic() {
  valorSerialNumber = iSerialNumber.value;
  valorNameProduct = iNameProduct.value;
  valorDescriptionProduct = iDescriptionProduct.value;
  valorPrice = iPrice.value;
  valorTax = iTax.value;
  valorImages = iImages.value;
  valorSinger = iSinger.value;
  valorMusicalGenre = iMusicalGenre.value;
  valorSongsNumber = iSongsNumber.value;

  if (!valorSerialNumber) {
    mensajeError(iSerialNumber, 'El SerialNumber está vacío');
    validoSerialNumber = false;
  } else {
    mensajeCorrecto(iSerialNumber, 'Correcto');
    validoSerialNumber = true;
  }

  if (!valorNameProduct) {
    mensajeError(iNameProduct, 'El Nombre está vacío');
    validoNameProduct = false;
  } else {
    mensajeCorrecto(iNameProduct, 'Correcto');
    validoNameProduct = true;
  }
  if (!valorDescriptionProduct) {
    mensajeError(iDescriptionProduct, 'La descripción está vacía');
    validoDescriptionProduct = false;
  } else {
    mensajeCorrecto(iDescriptionProduct, 'Correcto');
    validoDescriptionProduct = true;
  }
  if (!valorPrice) {
    mensajeError(iPrice, 'El precio está vacío');
    validoPrice = false;
  } else {
    mensajeCorrecto(iPrice, 'Correcto');
    validoPrice = true;
  }

  if (!valorTax) {
    mensajeError(iTax, 'El Tax está vacío');
    validoTax = false;
  } else {
    mensajeCorrecto(iTax, 'Correcto');
    validoTax = true;
  }
  if (!valorImages) {
    mensajeError(iImages, 'Las fotos están vacías');
    validoImages = false;
  } else if (!(/(\.jpg|\.jpeg|\.png)$/i.test(valorImages))) {
    mensajeError(iImages, 'La foto no es válida');
    validoImages = false;
  } else {
    mensajeCorrecto(iImages, 'Correcto');
    validoImages = true;
  }
  if (!valorSinger) {
    mensajeError(iSinger, 'El cantante está vacío');
    validoSinger = false;
  } else {
    mensajeCorrecto(iSinger, 'Correcto');
    validoSinger = true;
  }
  if (!valorMusicalGenre) {
    mensajeError(iMusicalGenre, 'El Género Musical está vacío');
    validoMusicalGenre = false;
  } else {
    mensajeCorrecto(iMusicalGenre, 'Correcto');
    validoMusicalGenre = true;
  }
  if (!valorSongsNumber) {
    mensajeError(iSongsNumber, 'No hay Nº de canciones');
    validoSongsNumber = false;
  } else {
    mensajeCorrecto(iSongsNumber, 'Correcto');
    validoSongsNumber = true;
  }
}

//Validar Formulario Loginy
function validarEntradasLogin() {
  valorUsuario = iUsuario.value;
  valorPassword = iPassword.value;

  if (!valorUsuario) {
    mensajeError(iUsuario, 'El Usuario está vacío');
    validoUsuario = false;
  } else {
    mensajeCorrecto(iUsuario, 'Correcto');
    validoUsuario = true;
  }

  if (!valorPassword) {
    mensajeError(iPassword, 'La Contraseña está vacía');
    validoPassword = false;
  } else {
    mensajeCorrecto(iPassword, 'Correcto');
    validoPassword = true;
  }

}



function mensajeError(input, mensaje) {
  let contenedorInput = input.parentElement; //Recoge el contenedor del input
  let msg = contenedorInput.querySelector('.msg');
  msg.innerText = mensaje;
  input.classList.add('invalido');
  input.classList.remove('valido');
}

function mensajeCorrecto(input, mensaje) {
  let contenedorInput = input.parentElement; //Recoge el contenedor del input
  let msg = contenedorInput.querySelector('.msg');
  msg.innerText = mensaje;
  input.classList.add('valido');
  input.classList.remove('invalido');
}


export default View;