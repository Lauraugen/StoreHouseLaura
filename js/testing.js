"use strict";

//Testing

import StoreHouseSingleton from "./StoreHouse.js";
import { Category } from "./Category.js";
import { Movie } from "./Movie.js";
import { Store } from "./Store.js";
import { Coords } from "./Coords.js";
import { Music } from "./Music.js";
import { Books } from "./Books.js";
//import { Product } from "./Product.js";

let SH = StoreHouseSingleton.getInstance('Laura Álvarez'); //Para instanciarlo, se añade todo aquí
//Creamos Categorías
let CatSFMovie = new Category('Sciencie Fiction Movie', 'Ciencia Ficción');
let CatTMovie = new Category('Terror Movie', 'Películas de Miedo');
let CatCMovie = new Category('Comedy Movie', 'Películas de Comedia');
let CatRMusic = new Category('Rock', 'Variedad de Música Rock (Álbum)');
let CatCMusic = new Category('Classic Music', 'Música Clásica (Álbum)');
let CatPMusic = new Category('Pop Music', 'Música Pop (Álbum)');
let CatMBooks = new Category('Mangas', 'Libros Tipo Mangas');
let CatCBooks = new Category('Comics', 'Libros Tipo Comic');
let CatDBooks = new Category('Default Book', 'Libros por Defecto');


//Creamos Productos
let ProdBook1 = new Books(serialNumber, name, description, price, tax, images, isbn, author, pages);
let ProdBook2 = new Books(serialNumber, 'Los Pilares de la Tierra', description, price, tax, images, isbn, author, pages);
let ProdMusic1 = new Music(serialNumber, name, description, price, tax, images, singer, musicalGenre, songsNumber)
let ProdMusic2 = new Music(serialNumber, name, description, price, tax, images, singer, musicalGenre, songsNumber)
let ProdMusic3 = new Music(serialNumber, name, description, price, tax, images, singer, musicalGenre, songsNumber)
let ProdManga1 = new Books(serialNumber, name, description, price, tax, images, isbn, author, pages)
let ProdManga2 = new Books(serialNumber, name, description, price, tax, images, isbn, author, pages)
let ProdManga3 = new Books(serialNumber, name, description, price, tax, images, isbn, author, pages)
let ProdComic1 = new Books(serialNumber, name, description, price, tax, images, isbn, author, pages)
let ProdComic2 = new Books(serialNumber, name, description, price, tax, images, isbn, author, pages)
let ProdTMovie = new Movie(serialNumber, name, description, price, tax, images, director, year, duration)
let ProdCMovie = new Movie(serialNumber, name, description, price, tax, images, director, year, duration)
let ProdSFMovie = new Movie(serialNumber, name, description, price, tax, images, director, year, duration)
let ProdSF2Movie = new Movie('123', 'Harry Potter', 'Cosas mágicas', '20$', '21%', [], 'James noseq', '2001', '2h 30min');


//Creamos Tiendas (Stores)

let StoreCorteIngles = new Store('100', 'Amazon', 'Calle Ole', '789456123', new Coords(2, 2));
let StoreSerendipia = new Store('100', 'Amazon', 'Calle Ole', '789456123', new Coords(2, 2));
let StoreFnac = new Store('100', 'Amazon', 'Calle Ole', '789456123', new Coords(2, 2));



try {
    SH.addCategory(CatSFMovie);
    SH.addCategory(CatCMovie);
} catch (error) {
    console.error(error);
}


SH.addProduct(prod1, Cat1);
console.log(SH.name)

SH.addShop(Store1);
for (const iterator of SH.category) { //Recorre el iterador
    console.log(iterator);

}
try {
    SH.addProductInShop(prod1, Store1, 1);
} catch (error) {
    console.error(error);
}
SH.addQuantityProductInShop(prod1, Store1, 3);

let prueba = SH.getShopProducts(Store1, Movie);
let prueba2 = SH.getCategoryProducts(Cat1, Books);
console.log("Iterador generador");
for (const iterator of prueba) {
    console.log(iterator);
}
console.log("Iterador generador2");
for (const iterator of prueba2) {
    console.log(iterator);
}