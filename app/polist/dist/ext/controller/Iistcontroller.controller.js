sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/ushell/services/UserInfo"],function(e){"use strict";return e.extend("polist.ext.controller.Iistcontroller",{onTableRefresh:function(e){debugger},override:{onInit:function(){var e=this.base.getExtensionAPI().getModel();debugger;sap.ui.getCore().byId("polist::poheaderList--fe::table::poheader::LineItem::StandardAction::Delete").setVisible(false)},onTableRefresh:function(e){debugger},onBeforeRebindTableExtension:function(e){},routing:{onBeforeBinding:function(e){debugger;var o=sap.ushell.Container.getService("UserInfo");var r=o.getUser();var t=r.getEmail();console.log("User Email:",t);var i=t;var n=sap.ui.getCore().byId("polist::poheaderList--fe::FilterBar::poheader").getFilterConditions();n.vendor[0].values[0]=i;sap.ui.getCore().byId("polist::poheaderList--fe::FilterBar::poheader").setFilterConditions(n)}}}})});