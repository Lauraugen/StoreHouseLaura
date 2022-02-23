"use strict";

//Testing

import StoreHouseSingleton from "./StoreHouse.js";
import {Category} from "./Category.js";
import {Movie} from "./Movie.js";
import { Store } from "./Store.js";
import { Coords } from "./Coords.js";
import {Music} from "./Music.js";
import {Books} from "./Books.js";
import { Product } from "./Product.js";

let SH= StoreHouseSingleton.getInstance('laurita'); //Para instanciarlo, se añade todo aquí
let Cat1= new Category('Pantalon','Pantans chachis');
let Cat2= new Category('Pantalon2','Pantans chachis2');
SH.addCategory(Cat1);
SH.addCategory(Cat2);
let prod1= new Movie('123', 'Harry Potter', 'Cosas mágicas', '20$', '21%', [], 'James noseq', '2001', '2h 30min');
SH.addProduct(prod1,Cat1);
console.log(SH.name)
let Store1= new Store('606', 'Amazon', 'Calle Ole', '789456123', new Coords(1, 1));
SH.addShop(Store1);
for (const iterator of SH.category) { //Recorre el iterador
    console.log(iterator);
    
}
try{
    SH.addProductInShop(prod1,Store1,1);
}catch(error){
    console.error(error);
}

let prueba= SH.getShopProducts(Store1,Movie);
let prueba2=SH.getCategoryProducts(Cat1,Books);
console.log("Iterador generador");
for (const iterator of prueba) {
    console.log(iterator);
}
console.log("Iterador generador2");
for (const iterator of prueba2) {
    console.log(iterator);
}