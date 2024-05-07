sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/ushell/services/UserInfo'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('polist.ext.controller.Iistcontroller', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		onTableRefresh: function (oEvent) {
			debugger
		},
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf polist.ext.controller.Iistcontroller
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				debugger;
				sap.ui.getCore().byId("polist::poheaderList--fe::table::poheader::LineItem::StandardAction::Delete").setVisible(false);
			},
			onTableRefresh: function (oEvent) {
				debugger
			},
			onBeforeRebindTableExtension: function (oEvent) {

			},
			routing:
			{
				onBeforeBinding: function (oEvent) {
					debugger
					var oUserInfoService = sap.ushell.Container.getService("UserInfo");
					var oUser = oUserInfoService.getUser();
					var userEmail = oUser.getEmail();
					console.log("User Email:", userEmail);
					var vencode = userEmail;
					var filterVal = sap.ui.getCore().byId("polist::poheaderList--fe::FilterBar::poheader").getFilterConditions();
					filterVal.vendor[0].values[0] = vencode;
					sap.ui.getCore().byId("polist::poheaderList--fe::FilterBar::poheader").setFilterConditions(filterVal);
				}

			}
		}
	});
});
