"use strict";

import StoreHouse from "./StoreHouseModel.js";
import { EmptyValueException, InvalidValueException, BaseException, InvalidValueObjectException, ObjectTypeException, ObjectExistException, ObjectNotExistException } from "./StoreHouseModel.js";
import { Store } from "./StoreHouseModel.js";
import { Coords } from "./StoreHouseModel.js";
import { Product } from "./StoreHouseModel.js";
import { Books } from "./StoreHouseModel.js";
import { Music } from "./StoreHouseModel.js";
import { Movie } from "./StoreHouseModel.js";
import { Category } from "./StoreHouseModel.js";


async function fetchData (url) { 
    const response=await fetch(url);
    //Retorna una promesa sin el await
    //el await para el código hasta que recibe todos los datos

    return response.json(); 
 }

 //Más modular
const DATA =await fetchData("/application/entities/datos.json")

class Controller {
    #model;
    #view;

    #cargaDatos() {
        console.log({DATA})
        let ArrayCategorias;
        let ArrayBooks;
        let ArrayMovie;
        let ArrayMusic;
        let ArrayTiendas;

       //Realizamos respuesta a la petición realizada
    //Devolvemos el objeto promise

       //ruta Xampp /UT04_3-TrabajoObjetosES6/application/entities/datos.json
        

            ArrayTiendas = DATA.tiendas;
            ArrayTiendas.forEach(elem => {
                console.log(elem)
                let tienda = new Store(elem.cif, elem.name, elem.address, elem.phone, new Coords(elem.coords.latitude, elem.coords.longitude), elem.photos);
                this.#model.addShop(tienda);
            });
            ArrayCategorias = DATA.categorias;
            ArrayCategorias.forEach(elem => {
                let categoria = new Category(elem.title, elem.description);
                this.#model.addCategory(categoria);
            });



            ArrayBooks = DATA.productos.Books;
            ArrayBooks.forEach(elem => {
                let book = new Books(elem.serialNumber, elem.name, elem.description, elem.price, elem.tax, elem.images, elem.isbn, elem.author, elem.pages);

                for (const cat of this.#model.category) {
                    if (cat.DataCategory.title == elem.cat) {
                        this.#model.addProduct(book, cat.DataCategory)

                    }
                }

                for (const tienda of this.#model.stores) {
                    if (tienda.DataStore.cif == elem.cif) {
                        this.#model.addProductInShop(book, tienda.DataStore)
                    }

                }
            })

            ArrayMovie = DATA.productos.Movie;
            ArrayMovie.forEach(elem => {
                let movie = new Movie(elem.serialNumber, elem.name, elem.description, elem.price, elem.tax, elem.images, elem.director, elem.year, elem.duration);
                for (const cat of this.#model.category) {
                    if (cat.DataCategory.title == elem.cat) {
                        this.#model.addProduct(movie, cat.DataCategory)

                    }
                }

                for (const tienda of this.#model.stores) {
                    if (tienda.DataStore.cif == elem.cif) {
                        this.#model.addProductInShop(movie, tienda.DataStore)
                    }

                }
            })

            ArrayMusic = DATA.productos.Music;
            ArrayMusic.forEach(elem => {
                let music = new Music(elem.serialNumber, elem.name, elem.description, elem.price, elem.tax, elem.images, elem.singer, elem.musicalGenre, elem.songsNumber);
                for (const cat of this.#model.category) {
                    if (cat.DataCategory.title == elem.cat) {
                        this.#model.addProduct(music, cat.DataCategory)

                    }
                }

                for (const tienda of this.#model.stores) {
                    if (tienda.DataStore.cif == elem.cif) {
                        this.#model.addProductInShop(music, tienda.DataStore)
                    }

                }
            })

        


        //https://es.stackoverflow.com/questions/124042/acceder-a-json-de-respuesta-en-ajax


        // //Creamos Categorías
        // let CatSFMovie = new Category('Sciencie-Fiction-Movie', 'Ciencia Ficción');
        // let CatTMovie = new Category('Terror-Movie', 'Películas de Miedo');
        // let CatCMovie = new Category('Comedy-Movie', 'Películas de Comedia');
        // let CatRMusic = new Category('Rock', 'Variedad de Música Rock (Álbum)');
        // let CatCMusic = new Category('Classic-Music', 'Música Clásica (Álbum)');
        // let CatPMusic = new Category('Pop-Music', 'Música Pop (Álbum)');
        // let CatMBooks = new Category('Mangas', 'Libros Tipo Mangas');
        // let CatCBooks = new Category('Comics', 'Libros Tipo Comic');
        // let CatDBooks = new Category('Default-Book', 'Libros por Defecto');


