sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('revertedapp.ext.controller.ObjectPagecomplain', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf revertedapp.ext.controller.ObjectPagecomplain
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
				onAfterBinding:  function (oEvent) {
					debugger;
					var po = sap.ui.getCore().byId("revertedapp::complainsObjectPage--fe::FormContainer::ComplaintDetails::FormElement::DataField::cpono::Field").getValue();
					if (po == '-'){
						sap.ui.getCore().byId("revertedapp::complainsObjectPage--fe::FormContainer::ComplaintDetails::FormElement::DataField::cpono").setVisible(false);
					}
					var path = location.href;
					var compno = path.match(/\('(\d+-\d+)'\)/)[1];
					var add = this.base.getView().getContent()[0].getSections()[3].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[0].mBindingInfos.items.binding;
					add.filter(
						new sap.ui.model.Filter({
							path: "complaintno",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: compno
						})
					);
					
				}
			}
		}
	});
});
