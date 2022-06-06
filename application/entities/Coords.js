"use strict";
import { EmptyValueException } from "../Excepciones.js";

//Coordenadas para adjuntar a un objeto Store

class Coords{
    #latitude;
    #longitude;

    constructor(latitude,longitude){

        if(!latitude)throw new EmptyValueException('latitude',latitude);
        if(!longitude)throw new EmptyValueException('longitude',longitude);

        this.#latitude = latitude;
        this.#longitude = longitude;

    }

    toJSON(){
        return this.#latitude + this.#longitude
    }
    get latitude(){
        return this.#latitude;
    }

    set latitude(latitude){
        if(!latitude)throw new EmptyValueException('latitude',latitude);
        this.#latitude = latitude;
    }

    get longitude(){
        return this.#longitude;
    }

    set longitude(longitude){
        if(!longitude)throw new EmptyValueException('longitude',longitude);
        this.#longitude = longitude;
    }
}
export {Coords};