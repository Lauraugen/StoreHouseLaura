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

class Controller {
    #model;
    #view;

    #cargaDatos() {

        //Creamos Categorías
        let CatSFMovie = new Category('Sciencie-Fiction-Movie', 'Ciencia Ficción');
        let CatTMovie = new Category('Terror-Movie', 'Películas de Miedo');
        let CatCMovie = new Category('Comedy-Movie', 'Películas de Comedia');
        let CatRMusic = new Category('Rock', 'Variedad de Música Rock (Álbum)');
        let CatCMusic = new Category('Classic-Music', 'Música Clásica (Álbum)');
        let CatPMusic = new Category('Pop-Music', 'Música Pop (Álbum)');
        let CatMBooks = new Category('Mangas', 'Libros Tipo Mangas');
        let CatCBooks = new Category('Comics', 'Libros Tipo Comic');
        let CatDBooks = new Category('Default-Book', 'Libros por Defecto');


        //Creamos Productos
        let ProdBook1 = new Books(111, 'El Señor de los Anillos', 'Resumen', '20$', '21%', ["../../html/assets/img/products/elSeñorDeLosAnillos.jpg"], '756-3-16-198710-0', 'J. R. R. Tolkien', 600);
        let ProdBook2 = new Books(222, 'Los Pilares de la Tierra', 'Resumen', '22$', '21%', ["../../html/assets/img/products/pilaresTierra.jpg"], '879-3-16-198710-0', 'Ken Follett', 700);
        let ProdMusic1 = new Music(333, 'AM', 'Álbum', '10$', '21%', ["../../html/assets/img/products/arcticMonkeys.jpg"], 'Artic Monkeys', 'Rock', 8)
        let ProdMusic2 = new Music(444, 'La Novena Sinfonía', 'Álbum', '8$', '21%', ["../../html/assets/img/products/novenaSinfonia.jpg"], 'Beethoven', 'Classical', 10)
        let ProdMusic3 = new Music(555, 'Happier Than Ever', 'Álbum', '12$', '21%', ["../../html/assets/img/products/happierThanEver.jpg"], 'Billie Eilish', 'Pop', 6)
        let ProdManga1 = new Books(666, 'Jujutsu Kaisen', 'Resumen', '8$', '21%', ["../../html/assets/img/products/Jujutsu_kaisen.jpg"], '978-3-16-198710-0', 'Gege Akutami', 500)
        let ProdManga2 = new Books(777, 'Ataque a los Titanes', 'Resumen', '8$', '21%', ["../../html/assets/img/products/attackontitan.png"], '178-3-16-148510-0', 'Hajime Isayama', 100)
        let ProdManga3 = new Books(888, 'Demon Slayer', 'Resumen', '8$', '21%', ["../../html/assets/img/products/demonSlayer.jpg"], '378-3-16-116410-0', 'Koyoharu Gotouge', 110)
        let ProdComic1 = new Books(999, 'SpiderMan', 'Resumen', '7$', '21%', ["../../html/assets/img/products/spiderman.jpg"], '487-3-16-116410-0', 'Marvel Comics', 120)
        let ProdComic2 = new Books(123, 'X-Men', 'Resumen', '6$', '21%', ["../../html/assets/img/products/xmen.jpg"], '521-3-16-116410-0', 'Marvel Comics', 80)
        let ProdTMovie = new Movie(456, 'IT', 'Resumen Terror', '18$', '21%', ["../../html/assets/img/products/it.jpg"], 'Andrés Muschietti', '2017', '2h 15min')
        let ProdCMovie = new Movie(789, 'DeadPool', 'Resumen Comedia', '20$', '21%', ["../../html/assets/img/products/deadpool.jpg"], 'Tim Miller', '2016', '1h 48min')
        let ProdSFMovie = new Movie(213, 'Star Wars', 'Guerra de las Galaxias', '12$', '21%', ["../../html/assets/img/products/starWars.jpeg"], 'George Lucas', '1980', '2h 50min')
        let ProdSF2Movie = new Movie(435, 'Harry Potter y el prisionero de Azkaban', 'Cosas mágicas', '20$', '21%', ["../../html/assets/img/products/harrypotter.jpg"], 'Alfonso Cuarón', '2004', '2h 19min');
        let ProdSF3Movie = new Movie(678, 'Avatar', 'Resumen Ciencia Ficción', '17$', '21%', ["../../html/assets/img/products/avatar.png"], 'James Cameron', '2007', '2h 49min');

