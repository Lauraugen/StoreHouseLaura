"use strict";
import { EmptyValueException } from "./Excepciones.js";

//Estructura de Categorias de un Almacén

class Category{
    #title;
    #description;
    constructor(title,description){

        //El título estará vacío
        if(!title)throw new EmptyValueException('title',title);

        this.#title=title;
        this.#description=description;

    }
    
    //Título de la categoría
    get title(){
        return this.#title ;
    }

    set title(title){
        if(!title)throw new EmptyValueException('title',title);
        this.#title = title;

    }

    //Descripción de la misma
    get description(){
        return this.#description;
    }

    set description(description){
        this.#description = description;
    }
}
export {Category};
