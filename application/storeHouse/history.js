import { StoreHouseApp } from "./StoreHouseApp.js";

const historyActions = {
	init: () => {
		StoreHouseApp.handleLoadStores()
	},
	loadDropDownCategory:()=> {
		StoreHouseApp.handleDropCategory()
	},
	loadDropDownStores:()=> {
		StoreHouseApp.handleDropStore()
	},
	loadStoreProducts:(event)=>{
		StoreHouseApp.handleStoreProducts(event.state.tienda)
	},
	loadStoreProductsDropDown:(event)=>{
		StoreHouseApp.handleStoreProducts(event.state.tienda)
	},
	loadInfoProducts:(event)=>{
		StoreHouseApp.handleInfoProducts(event.state.serialNumber)
	},
	loadCategoryProducts:(event)=>{
		StoreHouseApp.handleCategoryProducts(event.state.category)
	},

    
	showShoppingCart: () => ShoppingCartApp.handleShowShoppingCart(),
	productsCategoryList: (event) => ManagerApp.handleProductsCategoryList(event.state.category),
	productsTypeList: (event) =>	ManagerApp.handleProductsTypeList(event.state.type),
	showProduct: (event) => ManagerApp.handleShowProduct(event.state.serial)
}

window.addEventListener('popstate', function(event) {
  if (event.state){
		historyActions[event.state.action](event);
  }
});

history.replaceState({action: 'init'}, null);

