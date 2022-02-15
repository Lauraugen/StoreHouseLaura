"use strict";
import { EmptyValueException } from "./Excepciones.js";
import {Product} from "./Product.js";

class Music extends Product{
    //Atributos privados
    #singer;
    #musicalGenre;
    #songsNumber; //Nº canciones álbum

    constructor(serialNumber, name, description, price, tax, images,singer,musicalGenre,songsNumber){

        //La función se invoca con el operador new
        if (!new.target) throw new InvalidAccessConstructorException();

        //Llamada al superconstructor
        super(serialNumber, name, description, price, tax, images);

        if(!singer)throw new EmptyValueException();

        this.#singer = singer;
        this.#musicalGenre = musicalGenre;
        this.#songsNumber = songsNumber;

    }

    get singer(){
        return this.#singer;
    }

    set singer(singer){
        if(!singer)throw new EmptyValueException();
        this.#singer = singer;
    }

    get musicalGenre(){
        return this.#musicalGenre;
    }

    set musicalGenre(musicalGenre){
        this.#musicalGenre = musicalGenre;
    }

    get songsNumber(){
        return this.#songsNumber;
    }

    set songsNumber(songsNumber){
        this.#songsNumber = songsNumber;
    }
}
export {Music};