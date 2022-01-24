"use strict";
//Gestión de un Almacén

//Tiene que haber clase abstracta

//Declaramos el objeto StoreHouse
class StoreHouse {
    constructor(nombre,productos,categorias,tiendas,stock,defaultCategory,defaultStore){
        this.nombre = nombre;
        this.productos = productos;
        this.categorias = categorias;
        this.tiendas = tiendas;
        this.stock = stock;
        this.defaultCategory = defaultCategory;
        this.defaultStore = defaultStore;


    }

    get fullName(){
        //Excepción , el nombre no puede ser vacío
        return this.nombre ;
    }

    set fullName(fullName){
        this.fullName = this.nombre;

    }
    //Devuelve un iterador que permita recorrer las categorías
    get categorias(){
        return this.categorias;
    }
    //Devuelve un iterador que permita recorrer las tiendas.

    get tiendas(){
        return this.tiendas;
    }
    //Añade una nueva Categoria
    //Devuelve number con el numero de elementos
    addCategory(){

    }
}
//Para que sea enumerable
Object.defineProperty(StoreHouse.prototype, "fullName", {enumerable: true});