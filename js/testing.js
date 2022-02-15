"use strict";

//Testing

import StoreHouseSingleton from "./StoreHouse.js";
import {Category} from "./Category.js";
import {Movie} from "./Movie.js";

let SH= StoreHouseSingleton.getInstance('laurita'); //Para instanciarlo, se añade todo aquí
let Cat1= new Category('Pantalon','Pantans chachis');
let Cat2= new Category('Pantalon2','Pantans chachis2');
SH.addCategory(Cat1);
SH.addCategory(Cat2);
let prod1= new Movie('123', 'Harry Potter', 'Cosas mágicas', '20$', '21%', [], 'James noseq', '2001', '2h 30min');
SH.addProduct(prod1,Cat1);
console.log(SH.name)

for (const iterator of SH.category) { //Recorre el iterador
    console.log(iterator);
    
}
