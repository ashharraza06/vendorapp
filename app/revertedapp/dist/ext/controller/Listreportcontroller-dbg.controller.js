sap.ui.define(['sap/ui/core/mvc/ControllerExtension','sap/ushell/services/UserInfo'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('revertedapp.ext.controller.Listreportcontroller', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf revertedapp.ext.controller.Listreportcontroller
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
		routing:
			{
				onBeforeBinding: async function (oEvent) {
					debugger;
					var userEmail = new sap.ushell.services.UserInfo().getEmail();
					var panno = userEmail;
					let functionname = 'submitcomplaints';
					let oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
					var testdata = JSON.stringify({
						panno : panno 
					  });
					oFunction.setParameter('data', testdata);
					oFunction.setParameter('status', JSON.stringify({ status: 'getvendor' }));
					await oFunction.execute();
					let context = oFunction.getBoundContext();
					let getdata = context.getValue();
					let result = getdata.value;
					result = JSON.parse(result);
					var vencode = result[0].vencode
					var filterVal = sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").getFilterConditions();
					sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").getFilterConditions().cvencode[0].values[0];
					filterVal.cvencode[0].values[0] = vencode;
					sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").setFilterConditions(filterVal);
					sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains-btnSearch").firePress()
				},
				onAfterBinding: function (oEvent) {
					debugger;
				}
			}
		}
	});
});
