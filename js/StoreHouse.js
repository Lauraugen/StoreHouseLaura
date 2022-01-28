"use strict";
import {EmptyValueException, InvalidAccessConstructorException,InvalidValueException} from "./Excepciones.js";
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
    constructor(name,product,category,stores,stock,defaultCategory,defaultStore){
        //Comprobamos si esta vació negando el campo
        if(!name)throw new EmptyValueException();

        this.#name = name;
        this.#product = product;
        this.#category = category;
        this.#stores = stores;
        this.#stock = stock;
        this.#defaultCategory = defaultCategory;
        this.#defaultStore = defaultStore;


    }

    get name(){
        //Excepción , el nombre no puede ser vacío
        return this.#nombre ;
    }

    set name(name){
        if(!name)throw new EmptyValueException();
        this.#name = name;

    }
    //Devuelve un iterador que permita recorrer las categorías
    get category(){
        return this.#category;
    }
    //Devuelve un iterador que permita recorrer las tiendas.

    get stores(){
        return this.#stores;
    }

    //Añade una nueva Categoria
    //Devuelve number con el numero de elementos
    addCategory(category){

    }

    //Elimina una categoría
    //Al eliminar categoría, sus productos pasan a la de por defecto
    removeCategory(category){

    } 

    //Añade un nuevo producto asociado a una o más categorías
    addProduct(product,category){

    }

    //Elimina un producto junto con todas sus relaciones con otros objetos del almacen
    removeProduct(product){

    }

    //Añade un Product en una tienda con un nº de unidades
    addProductInShop(product,stores,number){

    }

    //Dado un Product y un Shop, se suman la cantidad de elementos al stock de esa tienda. Por defecto 1.
    addQuantityProductInShop(product,stores,number){

    }

    //Devuelve la relación de todos los productos añadidos en una categoría con sus cantidades en stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    getCategoryProducts(category,typeProduct){

    }

    //Añade una nueva  tienda
    addShop(stores){

    }

    //Eliminar una tienda
    //Al eliminar una tienda, los productos de la tienda pasan a la tienda genérica
    removeShop(stores){

    }

    //Devuelve la relación de todos los productos añadido en una tienda con su stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    getShopProducts(stores,typeProduct){

    }

}
//Para que sea enumerable
//Object.defineProperty(StoreHouse.prototype, "name", {enumerable: true});