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
    //#cucu = 10 //ej atributo privado
    #cargaDatos() {

        //Creamos Categorías
        let CatSFMovie = new Category('Sciencie Fiction Movie', 'Ciencia Ficción');
        let CatTMovie = new Category('Terror Movie', 'Películas de Miedo');
        let CatCMovie = new Category('Comedy Movie', 'Películas de Comedia');
        let CatRMusic = new Category('Rock', 'Variedad de Música Rock (Álbum)');
        let CatCMusic = new Category('Classic Music', 'Música Clásica (Álbum)');
        let CatPMusic = new Category('Pop Music', 'Música Pop (Álbum)');
        let CatMBooks = new Category('Mangas', 'Libros Tipo Mangas');
        let CatCBooks = new Category('Comics', 'Libros Tipo Comic');
        let CatDBooks = new Category('Default Book', 'Libros por Defecto');


        //Creamos Productos
        let ProdBook1 = new Books(111, 'El Señor de los Anillos', 'Resumen', '20$', '21%', [], '756-3-16-198710-0', 'J. R. R. Tolkien', 600);
        let ProdBook2 = new Books(222, 'Los Pilares de la Tierra', 'Resumen', '22$', '21%', [], '879-3-16-198710-0', 'Ken Follett', 700);
        let ProdMusic1 = new Music(333, 'AM', 'Álbum', '10$', '21%', [], 'Artic Monkeys', 'Rock', 8)
        let ProdMusic2 = new Music(444, 'La Novena Sinfonía', 'Álbum', '8$', '21%', [], 'Beethoven', 'Classical', 10)
        let ProdMusic3 = new Music(555, 'Happier Than Ever', 'Álbum', '12$', '21%', [], 'Billie Eilish', 'Pop', 6)
        let ProdManga1 = new Books(666, 'Jujutsu Kaisen', 'Resumen', '8$', '21%', [], '978-3-16-198710-0', 'Gege Akutami', 500)
        let ProdManga2 = new Books(777, 'Ataque a los Titanes', 'Resumen', '8$', '21%', [], '178-3-16-148510-0', 'Hajime Isayama', 100)
        let ProdManga3 = new Books(888, 'Demon Slayer', 'Resumen', '8$', '21%', [], '378-3-16-116410-0', 'Koyoharu Gotouge', 110)
        let ProdComic1 = new Books(999, 'SpiderMan', 'Resumen', '7$', '21%', [], '487-3-16-116410-0', 'Marvel Comics', 120)
        let ProdComic2 = new Books(123, 'X-Men', 'Resumen', '6$', '21%', [], '521-3-16-116410-0', 'Marvel Comics', 80)
        let ProdTMovie = new Movie(456, 'IT', 'Resumen Terror', '18$', '21%', [], 'Andrés Muschietti', '2017', '2h 15min')
        let ProdCMovie = new Movie(789, 'DeadPool', 'Resumen Comedia', '20$', '21%', [], 'Tim Miller', '2016', '1h 48min')
        let ProdSFMovie = new Movie(213, 'Star Wars', 'Guerra de las Galaxias', '12$', '21%', [], 'George Lucas', '1980', '2h 50min')
        let ProdSF2Movie = new Movie(435, 'Harry Potter y el prisionero de Azkaban', 'Cosas mágicas', '20$', '21%', [], 'Alfonso Cuarón', '2004', '2h 19min');
        let ProdSF3Movie = new Movie(678, 'Avatar', 'Resumen Ciencia Ficción', '17$', '21%', [], 'James Cameron', '2007', '2h 49min');


        //Creamos Tiendas (Stores)

        let StoreCorteIngles = new Store('200', 'Corte Inglés', 'Gran Vía', '789456123', new Coords(2, 2),["../../html/assets/img/el-corte-ingles-logo.jpg"]);
        let StoreSerendipia = new Store('300', 'Serendipia', 'Calle Altagracia', '989456123', new Coords(3, 3),["../../html/assets/img/Serendipia.jpg"]);
        let StoreFnac = new Store('400', 'Fnac', 'Gran Vía', '657456123', new Coords(4, 4),["../../html/assets/img/fnac.jpg"]);

        // this.#model.addCategory();


        try {
            
            this.#model.addCategory(CatSFMovie);
            this.#model.addCategory(CatCMovie);
            this.#model.addCategory(CatMBooks);
            this.#model.addCategory(CatTMovie);
            this.#model.addCategory(CatDBooks);
            this.#model.addCategory(CatCBooks);
            this.#model.addCategory(CatPMusic);
            this.#model.addCategory(CatRMusic);
            //Mostramos el número de categorías;
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
            this.#model.addProduct(ProdTMovie, CatTMovie);
            this.#model.addProduct(ProdSFMovie, CatSFMovie);

            this.#model.addProduct(ProdMusic1, CatRMusic);
            this.#model.addProduct(ProdMusic2, CatCMusic);
            //Mostramos el número de productos
            this.#model.addProduct(ProdMusic3, CatPMusic);
        } catch (error) {
            console.error(error)
        }


        try {
            
            this.#model.addShop(StoreFnac);
            this.#model.addShop(StoreCorteIngles);
            //Mostramos el número de producto
             this.#model.addShop(StoreSerendipia);
        } catch (error) {
            console.log(error)
        }
        //Añadimos Productos a Stores
        try {
            
            this.#model.addProductInShop(ProdManga1, StoreFnac, 2);
            this.#model.addProductInShop(ProdManga3, StoreFnac, 3);
            this.#model.addProductInShop(ProdCMovie, StoreCorteIngles, 1);
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
        this.#view.bindLoadStores(this.handleLoadStores) //Pasamos como manejarlo (el objeto)
        this.#view.bindLoadDropDownCategory(this.handleDropCategory)
        this.#view.bindLoadDropDownStores(this.handleDropStore)
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
        this.#cargaDatos();
    }
    //Maneja los eventos
    handleLoadStores = () => {
        //Simulamos peticion a base de datos,retornando JSON
        let map = {
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
}

export default Controller;