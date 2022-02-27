"use strict";

class Controller{
    #model;
    #view;
    //#cucu = 10 //ej atributo privado
    #cargaDatos(){
       // this.#model.addCategory();
    }
    constructor(newModel,newView){
        this.#model = newModel;
        this.#view =  newView;
        this.onLoad();
        this.onInit();
        this.#view.bindInit(this.handleInit);
    }

    handleInit = () => {
        
        this.onInit();
    }

    onInit = () => {
        
        this.#view.init();
    }

    onLoad = () => {
        this.#cargaDatos();
    }
}

export default Controller;