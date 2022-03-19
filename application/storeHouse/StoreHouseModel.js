"use strict";
import { EmptyValueException, InvalidValueException, BaseException, InvalidValueObjectException, ObjectTypeException, ObjectExistException, ObjectNotExistException } from "../Excepciones.js";
import { Store } from "../entities/Store.js";
import { Coords } from "../entities/Coords.js";
import { Product } from "../entities/Product.js";
import { Books } from "../entities/Books.js";
import { Music } from "../entities/Music.js";
import { Movie } from "../entities/Movie.js";
import { Category } from "../entities/Category.js";
//Gestión de un Almacén

//Tiene que haber clase abstracta

//Declaramos el objeto StoreHouse
class StoreHouse {
    #name;
    //#product;
    #category;
    #stores;
    //#stock;
    #defaultCategory;
    #defaultStore;

    constructor(name) {
        //Comprobamos si esta vació negando el campo
        if (!name) throw new EmptyValueException('name', name);

        this.#name = name;
        //this.#product = product;
        this.#category = [];
        this.#stores = [];
        //this.#stock = stock;
        this.#defaultCategory = new Category('Sin Clasificar', 'Sin Clasificar');
        this.addCategory(this.#defaultCategory); //Por defecto esta en la primera posición de Categorias
        this.#defaultStore = new Store('666', 'Amazon', 'Calle Ole', '789456123', new Coords(1, 1),["../../html/assets/img/amazon.jpg"]);
        this.addShop(this.#defaultStore);

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
            [Symbol.iterator]() {
                return {
                    next() {
                        if (cont < array.length) {
                            return { value: array[cont++], done: false } 
                        } else {
                            return { value: undefined, done: true }
                        }

                    }
                }

            }

        }
    }
    //Devuelve un iterador que permita recorrer las tiendas.

    get stores() {
        let array = this.#stores;
        let cont = 0;
        return {
            
            [Symbol.iterator]() { 

                return {
                    next() {
                        if (cont < array.length) {
                            return { value: array[cont++], done: false } 
                        } else {
                            return { value: undefined, done: true }
                        }

                    }



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

        this.#category.push({ //JSON para almacenar datos de category
            DataCategory: newcategory,
            DataProductsCat: []
        })
        //Retorna number con elementos
        return this.#category.length;
    }   


    //Elimina una categoría
    //Al eliminar categoría, sus productos pasan a la de por defecto
    removeCategory(category) {

        //Sacamos la posición de la category
        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === category.title;
        })
        if (indexCategory == -1) throw new ObjectNotExistException('indexCategory', indexCategory); //No existe
        
        this.#category[indexCategory].DataProductsCat.forEach((elem) => {
            console.log(elem)
            this.#category[0].DataProductsCat.push(elem); //Añadimos los productos de la categoría que se va a eliminar en defaultcategory
        })

        console.log(this.#category[0]);
        this.#category.splice(indexCategory, 1); //Eliminamos la categoría en la posición que se encuentra


        //Retorna numero con elementos

        return this.#category.length;
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
            DataStore: this.#defaultStore.cif // Cif de la tienda en la que se encuentra
        })
        //Añadimos el producto a la tienda por defecto
        this.addProductInShop(newproduct,this.#stores[0].DataStore,1);
        //Retorna el nº de elementos de la category en la que está el producto

        return this.#category[indexCategory].DataProductsCat.length;

    }


    //Elimina un producto junto con todas sus relaciones con otros objetos del almacen
    removeProduct(product) {
        if (!product) throw new InvalidValueObjectException('product', product);
        if (!(product instanceof Product)) throw new ObjectTypeException('product', product);

        let i;
        let indexProduct;
        this.#category.forEach(function (elem,index) { //En el elemento sale el JSON
           
            elem.DataProductsCat.forEach(function(elemProduct){
                
                if(elemProduct.DataProduct.serialNumber== product.serialNumber){
                    elem.DataProductsCat.splice(indexProduct, 1); //Borramos el producto de la categoría en la que está
                    
                }
            })
           
             i=index;
            
        })

        this.#stores.forEach(function(elem){
            if(elem.StockStores.has(product.serialNumber)){
                elem.StockStores.delete(product.serialNumber); //Borramos la referencia del producto de las tiendas
            }
        })

        //Retorna number con el nº de elementos
        return this.#category[i].DataProductsCat.length;
    }


    //Añade un Product en una tienda con un nº de unidades
    addProductInShop(product, stores, number=1) {
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
        //Eliminamos el objeto de la tienda por defecto
        this.#stores[0].StockStores.delete(product.serialNumber)
        //Establecemos el stock del producto en la tienda
        this.#stores[indexStores].StockStores.set(product.serialNumber, number);
        //console.log(this.#stores[indexStores].DataStore.cif);

        //Bucle que entra en todas las categorias hasta que encuentra el producto en cuestión
        //Actualizamos la referencia a la tienda que contiene el producto para que no sea la tienda por defecto
        this.#category.forEach((elem) => { //En el elemento sale el JSON
            elem.DataProductsCat.forEach((otro) => {
                if (otro.DataProduct.serialNumber === product.serialNumber) {
                    otro.DataStore = this.#stores[indexStores].DataStore.cif;
                }
                
            })

        })

        //Retorna el number con el nº de elementos(stock)
        return this.#stores[indexStores].StockStores.get(product.serialNumber);

    }

    //Dado un Product y un Shop, se suman la cantidad de elementos al stock de esa tienda. Por defecto 1.
    addQuantityProductInShop(product, stores, number = 1) {

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
        let valueOld = Number.parseInt(this.#stores[indexStores].StockStores.get(product.serialNumber)); //Accedemos al producto de la tienda,retorna el value(cantidad)
        valueOld = Number.parseInt(valueOld) + Number.parseInt(number);
        this.#stores[indexStores].StockStores.set(product.serialNumber, valueOld); //Añadimos la nueva Cantidad al stock de la tienda
       
        //Retorna Stock del producto en la tienda
        return this.#stores[indexStores].StockStores.get(product.serialNumber);
    }

    //Devuelve la relación de todos los productos añadidos en una categoría con sus cantidades en stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    *getCategoryProducts(category, typeProduct = Object) {

        //Ahora category recoge el  title en vez del objeto como tal
        let indexCategory = this.#category.findIndex((elem) => {
            return elem.DataCategory.title === category;
        })

        console.log(this.#stores[0])
        if (indexCategory == -1) throw new ObjectNotExistException('indexCategory', indexCategory); //No existe 
        //console.log(indexCategory)
        for (const productos of this.#category[indexCategory].DataProductsCat) {
            //console.log(iterator.DataCategory.title);
            
            if (productos.DataProduct instanceof typeProduct) {
                for (const tiendas of this.#stores) {
                    //Obtenemos las tiendas que contengan el serialNumber(key) del Producto
                    if (tiendas.StockStores.has(productos.DataProduct.serialNumber)) {
                        //Va sacando los productos si esta en la categoria y filtra por tipo de producto
                        yield { //Utilizamos JSON para poder devolver el producto con su stock
                            product: productos.DataProduct,
                            stock: tiendas.StockStores.get(productos.DataProduct.serialNumber)
                        };
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

        return this.#stores.length;
    }

    //Eliminar una tienda
    //Al eliminar una tienda, los productos de la tienda pasan a la tienda genérica
    removeShop(stores) {
        if (!stores) throw new InvalidValueObjectException('stores', stores);
        if (!(stores instanceof Store)) throw new ObjectTypeException('stores', stores);


        let indexStores = this.#stores.findIndex((elem) => {
            return elem.DataStore.cif === stores.cif;
        })
        if (indexStores == -1) throw new ObjectNotExistException('indexStore', indexStores); //No existe
        console.log(this.#stores[0]);
        //los productos de la tienda pasan a la tienda genérica
        for (let [key, value] of this.#stores[indexStores].StockStores.entries()) { //Devolvemos clave valor de productos de la tienda
            this.#stores[0].StockStores.set(key, value);
        }

        console.log(this.#stores[0]);
        this.#stores.splice(indexStores, 1);

        //Retornamos el número de elementos de la tienda
        return this.#stores.length;

    }

    //Devuelve la relación de todos los productos añadido en una tienda con su stock
    //Si pasamos un tipo de producto,el resultado estará filtrado por ese tipo
    //Generador para mostrar productos de las tiendas

    * getShopProducts(stores, typeProduct = Object) { //si no le pasamos nada,el tipo de producto es por defecto cualquier producto
        //si le pasamos es del tipo que hayamos pasado
        
       
        //Ahora stores no es un objeto,solo recoge el cif
        let indexStores = this.#stores.findIndex((elem) => {
            return elem.DataStore.cif === stores;
        })


        for (const elem of this.#category) {
            for (const productos of elem.DataProductsCat) {
                if (productos.DataStore === stores) {
                    if (productos.DataProduct instanceof typeProduct) {
                        //Va sacando los productos si esta en la tienda y filtra por el tipo de Producto
                        yield { //Utilizamos JSON para poder devolver el producto con su stock
                            product: productos.DataProduct,
                            stock: this.#stores[indexStores].StockStores.get(productos.DataProduct.serialNumber),
                            //Añadimos más información al JSON para mostrar productos por categoría
                            categoriaProducto: elem.DataCategory.title,
                        };
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
        //Para que no sea modificable desde el exterior de la clase
        var classObj = new StoreHouse(name);
        Object.freeze(classObj); 
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


//Importamos y exportamos todo al modelo para partir de aquí

export { EmptyValueException, InvalidValueException, BaseException, InvalidValueObjectException, ObjectTypeException, ObjectExistException, ObjectNotExistException } from "../Excepciones.js";
export { Store } from "../entities/Store.js";
export { Coords } from "../entities/Coords.js";
export { Product } from "../entities/Product.js";
export { Books } from "../entities/Books.js";
export { Music } from "../entities/Music.js";
export { Movie } from "../entities/Movie.js";
export { Category } from "../entities/Category.js";

//Exportamos el singleton
export default StoreHouseSingleton;