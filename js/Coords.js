"use strict";
import { EmptyValueException } from "./Excepciones";

//Coordenadas para adjuntar a un objeto Store

class Coords{
    #latitude;
    #longitude;

    constructor(latitude,longitude){

        if(!latitude)throw new EmptyValueException();
        if(!longitude)throw new EmptyValueException();

        this.#latitude = latitude;
        this.#longitude = longitude;

    }
    get latitude(){
        return this.#latitude;
    }

    set latitude(latitude){
        if(!latitude)throw new EmptyValueException();
        this.#latitude = latitude;
    }

    get longitude(){
        return this.#longitude;
    }

    set longitude(longitude){
        if(!longitude)throw new EmptyValueException();
        this.#longitude = longitude;
    }
}