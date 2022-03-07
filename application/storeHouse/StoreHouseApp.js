"use strict";

//Exportamos el singleton
import StoreHouse from "./StoreHouseModel.js";
import { EmptyValueException, InvalidValueException, BaseException, InvalidValueObjectException, ObjectTypeException, ObjectExistException, ObjectNotExistException } from "./StoreHouseModel.js";
import { Store } from "./StoreHouseModel.js";
import { Coords } from "./StoreHouseModel.js";
import { Product } from "./StoreHouseModel.js";
import { Books } from "./StoreHouseModel.js";
import { Music } from "./StoreHouseModel.js";
import { Movie } from "./StoreHouseModel.js";
import { Category } from "./StoreHouseModel.js";

import StoreHouseController from "./StoreHouseController.js";
import StoreHouseView from "./StoreHouseView.js";

$(function(){
    //Inicializamos la APP 
    const StoreHouseApp = new StoreHouseController(StoreHouse.getInstance("StoreHouse Laura"),new StoreHouseView())
    //Hace que jquery conozca la existencia en la app de los aarchivos que indica

    //Cuando el documento está lista se crea una constante con el controlador,que a la vez le pasa la vista
    //App es el punto de carga del MVC
})