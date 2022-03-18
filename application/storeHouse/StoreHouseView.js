"use strict";

import { Books, Movie, Music } from "./StoreHouseModel.js";

//Variables form AddTienda
let formAddTienda = document.getElementById('fValidAddTienda');
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


class View {
  constructor() {
    //Declaramos los selectores de los elementos de html que necesitamos modificar
    this.tiendasContainer = $("#tiendasContainer");
    this.DropDownCategory = $("#DropDownCategory");
    this.DropDownStore = $("#DropDownStores");
    this.Ventana = new Map(); //Guardamos como clave el data.key y como valor el newWin
    console.log(formAddTienda);

  }



  //Cargarmos las tiendas en inicio (es el init,lo que carga al inicio)
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
    //Mostramos el menú secundario de las Categorias
    for (const iterator of category.categoryKey) {
      this.DropDownCategory.append(`<li><a class="aCategory" value=${iterator.DataCategory.title}>${iterator.DataCategory.title}</a></li>`);
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
    $(document).ready(function (event) {

      $('.bStore').click(function (event) {
        //Recogemos el valor del atributo value del botón de productos(Contiene el Objecto Store)

        let tienda = $(this).attr('value'); //this button

        //Llamamos al controlador para que nos devuelva la información de los productos de esa tienda
        handlerStoreProducts(tienda);
      })

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

  bindValidarNewStore(handleValidarNewStore) {
    formAddTienda.addEventListener('submit', function (event) {
      console.log('click');
      if ((!validoCif) || (!validoName) || (!validoAddress) || (!validoPhone) || (!validoCoords) || (!validoPhotos)) {
        event.preventDefault(); //No deja lanzar el evento submit si es false
        event.stopPropagation();
      } else {

        event.preventDefault();
        event.stopPropagation();
        
       // this.setAttribute('data-bs-dismiss','modal');
        handleValidarNewStore(valorCif, valorName, valorAddress, valorPhone, valorCoords, validoPhotos);

        let myModal = bootstrap.Modal.getInstance(
          document.getElementById("ModalAddTienda")
        );
        //remove static backdrop
        myModal.setAttribute("data-bs-backdrop", "false");
        //destroy modal
        myModal.dispose()
      }
    })
  }

}

//Validaciones


  //Formulario AddTienda

  formAddTienda.addEventListener('input', function (event) {
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