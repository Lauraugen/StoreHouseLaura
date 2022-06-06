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

}

window.addEventListener('popstate', function(event) {
  if (event.state){
		historyActions[event.state.action](event);
  }
});

history.replaceState({action: 'init'}, null);