        // //Creamos Productos
        // let ProdBook1 = new Books(111, 'El Señor de los Anillos', 'Resumen', '20$', '21%', ["../../html/assets/img/products/elSeñorDeLosAnillos.jpg"], '756-3-16-198710-0', 'J. R. R. Tolkien', 600);
        // let ProdBook2 = new Books(222, 'Los Pilares de la Tierra', 'Resumen', '22$', '21%', ["../../html/assets/img/products/pilaresTierra.jpg"], '879-3-16-198710-0', 'Ken Follett', 700);
        // let ProdManga1 = new Books(666, 'Jujutsu Kaisen', 'Resumen', '8$', '21%', ["../../html/assets/img/products/Jujutsu_kaisen.jpg"], '978-3-16-198710-0', 'Gege Akutami', 500)
        // let ProdManga2 = new Books(777, 'Ataque a los Titanes', 'Resumen', '8$', '21%', ["../../html/assets/img/products/attackontitan.png"], '178-3-16-148510-0', 'Hajime Isayama', 100)
        // let ProdManga3 = new Books(888, 'Demon Slayer', 'Resumen', '8$', '21%', ["../../html/assets/img/products/demonSlayer.jpg"], '378-3-16-116410-0', 'Koyoharu Gotouge', 110)
        // let ProdComic1 = new Books(999, 'SpiderMan', 'Resumen', '7$', '21%', ["../../html/assets/img/products/spiderman.jpg"], '487-3-16-116410-0', 'Marvel Comics', 120)
        // let ProdComic2 = new Books(123, 'X-Men', 'Resumen', '6$', '21%', ["../../html/assets/img/products/xmen.jpg"], '521-3-16-116410-0', 'Marvel Comics', 80)

        // let ProdMusic1 = new Music(333, 'AM', 'Álbum', '10$', '21%', ["../../html/assets/img/products/arcticMonkeys.jpg"], 'Artic Monkeys', 'Rock', 8)
        // let ProdMusic2 = new Music(444, 'La Novena Sinfonía', 'Álbum', '8$', '21%', ["../../html/assets/img/products/novenaSinfonia.jpg"], 'Beethoven', 'Classical', 10)
        // let ProdMusic3 = new Music(555, 'Happier Than Ever', 'Álbum', '12$', '21%', ["../../html/assets/img/products/happierThanEver.jpg"], 'Billie Eilish', 'Pop', 6)


        // let ProdTMovie = new Movie(456, 'IT', 'Resumen Terror', '18$', '21%', ["../../html/assets/img/products/it.jpg"], 'Andrés Muschietti', '2017', '2h 15min')
        // let ProdCMovie = new Movie(789, 'DeadPool', 'Resumen Comedia', '20$', '21%', ["../../html/assets/img/products/deadpool.jpg"], 'Tim Miller', '2016', '1h 48min')
        // let ProdSFMovie = new Movie(213, 'Star Wars', 'Guerra de las Galaxias', '12$', '21%', ["../../html/assets/img/products/starWars.jpeg"], 'George Lucas', '1980', '2h 50min')
        // let ProdSF2Movie = new Movie(435, 'Harry Potter y el prisionero de Azkaban', 'Cosas mágicas', '20$', '21%', ["../../html/assets/img/products/harrypotter.jpg"], 'Alfonso Cuarón', '2004', '2h 19min');
        // let ProdSF3Movie = new Movie(678, 'Avatar', 'Resumen Ciencia Ficción', '17$', '21%', ["../../html/assets/img/products/avatar.png"], 'James Cameron', '2007', '2h 49min');

        // //Creamos Tiendas (Stores)

        // let StoreCorteIngles = new Store('200', 'Corte Inglés', 'Gran Vía', '789456123', new Coords(2, 2), ["../../html/assets/img/el-corte-ingles-logo.jpg"]);
        // let StoreSerendipia = new Store('300', 'Serendipia', 'Calle Altagracia', '989456123', new Coords(3, 3), ["../../html/assets/img/Serendipia.jpg"]);
        // let StoreFnac = new Store('400', 'Fnac', 'Gran Vía', '657456123', new Coords(4, 4), ["../../html/assets/img/fnac.jpg"]);


