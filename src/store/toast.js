/**
 * toast
 */

export default {
	state: {

	},
	mutations: {
		/**
		 * show toast
		*/
		toast: function(state,option){
			const {text="",type="",timeout=2000}=option;

			const _json={
				timeout: timeout,
				position: "bottom-left",
				// showCloseButtonOnHover: true,
				icon: "v-icon notranslate mdi mdi-check-bold"
			}

			switch (type) {
				case "warning":
					this._vm.$toast.warning(text, Object.assign(_json,{icon:"v-icon notranslate mdi mdi-alert"}) );
					break;
				case "error":
					this._vm.$toast.error(text, Object.assign(_json,{icon:"v-icon notranslate mdi mdi-alert-circle"}) );
					break;
				default:
					this._vm.$toast.success(text,_json);
					break;
			}

		},


	},
	actions: {
		toast(context,agrs){
			context.commit("toast",agrs);
		},
	}
}