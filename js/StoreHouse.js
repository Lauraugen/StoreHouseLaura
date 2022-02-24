"use strict";
import { EmptyValueException, InvalidValueException, BaseException, InvalidValueObjectException, ObjectTypeException, ObjectExistException, ObjectNotExistException } from "./Excepciones.js";
import { Store } from "./Store.js";
import { Coords } from "./Coords.js";
import { Product } from "./Product.js";
import { Category } from "./Category.js";
//Gestión de un Almacén

//Tiene que haber clase abstracta

//Declaramos el objeto StoreHouse
class StoreHouse {
    #name;
    #product;
    #category;
    #stores;
    #stock;
    #defaultCategory;
    #defaultStore;

    //Array donde se almacenan

    constructor(name, product, category, stores, stock) {
        //Comprobamos si esta vació negando el campo
        if (!name) throw new EmptyValueException('name', name);

        this.#name = name;
        this.#product = product;
        this.#category = [];
        this.#stores = [];
        this.#stock = stock;
        this.#defaultCategory = new Category('Sin Clasificar','Sin Clasificar');
        this.addCategory(this.#defaultCategory); //Por defecto esta en la primera posición de Categorias
        this.#defaultStore = new Store('666', 'Amazon', 'Calle Ole', '789456123', new Coords(1, 1));


    }

    get name() {
        //Excepción , el nombre no puede ser vacío
        return this.#name;
    }

    set name(name) {
        if (!name) throw new EmptyValueException('name', name);
        this.#name = name;

    }
    //Devuelve un iterador que permita recorrer las categorías
    get category() {
        let array = this.#category;
        let cont = 0;
        return {
            // El objeto iterable contiene una propiedad Symbol.iterator
            [Symbol.iterator]() { // Symbol.iterator es una función que devuelve el iterador

                // El objeto iterador implementa next()obligatoriamente
                return {
                    next() {
                        if (cont < array.length) {
                            return { value: array[cont++], done: false } //Primero saca la pos y le añade después con ++
                        } else {
                            return { value: undefined, done: true }
                        }

                    }
                    //Dar vueltas: iterar o ser recursivo
                    //Iterar: es como un for(los bucles son iteradores simples)
                    //Recursivo es cuando quieres una solución y no sabe donde esta



                }

            }

        }
    }
    //Devuelve un iterador que permita recorrer las tiendas.

    get stores() {
        let array = this.#stores;
        let cont = 0;
        return {
            // El objeto iterable contiene una propiedad Symbol.iterator
            [Symbol.iterator]() { // Symbol.iterator es una función que devuelve el iterador

                // El objeto iterador implementa next()obligatoriamente
                return {
                    next() {
                        if (cont < array.length) {
                            return { value: array[cont++], done: false } //Primero saca la pos y le añade después con ++
                        } else {
                            return { value: undefined, done: true }
                        }

                    }
                    //Dar vueltas: iterar o ser recursivo
                    //Iterar: es como un for(los bucles son iteradores simples)
                    //Recursivo es cuando quieres una solución y no sabe donde esta



                }

            }

        }


    }

    //Añade una nueva Categoria
    //Devuelve number con el numero de elementos
    addCategory(newcategory) {
        if (!newcategory) throw new InvalidValueObjectException('newcategory', newcategory);//No puede ser Null

        if (!(newcategory instanceof Category)) throw new ObjectTypeException('newcategory', newcategory);

        //Comprobamos si la nueva categoría existe (con la posición)
        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === newcategory.title;
        })

        if (indexCategory !== -1) throw new ObjectNotExistException('indexCategory', indexCategory); //Ya existe

