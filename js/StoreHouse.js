"use strict";
import { EmptyValueException, InvalidAccessConstructorException, InvalidValueException } from "./Excepciones.js";
import {Store} from "./Store.js";
import {Coords} from "./Coords.js";
//Gestión de un Almacén

//Tiene que haber clase abstracta

//Declaramos el objeto StoreHouse
class StoreHouse {
    #name;
    #product;
    #category;
    #stores;
    #stock;
    #defaultCategory;
    #defaultStore;

    //Array donde se almacenan

    constructor(name, product, category, stores, stock, defaultCategory, defaultStore) {
        //Comprobamos si esta vació negando el campo
        if (!name) throw new EmptyValueException();

        this.#name = name;
        this.#product = product;
        this.#category = [];
        this.#stores = [];
        this.#stock = stock;
        this.#defaultCategory = defaultCategory;
        this.#defaultStore = new Store('666','Amazon','Calle Ole','789456123',new Coords(1,1));


    }

    get name() {
        //Excepción , el nombre no puede ser vacío
        return this.#name;
    }

    set name(name) {
        if (!name) throw new EmptyValueException();
        this.#name = name;

    }
    //Devuelve un iterador que permita recorrer las categorías
    get category() {
        let array = this.#category;
        let cont = 0;
        return {
            // El objeto iterable contiene una propiedad Symbol.iterator
            [Symbol.iterator]() { // Symbol.iterator es una función que devuelve el iterador

                // El objeto iterador implementa next()obligatoriamente
                return {
                    next() {
                        if (cont<array.length) {
                            return { value: array[cont++], done: false } //Primero saca la pos y le añade después con ++
                        } else {
                            return { value: undefined, done: true }
                        }

                    }
                    //Dar vueltas: iterar o ser recursivo
                    //Iterar: es como un for(los bucles son iteradores simples)
                    //Recursivo es cuando quieres una solución y no sabe donde esta


                    
                }

            }

        }
    }
    //Devuelve un iterador que permita recorrer las tiendas.

    get stores() {
        let array = this.#stores;
        let cont = 0;
        return {
            // El objeto iterable contiene una propiedad Symbol.iterator
            [Symbol.iterator]() { // Symbol.iterator es una función que devuelve el iterador

                // El objeto iterador implementa next()obligatoriamente
                return {
                    next() {
                        if (cont<array.length) {
                            return { value: array[cont++], done: false } //Primero saca la pos y le añade después con ++
                        } else {
                            return { value: undefined, done: true }
                        }

                    }
                    //Dar vueltas: iterar o ser recursivo
                    //Iterar: es como un for(los bucles son iteradores simples)
                    //Recursivo es cuando quieres una solución y no sabe donde esta


                    
                }

            }

        }


    }

    //Añade una nueva Categoria
    //Devuelve number con el numero de elementos
    addCategory(newcategory) {

        //Comprobamos si la nueva categoría existe (con la posición)
        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === newcategory.title;
        })

        if (indexCategory !== -1) throw new BaseException(); //Ya existe

        this.#category.push({
            DataCategory: newcategory,
            DataProductsCat: []
        })


    }

    //Elimina una categoría
    //Al eliminar categoría, sus productos pasan a la de por defecto
    removeCategory(category) {

        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === category.title;
        })
        if (indexCategory == -1) throw new BaseException(); //No existe

        this.#category.splice(indexCategory, 1);

    }

    //Añade un nuevo producto asociado a una o más categorías
    addProduct(newproduct, category) {

        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === category.title;
        })

        if (indexCategory == -1) throw new BaseException(); //No existe

        //Comprobamos si dentro del array de Productos de categorias existe un producto con el mismo Serial Number
        let indexProduct = this.#category[indexCategory].DataProductsCat.findIndex((elem) => {
            return elem.DataProduct.serialNumber === newproduct.serialNumber;
        })


        if (indexProduct !== -1) throw new BaseException(); //Ya existe

        this.#category[indexCategory].DataProductsCat.push({
            DataProduct: newproduct,
            DataStore: this.#defaultStore.cif //this.#stores[storePosition].CIF
        })


    }

    //Elimina un producto junto con todas sus relaciones con otros objetos del almacen
    removeProduct(product) {

    }

    //Añade un Product en una tienda con un nº de unidades
    addProductInShop(product, stores, number) {

    }

    //Dado un Product y un Shop, se suman la cantidad de elementos al stock de esa tienda. Por defecto 1.
    addQuantityProductInShop(product, stores, number) {

    }

    //Devuelve la relación de todos los productos añadidos en una categoría con sus cantidades en stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    getCategoryProducts(category, typeProduct) {

    }

    //Añade una nueva  tienda
    addShop(stores) {

    }

    //Eliminar una tienda
    //Al eliminar una tienda, los productos de la tienda pasan a la tienda genérica
    removeShop(stores) {

    }

    //Devuelve la relación de todos los productos añadido en una tienda con su stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    getShopProducts(stores, typeProduct) {

    }

}

const StoreHouseSingleton = (function () {
    var instance;

    function createInstance(name) {
        var classObj = new StoreHouse(name);
        return classObj;
    }

    return {
        getInstance: function (name) {
            if (!instance) {
                instance = createInstance(name);
            }
            return instance;
        },
    };
})();

//Exportamos el singleton
export default StoreHouseSingleton;


//Para que sea enumerable
//Object.defineProperty(StoreHouse.prototype, "name", {enumerable: true});