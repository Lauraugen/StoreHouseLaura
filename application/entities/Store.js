"use strict";
import { EmptyValueException } from "../Excepciones.js";

//Información de una Tienda

class Store{
    #cif;
    #name;
    #address;
    #phone;
    #coords;
    #photos;

    constructor(cif,name,address,phone,coords,photos=[]){

        if(!name)throw new EmptyValueException('name',name);

        this.#cif = cif;
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#coords = coords;
        this.#photos = photos;
    }

    //Código de identificación fiscal
    get cif(){
        return this.#cif;
    }

    set cif(cif){
        this.#cif = cif;
    }

    //Nombre de la tienda
    get name(){
        return this.#name;
    }

    set name(name){
        if(!name)throw new EmptyValueException('name',name);
        this.#name = name;
    }

    //Dirección
    get address(){
        return this.#address;
    }

    set address(address){
        this.#address = address;
    }

    //Teléfono
    get phone(){
        return this.#phone;
    }

    set phone(phone){
        this.#phone = phone;
    }

    //Objeto Coords donde se ubique la tienda
    get coords(){
        return this.#coords;
    }

    set coords(coords){
        this.#coords = coords;
    }

    get photos(){
        return this.#photos;
    }

    

}
export {Store};