        this.#category.push({
            DataCategory: newcategory,
            DataProductsCat: []
        })


    }

    //Elimina una categoría
    //Al eliminar categoría, sus productos pasan a la de por defecto
    removeCategory(category) {

        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === category.title;
        })
        if (indexCategory == -1) throw new ObjectNotExistException('indexCategory', indexCategory); //No existe
        
        this.#category[indexCategory].DataProductsCat.forEach((elem) =>{
            this.#category[0].DataProductsCat.push(elem); //Añadimos los productos de la categoría que se va a eliminar en defaultcategory
        })


        this.#category.splice(indexCategory, 1);



    }

    //Añade un nuevo producto asociado a una o más categorías
    addProduct(newproduct, category) {
        if (!newproduct) throw new InvalidValueObjectException('newproduct', newproduct);//No puede ser Null

        if (!(newproduct instanceof Product)) throw new ObjectTypeException('newproduct', newproduct);

        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === category.title;
        })

        if (indexCategory == -1) throw new ObjectNotExistException('indexCategory', indexCategory); //No existe

        //Comprobamos si dentro del array de Productos de categorias existe un producto con el mismo Serial Number
        let indexProduct = this.#category[indexCategory].DataProductsCat.findIndex((elem) => {
            return elem.DataProduct.serialNumber === newproduct.serialNumber;
        })


        if (indexProduct !== -1) throw new ObjectExistException('indexProduct', indexProduct); //Ya existe

        this.#category[indexCategory].DataProductsCat.push({
            DataProduct: newproduct,
            DataStore: this.#defaultStore.cif //this.#stores[storePosition].CIF, Cif de la tienda en la que se encuentra
        })


    }

    //Elimina un producto junto con todas sus relaciones con otros objetos del almacen
    removeProduct(product) {
        if (!product) throw new InvalidValueObjectException('product', product);
        if (!(product instanceof Product)) throw new ObjectTypeException('product', product);

        //Comprobamos si dentro del array de Productos de categorias existe un producto con el mismo Serial Number
        let index = this.#category[indexCategory].DataProductsCat.findIndex((elem) => {
            return elem.DataProduct.serialNumber === product.serialNumber;
        })

        if (index == -1) throw new ObjectNotExistException('index', index); //No existe el Producto

        let indexProduct;
        this.#category.forEach(function (elem) { //En el elemento sale el JSON
            indexProduct = elem.DataProductsCat.findIndex(function (otro) {
                return otro.DataProduct.serialNumber === product.serialNumber;

            })
            elem.DataProductsCat.splice(indexProduct, 1); //Borramos el producto de la categoría en la que está
        })

    }

    //Añade un Product en una tienda con un nº de unidades
    addProductInShop(product, stores, number) {
        //Comprobamos los Objetos y nº unidades
        if (!stores) throw new InvalidValueObjectException('stores', stores);
        if (!(stores instanceof Store)) throw new ObjectTypeException('stores', stores);

        if (!product) throw new BaseException("Null,Undefined o False");
        if (!(product instanceof Product)) throw new ObjectTypeException('product', product);

        if (number <= 0) throw new InvalidValueException('number', number);

        let indexStores = this.#stores.findIndex((elem) => {
            return elem.DataStore.cif === stores.cif;
        })//Devuelve la posicion de la tienda

        if (indexStores == -1) throw new ObjectNotExistException('indexStores', indexStores); //No existe

        this.#stores[indexStores].StockStores.set(product.serialNumber, number);
        console.log(this.#stores[indexStores].DataStore.cif);
        //Bucle que entre en todas las categorias hasta que encuentre el producto en cuestión
        //Actualizamos la referencia a la tienda que contiene el producto para que no sea la tienda por defecto
        this.#category.forEach((elem) => { //En el elemento sale el JSON
            elem.DataProductsCat.forEach((otro) => {
                if (otro.DataProduct.serialNumber === product.serialNumber) {
                    otro.DataStore = this.#stores[indexStores].DataStore.cif;
                }
                //this tiene problemas con function,todo son objetos,arrow no tiene contexto por lo que no peta
            })

        })

    }

    //Dado un Product y un Shop, se suman la cantidad de elementos al stock de esa tienda. Por defecto 1.
    addQuantityProductInShop(product, stores, number=1) {

        //Comprobamos los Objetos 
        if (!stores) throw new InvalidValueObjectException('stores', stores);
        if (!(stores instanceof Store)) throw new ObjectTypeException('stores', stores);

        if (!product) throw new InvalidValueObjectException('product', product);
        if (!(product instanceof Product)) throw new ObjectTypeException('product', product);

        if (number <= 0) throw new InvalidValueException('number', number);

        let indexStores = this.#stores.findIndex((elem) => {
            return elem.DataStore.cif === stores.cif;
        })//Devuelve la posicion de la tienda

        if (indexStores == -1) throw new ObjectNotExistException('indexStores', indexStores); //No existe
        let valueOld = this.#stores[indexStores].StockStores.get(product.serialNumber); //Accedemos al producto de la tienda,retorna el value(cantidad)
        valueOld = valueOld + number;
        this.#stores[indexStores].StockStores.set(product.serialNumber, valueOld); //Añadimos la nueva Cantidad al stock de la tienda
    }

    //Devuelve la relación de todos los productos añadidos en una categoría con sus cantidades en stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    *getCategoryProducts(category, typeProduct) {

        for (const elem of this.#category) {
            for (const iterator of elem.DataProductsCat) {
                //console.log(iterator.DataCategory.title);
                if (elem.DataCategory.title === category.title) {
                    if (iterator.DataProduct instanceof typeProduct) {
                        //Va sacando los productos si esta en la categoria y filtra por tipo de producto
                        yield iterator.DataProduct;
                    }

                }
            }
        }



    }