        //Creamos Tiendas (Stores)

        let StoreCorteIngles = new Store('200', 'Corte Inglés', 'Gran Vía', '789456123', new Coords(2, 2), ["../../html/assets/img/el-corte-ingles-logo.jpg"]);
        let StoreSerendipia = new Store('300', 'Serendipia', 'Calle Altagracia', '989456123', new Coords(3, 3), ["../../html/assets/img/Serendipia.jpg"]);
        let StoreFnac = new Store('400', 'Fnac', 'Gran Vía', '657456123', new Coords(4, 4), ["../../html/assets/img/fnac.jpg"]);


        try {

            this.#model.addCategory(CatSFMovie);
            this.#model.addCategory(CatCMovie);
            this.#model.addCategory(CatMBooks);
            this.#model.addCategory(CatTMovie);
            this.#model.addCategory(CatDBooks);
            this.#model.addCategory(CatCBooks);
            this.#model.addCategory(CatPMusic);
            this.#model.addCategory(CatRMusic);
            this.#model.addCategory(CatCMusic)
        } catch (error) {
            console.error(error);
        }


        try {

            this.#model.addProduct(ProdManga1, CatMBooks);
            this.#model.addProduct(ProdManga2, CatMBooks);
            this.#model.addProduct(ProdManga3, CatMBooks);

            this.#model.addProduct(ProdBook1, CatDBooks);
            this.#model.addProduct(ProdBook2, CatDBooks);
            this.#model.addProduct(ProdComic1, CatCBooks);
            this.#model.addProduct(ProdComic2, CatCBooks);

            this.#model.addProduct(ProdCMovie, CatCMovie);
            this.#model.addProduct(ProdSF2Movie, CatSFMovie);
            this.#model.addProduct(ProdSF3Movie, CatSFMovie)
            this.#model.addProduct(ProdTMovie, CatTMovie);
            this.#model.addProduct(ProdSFMovie, CatSFMovie);

            this.#model.addProduct(ProdMusic1, CatRMusic);
            this.#model.addProduct(ProdMusic2, CatCMusic);
            this.#model.addProduct(ProdMusic3, CatPMusic);
        } catch (error) {
            console.error(error)
        }


        try {

            this.#model.addShop(StoreFnac);
            this.#model.addShop(StoreCorteIngles);
            this.#model.addShop(StoreSerendipia);
        } catch (error) {
            console.log(error)
        }
        //Añadimos Productos a Stores
        try {

            this.#model.addProductInShop(ProdManga1, StoreFnac, 2);
            this.#model.addProductInShop(ProdManga3, StoreFnac, 3);
            this.#model.addProductInShop(ProdComic2, StoreCorteIngles, 4);
            this.#model.addProductInShop(ProdMusic3, StoreCorteIngles, 5);
            this.#model.addProductInShop(ProdSF2Movie, StoreCorteIngles, 1);
            this.#model.addProductInShop(ProdMusic1, StoreFnac, 3);
            this.#model.addProductInShop(ProdCMovie, StoreFnac, 1);
            this.#model.addProductInShop(ProdSFMovie, StoreFnac, 1);
            this.#model.addProductInShop(ProdBook2, StoreSerendipia, 3);
            this.#model.addProductInShop(ProdBook1, StoreSerendipia, 2);
            this.#model.addProductInShop(ProdManga2, StoreSerendipia, 1)
        } catch (error) {

        }

        //Añadimos Cantidad de Productos en Stores
        try {

            this.#model.addQuantityProductInShop(ProdBook1, StoreSerendipia, 3);
            this.#model.addQuantityProductInShop(ProdManga2, StoreSerendipia, 10);
            this.#model.addQuantityProductInShop(ProdManga3, StoreFnac, 10);
            this.#model.addQuantityProductInShop(ProdManga1, StoreFnac, 8);
            this.#model.addQuantityProductInShop(ProdMusic1, StoreFnac, 2);
            this.#model.addQuantityProductInShop(ProdCMovie, StoreFnac, 5);
            this.#model.addQuantityProductInShop(ProdComic2, StoreCorteIngles, 4);
            this.#model.addQuantityProductInShop(ProdMusic3, StoreCorteIngles, 12);
        } catch (error) {
            console.log(error)
        }
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
                    tmp=producto.DataProduct;
                   
                    
                }
            }
        }
        this.#model.removeProduct(tmp);//Pasamos todo el objeto producto si coincide el serialNumber
        this.refrescar();
    }
}

export default Controller;