        // try {

        //     this.#model.addCategory(CatSFMovie);
        //     this.#model.addCategory(CatCMovie);
        //     this.#model.addCategory(CatMBooks);
        //     this.#model.addCategory(CatTMovie);
        //     this.#model.addCategory(CatDBooks);
        //     this.#model.addCategory(CatCBooks);
        //     this.#model.addCategory(CatPMusic);
        //     this.#model.addCategory(CatRMusic);
        //     this.#model.addCategory(CatCMusic)
        // } catch (error) {
        //     console.error(error);
        // }


        // try {

        //     this.#model.addProduct(ProdManga1, CatMBooks);
        //     this.#model.addProduct(ProdManga2, CatMBooks);
        //     this.#model.addProduct(ProdManga3, CatMBooks);

        //     this.#model.addProduct(ProdBook1, CatDBooks);
        //     this.#model.addProduct(ProdBook2, CatDBooks);
        //     this.#model.addProduct(ProdComic1, CatCBooks);
        //     this.#model.addProduct(ProdComic2, CatCBooks);

        //     this.#model.addProduct(ProdCMovie, CatCMovie);
        //     this.#model.addProduct(ProdSF2Movie, CatSFMovie);
        //     this.#model.addProduct(ProdSF3Movie, CatSFMovie)
        //     this.#model.addProduct(ProdTMovie, CatTMovie);
        //     this.#model.addProduct(ProdSFMovie, CatSFMovie);

        //     this.#model.addProduct(ProdMusic1, CatRMusic);
        //     this.#model.addProduct(ProdMusic2, CatCMusic);
        //     this.#model.addProduct(ProdMusic3, CatPMusic);
        // } catch (error) {
        //     console.error(error)
        // }


        // try {

        //     this.#model.addShop(StoreFnac);
        //     this.#model.addShop(StoreCorteIngles);
        //     this.#model.addShop(StoreSerendipia);
        // } catch (error) {
        //     console.log(error)
        // }
        // //Añadimos Productos a Stores
        // try {

        //     this.#model.addProductInShop(ProdManga1, StoreFnac, 2);
        //     this.#model.addProductInShop(ProdManga3, StoreFnac, 3);
        //     this.#model.addProductInShop(ProdComic2, StoreCorteIngles, 4);
        //     this.#model.addProductInShop(ProdMusic3, StoreCorteIngles, 5);
        //     this.#model.addProductInShop(ProdSF2Movie, StoreCorteIngles, 1);
        //     this.#model.addProductInShop(ProdMusic1, StoreFnac, 3);
        //     this.#model.addProductInShop(ProdCMovie, StoreFnac, 1);
        //     this.#model.addProductInShop(ProdSFMovie, StoreFnac, 1);
        //     this.#model.addProductInShop(ProdBook2, StoreSerendipia, 3);
        //     this.#model.addProductInShop(ProdBook1, StoreSerendipia, 2);
        //     this.#model.addProductInShop(ProdManga2, StoreSerendipia, 1)
        // } catch (error) {

        // }

        // //Añadimos Cantidad de Productos en Stores
        // try {

