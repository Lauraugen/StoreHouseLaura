"use strict";
import { AbstractClassException, EmptyValueException } from "./Excepciones.js";

//Objeto que representa un producto

//Clase Abstracta

class Product{
    #serialNumber;
    #name;
    #description;
    #price;
    #tax;
    #images;

    constructor(serialNumber,name,description,price,tax,images){
        //Para que sea  abstracta
        if(new.target==Product) throw new AbstractClassException();
        //No se puede instanciar porque es abstracta, No deja que se cree un Objeto  tipo Product

        //Comprobamos que los campos Obligatorios no estén vacíos
        if(!serialNumber)throw new EmptyValueException('serialNumber',serialNumber);
        if(!name)throw new EmptyValueException('name',name);
        if(!price)throw new EmptyValueException('price',price);

        this.#serialNumber = serialNumber;
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#tax = tax;
        this.#images = images;

    }

    //Número de serie del producto
    get serialNumber(){
        return this.#serialNumber;
    }

    set serialNumber(serialNumber){
        if(!serialNumber)throw new EmptyValueException('serialNumber',serialNumber);
        this.#serialNumber = serialNumber;
    }

    //Nombre del producto
    get name(){
        return this.#name;
    }

    set name(name){
        if(!name)throw new EmptyValueException('name',name);
        this.#name = name;
    }

    //Descripción de la imagen
    get description(){
        return this.#description;
    }

    set description(description){
        this.#description = description;
    }

    //Precio del producto
    get price(){
        return this.#price;
    }

    set price(price){
        if(!price)throw new EmptyValueException('price',price);
        this.#price = price;
    }

    //Porcentaje de impuestos sobre el precio del producto
    get tax(){
        return this.#tax;
    }

    set tax(tax){
        this.#tax = tax;
    }

    //Array con diferentes imágenes sobre el producto
    get images(){
        return this.#images;
    }
    
    set images(images){
        this.#images = images;
    }
}
export {Product};