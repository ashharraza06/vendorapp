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
				debugger;

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
				onBeforeBinding: async function (oEvent) {
					debugger
					var userEmail = new sap.ushell.services.UserInfo().getEmail();
					var panno = userEmail;
					let functionname = 'submitcomplaints';
					let oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
					var testdata = JSON.stringify({
						panno: panno
					});
					oFunction.setParameter('data', testdata);
					oFunction.setParameter('status', JSON.stringify({ status: 'getvendor' }));
					await oFunction.execute();
					debugger
					let context = oFunction.getBoundContext();
					let getdata = context.getValue();
					let result = getdata.value;
					result = JSON.parse(result);
					var vencode = result[0].vencode
					var filterVal = sap.ui.getCore().byId("polist::poheaderList--fe::FilterBar::poheader").getFilterConditions();
					filterVal.vendor[0].values[0] = vencode;
					sap.ui.getCore().byId("polist::poheaderList--fe::FilterBar::poheader").setFilterConditions(filterVal);
					sap.ui.getCore().byId("polist::poheaderList--fe::FilterBar::poheader-btnSearch").firePress()
				}

			}
		}
	});
});
