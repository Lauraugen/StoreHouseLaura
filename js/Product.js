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
        //Truquillo abstracto
        if(new.target==Product) throw new AbstractClassException();//CAMBIAR ESTO A EXCEPCION ABSTRACTA
        //No se puede instanciar porque es abstracta, lo de arriba es para eso
        //Comprobamos que los campos Obligatorios no estén vacíos
        if(!serialNumber)throw new EmptyValueException();
        if(!name)throw new EmptyValueException();
        if(!price)throw new EmptyValueException();

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
        if(!serialNumber)throw new EmptyValueException();
        this.#serialNumber = serialNumber;
    }

    //Nombre del producto
    get name(){
        return this.#name;
    }

    set name(name){
        if(!name)throw new EmptyValueException();
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
        if(!price)throw new EmptyValueException();
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