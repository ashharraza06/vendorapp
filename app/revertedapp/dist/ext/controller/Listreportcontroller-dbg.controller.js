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
				onBeforeBinding: function (oEvent) {
					debugger;
					var oUserInfoService = sap.ushell.Container.getService("UserInfo");
						var oUser = oUserInfoService.getUser();
						var userEmail = oUser.getEmail();
						console.log("User Email:", userEmail);
						var vencode = userEmail;
					var filterVal = sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").getFilterConditions();
					sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").getFilterConditions().cvencode[0].values[0];
					filterVal.cvencode[0].values[0] = vencode;
					sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").setFilterConditions(filterVal);
				},
				onAfterBinding: function (oEvent) {
					debugger;
				}
			}
		}
	});
});
