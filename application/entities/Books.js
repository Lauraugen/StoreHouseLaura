"use strict";
import { EmptyValueException,InvalidAccessConstructorException} from "../Excepciones.js";
import {Product} from "./Product.js";


class Books extends Product {
    //Atributos privados
    #isbn;
    #author;
    #pages;

    constructor(serialNumber, name, description, price, tax, images, isbn, author, pages) {

        //La función se invoca con el operador new
        if (!new.target) throw new InvalidAccessConstructorException();

        //Llamada al superconstructor
        super(serialNumber, name, description, price, tax, images);

        if (!isbn) throw new EmptyValueException('isbn',isbn);
        if (!author) throw new EmptyValueException('author',author);

        this.#isbn = isbn;
        this.#author = author;
        this.#pages = pages;
    }

    //Propiedades de acceso a los atributos privados
    get isbn() {
        return this.#isbn;
    }

    set isbn(isbn) {
        if (!isbn) throw new EmptyValueException('isbn',isbn);
        this.#isbn = isbn;
    }

    get author() {
        return this.#author;
    }

    set author(author) {
        if (!author) throw new EmptyValueException('author',author);
        this.#author = author;
    }

    get pages() {
        return this.#pages;
    }

    set pages(pages) {
        this.#pages = pages;
    }
}

export {Books};