//Añade una nueva  tienda
addShop(newstores) {
    if (!newstores) throw new InvalidValueObjectException('newstores', newstores);
    if (!(newstores instanceof Store)) throw new ObjectTypeException('newstores', newstores);

    let indexStores = this.#stores.findIndex((elem) => {
        return elem.DataStore.cif === newstores.cif;
    })

    if (indexStores !== -1) throw new ObjectExistException('indexStores', indexStores); //Ya existe

    //JSON
    this.#stores.push({
        DataStore: newstores,
        StockStores: new Map(), //Aquí metemos el id(key)y la cantidad(value) de Productos asociados
    })
}

//Eliminar una tienda
//Al eliminar una tienda, los productos de la tienda pasan a la tienda genérica
removeShop(stores) {
    if (!newstores) throw new InvalidValueObjectException('newstores', newstores);
    if (!(newstores instanceof Store)) throw new ObjectTypeException('newstores', newstores);

    //let indexStores = this.#s

}

    //Devuelve la relación de todos los productos añadido en una tienda con su stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    //Generador para mostrar productos de las tiendas
    * getShopProducts(stores, typeProduct = Object) { //si no le pasamos nada,el tipo de producto es por defecto cualquier producto
    //si le pasamos es del tipo que hayamos pasado
    //bucle para llegar a array de productos
    //Foreach no se puede utilizar con yield,por eso utilizamos dos forof
    for (const elem of this.#category) {
        for (const iterator of elem.DataProductsCat) {
            if (iterator.DataStore === stores.cif) {
                if (iterator.DataProduct instanceof typeProduct) {
                    //Va sacando los productos si esta en la tienda y filtra por el tipo de Producto
                    yield iterator.DataProduct;
                }

            }
        }
    }



}

}

const StoreHouseSingleton = (function () {
    var instance;
    //Solo se puede crear una instancia, si se crea más te devuelve la que ya estaba creada
    function createInstance(name) {
        var classObj = new StoreHouse(name);
        return classObj;
    }

    return {
        getInstance: function (name) {
            if (!instance) {
                instance = createInstance(name);
            }
            return instance;
        },
    };
})();

//Exportamos el singleton
export default StoreHouseSingleton;


//Para que sea enumerable
//Object.defineProperty(StoreHouse.prototype, "name", {enumerable: true});