        //     this.#model.addQuantityProductInShop(ProdBook1, StoreSerendipia, 3);
        //     this.#model.addQuantityProductInShop(ProdManga2, StoreSerendipia, 10);
        //     this.#model.addQuantityProductInShop(ProdManga3, StoreFnac, 10);
        //     this.#model.addQuantityProductInShop(ProdManga1, StoreFnac, 8);
        //     this.#model.addQuantityProductInShop(ProdMusic1, StoreFnac, 2);
        //     this.#model.addQuantityProductInShop(ProdCMovie, StoreFnac, 5);
        //     this.#model.addQuantityProductInShop(ProdComic2, StoreCorteIngles, 4);
        //     this.#model.addQuantityProductInShop(ProdMusic3, StoreCorteIngles, 12);
        // } catch (error) {
        //     console.log(error)
        // }
    }


    constructor(newModel, newView) {
        this.#model = newModel;
        this.#view = newView;
        this.onLoad();

            this.#view.bindLoadStores(this.handleLoadStores); //Pasamos como manejarlo (el objeto)
            this.#view.bindLoadDropDownCategory(this.handleDropCategory);
            this.#view.bindLoadDropDownStores(this.handleDropStore);
            this.#view.bindLoadStoreProducts(this.handleStoreProducts);
            this.#view.bindLoadStoreProductsDropDown(this.handleStoreProducts);
            this.#view.bindLoadInfoProducts(this.handleInfoProducts);
            this.#view.bindLoadCategoryProducts(this.handleCategoryProducts);
            this.#view.bindNewWindow(this.handleNewWindow);
            this.#view.bindCloseWindows();//No tiene handle
            this.#view.bindValidarNewStore(this.handleValidarNewStore);
            this.#view.bindFormAddStores(this.handleFormAddStores);
            this.#view.bindFormRemoveStores(this.handleFormRemoveStores);
            this.#view.bindButtonRemoveStore(this.handleButtonRemoveStore);
            this.#view.bindFormAddCategory(this.handleFormAddCategory);
            this.#view.bindValidarNewCategory(this.handleValidarNewCategory);
            this.#view.bindFormRemoveCategory(this.handleFormRemoveCategory);
            this.#view.bindButtonRemoveCategory(this.handleButtonRemoveCategory);
            this.#view.bindFormRemoveProduct(this.handleFormRemoveProduct);
            this.#view.bindButtonRemoveProduct(this.handleButtonRemoveProduct);
            this.#view.bindFormAddProductBook(this.handleFormAddProductBook);
            this.#view.bindValidarNewProductBook(this.handleValidarNewProductBook);
            this.#view.bindFormAddProductMovie(this.handleFormAddProductMovie);
            this.#view.bindValidarNewProductMovie(this.handleValidarNewProductMovie);
            this.#view.bindFormAddProductMusic(this.handleFormAddProductMusic);
            this.#view.bindValidarNewProductMusic(this.handleValidarNewProductMusic);
            this.#view.bindStockShowStores(this.handleStockShowStores);
            this.#view.bindButtonMostrarStock(this.handleButtonMostrarStock);
            this.#view.bindButtonEliminarStock(this.handleButtonEliminarStock);
            this.#view.bindShowLogin(this.handleShowLogin);
            this.#view.bindValidarLogin(this.handleValidarLogin);
            this.#view.bindDesconectar(this.handleDesconectar);
            this.#view.bindShowInfoStoreHouse(this.handleShowInfoStoreHouse);
            this.#view.bindFav(this.handleFav);
            this.#view.bindShowFav(this.handleShowFav);
        



        // this.onInit();
        // this.#view.bindInit(this.handleInit);
    }


    // handleInit = () => {

    //     this.onInit();
    // }

    // onInit = () => {

    //     this.#view.init();
    // }


    onLoad = () => {

        let botonInicioSesion = document.getElementById('Login');
        let botonDesconectar = document.getElementById('Desconectar');
        let usuario = this.getCookie('usuario');
        let password = this.getCookie('password');

        if ((usuario == 'admin') && (password == 'admin')) {

            botonDesconectar.style.display = "inline-block";
            botonInicioSesion.style.display = "none";


            alert("Hola de nuevo Admin");
        } else {
            botonDesconectar.style.display = "none";
            botonInicioSesion.style.display = "inline-block";
        }
        //Carga todos los Objetos
        this.#cargaDatos();


    }


    //Maneja los eventos
    handleLoadStores = () => {
        //Simulamos peticion a base de datos,retornando JSON
        let map = {
            //Devolvemos stores a través de su iterador
            storeKey: this.#model.stores,
        }

        this.#view.showLoadStores(map)
    }


    handleDropCategory = () => {
        //Simulamos peticion a base de datos,retornando JSON
        let map = {
            categoryKey: this.#model.category,
        }
        this.#view.showDropCategory(map)
    }


    handleDropStore = () => {
        //Simulamos peticion a base de datos,retornando JSON
        let map = {
            storeKey: this.#model.stores,
        }
        this.#view.showDropStores(map)
    }


    //Modificamos para mostrar productos por categorias
    handleStoreProducts = (tienda) => {
        //Le pasamos la tienda para utilizarla en el generador
        let data = {
            //La tienda contiene el cif,que se lo pasamos al generador
            tienda: this.#model.getShopProducts(tienda),
            tienda2: this.#model.getShopProducts(tienda),
            //El generador devuelve la categoría

        }
        //Enlazamos tanto el Drop Down y el Boton de la tienda al mismo sitio
        this.#view.showStoreProducts(data)
    }


    // handleStoreProductsDropDown = (tienda) => {
    //     let data = {
    //         tienda: this.#model.getShopProducts(tienda),

    //      }
    //      this.#view.showStoreProducts(data)
    // }
    //Devuelve la información del producto


    handleInfoProducts = (serialNumber) => {
        let data = {
            //Accedemos al iterador de category y guardamos el serialNumber del Producto
            categoria: this.#model.category,
            key: serialNumber,
        }
        //Devolvemos el JSON para mostrar la información de productos en pantalla
        this.#view.showInfoProducts(data)
    }


    handleCategoryProducts = (categoria) => {

        let data = {
            categoria: this.#model.getCategoryProducts(categoria),

        }
        //Devolvemos la información de la categoría
        this.#view.showCategoryProducts(data)
    }

    //Pasamos los mismos datos que pasamos al main, pero a la nueva Ventana
    handleNewWindow = (serialNumber) => {
        let data = {
            categoria: this.#model.category,
            key: serialNumber,
        }
        this.#view.showNewWindowInfoProducts(data)
    }

    handleValidarNewStore = (valorCif, valorName, valorAddress, valorPhone, valorCoords, valorPhotos) => {

        let inst = new Store(valorCif, valorName, valorAddress, valorPhone, valorCoords, valorPhotos);
        this.#model.addShop(inst);

        this.refrescar(); //Recargamos la página de nuevo para que muestra la tienda nueva

    }

    refrescar = () => {
        let map = {
            //Devolvemos stores a través de su iterador
            storeKey: this.#model.stores,
        }
        this.#view.showLoadStores(map)
    }

    handleFormAddStores = () => {
        this.#view.showFormAddStores();
    }

    handleFormRemoveStores = () => {
        this.refrescar();
    }

    handleButtonRemoveStore = (cif) => {


        for (const tienda of this.#model.stores) {
            if (tienda.DataStore.cif == cif) {
                this.#model.removeShop(tienda.DataStore); //Le pasamos todo el objeto de tienda para que se elimine
            }
        }
        this.refrescar();

    }
    handleFormAddCategory = () => {
        this.#view.showFormAddCategory();
    }

    handleValidarNewCategory = (valorTitle, valorDescription) => {
        let inst = new Category(valorTitle, valorDescription);
        this.#model.addCategory(inst);

        this.refrescar();
    }

    handleFormRemoveCategory = () => {
        let map = {
            categoryKey: this.#model.category,
        }
        this.#view.showDropCategory(map)
    }

    handleButtonRemoveCategory = (title) => {
        for (const categoria of this.#model.category) {
            if (categoria.DataCategory.title == title) {
                console.log(categoria.DataCategory)
                this.#model.removeCategory(categoria.DataCategory); //Le pasamos todo el objeto de tienda para que se elimine
            }
        }
        let map = {
            categoryKey: this.#model.category,
        }
        this.#view.showDropCategory(map)
    }
    //Cargamos los productos
    handleFormRemoveProduct = () => {
        let tmpProductos = [];
        for (const categoria of this.#model.category) {
            for (const producto of categoria.DataProductsCat) {
                tmpProductos.push(producto); //Añadimos todos los productos de todas las categorias
            }
        }
        this.#view.showDropDownProducts(tmpProductos);
    }
    //Eliminamos producto seleccionado
    handleButtonRemoveProduct = (serialNumber) => {
        let tmp;
        for (const categoria of this.#model.category) {
            for (const producto of categoria.DataProductsCat) {
                if (producto.DataProduct.serialNumber == serialNumber) {
                    console.log(producto.DataProduct)
                    tmp = producto.DataProduct;


                }
            }
        }
        this.#model.removeProduct(tmp);//Pasamos todo el objeto producto si coincide el serialNumber
        this.refrescar();
    }

    handleFormAddProductBook = () => {
        let data = {
            categoria: this.#model.category,
        }
        this.#view.showFormAddProductBook(data);
    }
    handleValidarNewProductBook = (valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorIsbn, valorAuthor, valorPages, tmpCategorias) => {
        let inst = new Books(valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorIsbn, valorAuthor, valorPages);
        tmpCategorias.forEach(element => {
            for (const a of this.#model.category) {
                if (element == a.DataCategory.title) {

                    let cat = a.DataCategory;

                    this.#model.addProduct(inst, cat);
                }
            }
        });

        this.refrescar(); //Recargamos la página de nuevo para que muestra la tienda nueva
    }

    handleFormAddProductMovie = () => {

        let data = {
            categoria: this.#model.category,
        }
        this.#view.showFormAddProductMovie(data);
    }

    handleValidarNewProductMovie = (valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorDirector, valorYear, valorDuration, tmpCategorias) => {
        let inst = new Movie(valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorDirector, valorYear, valorDuration);
        tmpCategorias.forEach(element => {
            for (const a of this.#model.category) {
                if (element == a.DataCategory.title) {

                    let cat = a.DataCategory;

                    this.#model.addProduct(inst, cat);
                }
            }
        });
        this.refrescar();
    }

    handleFormAddProductMusic = () => {
        let data = {
            categoria: this.#model.category,
        }

        this.#view.showFormAddProductMusic(data);
    }

    handleValidarNewProductMusic = (valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorSinger, valorMusicalGenre, valorSongsNumber, tmpCategorias) => {

        let inst = new Music(valorSerialNumber, valorNameProduct, valorDescriptionProduct, valorPrice, valorTax, valorImages, valorSinger, valorMusicalGenre, valorSongsNumber);

        tmpCategorias.forEach(element => {
            for (const a of this.#model.category) {
                if (element == a.DataCategory.title) {

                    let cat = a.DataCategory;

                    this.#model.addProduct(inst, cat);
                }
            }
        });


        this.refrescar();
    }

    handleStockShowStores = () => {

        let data = {
            tienda: this.#model.stores,
        }

        this.#view.showStockStores(data);
    }

    handleButtonMostrarStock = (cif) => {

        let data = {
            tienda: this.#model.getShopProducts(cif),
        }

        this.#view.showStockProduct(data); //Recogemos el JSON del generador
    }

    handleButtonEliminarStock = (serialNumber) => {
        let tmp;
        for (const categoria of this.#model.category) {
            for (const producto of categoria.DataProductsCat) {
                if (producto.DataProduct.serialNumber == serialNumber) {
                    tmp = producto.DataProduct;

                }
            }
        }
        this.#model.removeProduct(tmp);//Pasamos todo el objeto producto si coincide el serialNumber
        this.refrescar();
    }

    //Login
    handleShowLogin = () => {

        this.#view.showLogin();
    }

    //Valida y al hacer click comprueba cookies
    handleValidarLogin = (valorUsuario, valorPassword) => {
        //Creamos cookies
        if ((valorUsuario == "admin") && (valorPassword == "admin")) {
            this.setCookie('usuario', 'admin', 2);
            this.setCookie('password', 'admin', 2);
            alert("Hola admin");
            location.reload();
        } else {
            alert("Credenciales Incorrectos");
        }

    }

    handleDesconectar = () => {
        this.setCookie("usuario", '', 0);
        this.setCookie("password", '', 0);

        location.reload();
    }

    handleShowInfoStoreHouse = () => {
        let string;
        for (const tiendas of this.#model.stores) {
            string+=JSON.stringify(tiendas);
        }
        for (const categorias of this.#model.category) {
            string+=JSON.stringify(categorias);
        }
        this.#view.showDataStoreHouse(string);
    }

    handleFav = (serialNumber) => {
        let fav = [];
        console.log('entra')
        if(localStorage.getItem('fav')!=null){
            fav = JSON.parse(localStorage.getItem('fav'))
            if(!fav.includes(serialNumber)){
                fav.push(serialNumber)
                localStorage.setItem('fav',JSON.stringify(fav));
            }
           
        }else{
            fav.push(serialNumber)
            localStorage.setItem('fav',JSON.stringify(fav));
        }
        
        
    }

    handleShowFav = () => {
        if(localStorage.getItem('fav')!=null){
        let tmp = JSON.parse(localStorage.getItem('fav'))
        let tmp2 = [];
        tmp.forEach((elem)=>{
            for (const categoria of this.#model.category) {
                for (const products of categoria.DataProductsCat) {
                    if(products.DataProduct.serialNumber == elem){
                        tmp2.push(products.DataProduct);
                    }
                }
                
            }
        })
        this.#view.showFav(tmp2);
        }
    }

    //Funciones cookies
    setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie = (cname) => {
        let re = new RegExp('(?:(?:^|.*;\\s*)' + cname +
            '\\s*\\=\\s*([^;]*).*$)|^.*$');
        return document.cookie.replace(re, "$1");
    }

    greetUser = () => {
        let user = getCookie("username");
        if (user) {
            alert("Hola " + user);
        } else {
            user = prompt("Dime tu nombre:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 10);
            }
        }
    }


}

export default Controller;