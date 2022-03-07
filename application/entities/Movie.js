"use strict";
import { EmptyValueException,InvalidAccessConstructorException } from "../Excepciones.js";
import {Product} from "./Product.js";

class Movie extends Product {
    //Atributos privados
    #director;
    #year;
    #duration;

    constructor(serialNumber, name, description, price, tax, images, director, year, duration) {

        //La función se invoca con el operador new
        if (!new.target) throw new InvalidAccessConstructorException();

        //Llamada al superconstructor
        super(serialNumber, name, description, price, tax, images);

        if (!director) throw new EmptyValueException('director',director);

        this.#director = director;
        this.#year = year;
        this.#duration = duration;
    }

    get director() {
        return this.#director;
    }

    set director(director) {
        if (!director) throw new EmptyValueException('director',director);
        this.#director = director;
    }

    get year() {
        return this.#year;
    }

    set year(year) {
        this.#year = year;
    }

    get duration() {
        return this.#duration;
    }

    set duration(duration) {
        this.#duration = duration;
    }
}
export {Movie};