import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);


import toastStore from './toast';   // toast


export default new Vuex.Store({
	modules: {
		storeToast: toastStore,

	}
});
