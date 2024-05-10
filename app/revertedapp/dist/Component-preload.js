//@ui5-bundle revertedapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"revertedapp/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("revertedapp.Component",{metadata:{manifest:"json"}})});
},
	"revertedapp/ext/controller/Footer.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{submit:async function(e){debugger;var t=location.href;var a=t.match(/\('(\d+-\d+)'\)/)[1];var s=sap.ui.getCore().byId("revertedapp::complainsObjectPage--fe::CustomSubSection::Comments--ta").getValue();var o=sap.ui.getCore().byId("revertedapp::complainsObjectPage--fe::FormContainer::ComplaintDetails::FormElement::DataField::ccomplain_about::Field").getValue();var n=(new sap.ushell.services.UserInfo).getEmail();var r=JSON.stringify({complainno:a,comments:s,createdBy:n});let i="submitcomplaints";let l=this._view.getModel().bindContext(`/${i}(...)`);l.setParameter("data",r);l.setParameter("status",JSON.stringify({status:"postComment"}));var u=new sap.m.Dialog({title:"Submit",resizable:true,draggable:true,content:[new sap.m.Label({text:"Are you sure you want to submit for approval?"})],buttons:[new sap.m.Button({text:"Yes",press:async function(){debugger;await l.execute();var e="Submitted";let t="triggerProcess";let s=this.oView.getModel().bindContext(`/${t}(...)`);let n=JSON.stringify({complainno:a,cstatus:e});l.setParameter("data",n);l.setParameter("status",JSON.stringify({status:"revsubmitted"}));await l.execute();sap.m.MessageToast.show("Complain No "+a+" sent for re-approval");u.close();window.history.back();setTimeout(function(){location.reload()},1e3);var r=JSON.stringify({complainno:a,ccomplain_about:o});s.setParameter("data",r);s.setParameter("status",JSON.stringify({status:""}));await s.execute()}}),new sap.m.Button({text:"No",press:function(){u.close();sap.m.MessageToast.show("Cancelled")}})]}).addStyleClass("myCustomDialogClass");u.open()},cancel:function(){var t=new sap.m.Dialog({title:"Cancel",resizable:true,draggable:true,content:[new sap.m.Label({text:"Are you sure you want to cancel for approval?"})],buttons:[new sap.m.Button({text:"Yes",press:async function(){debugger;t.close();e.show("Cancelled");window.history.back()}}),new sap.m.Button({text:"No",press:function(){t.close()}})]}).addStyleClass("myCustomDialogClass");t.open()}}});
},
	"revertedapp/ext/controller/Listreportcontroller.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/ushell/services/UserInfo"],function(e){"use strict";return e.extend("revertedapp.ext.controller.Listreportcontroller",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onBeforeBinding:function(e){debugger;var r=sap.ushell.Container.getService("UserInfo");var i=r.getUser();var t=i.getEmail();console.log("User Email:",t);var n=t;var o=sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").getFilterConditions();sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").getFilterConditions().cvencode[0].values[0];o.cvencode[0].values[0]=n;sap.ui.getCore().byId("revertedapp::complainsList--fe::FilterBar::complains").setFilterConditions(o)},onAfterBinding:function(e){debugger}}}})});
},
	"revertedapp/ext/controller/ObjectPagecomplain.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("revertedapp.ext.controller.ObjectPagecomplain",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:function(e){debugger;var t=location.href;var n=t.match(/\('(\d+-\d+)'\)/)[1];var i=this.base.getView().getContent()[0].getSections()[3].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[0].mBindingInfos.items.binding;i.filter(new sap.ui.model.Filter({path:"complaintno",operator:sap.ui.model.FilterOperator.EQ,value1:n}))}}}})});
},
	"revertedapp/ext/fragment/Attachemnts.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core"\n\txmlns="sap.m"\n\tdisplayBlock="true"\n\txmlns:macros="sap.fe.macros"\n\txmlns:upload="sap.m.upload"><VBox id = "revUploadVbox" class = "revAttachVBox"><upload:UploadSet id="uploadSet" core:require="{ handler: \'revertedapp/ext/fragment/Attachemnts\'}" instantUpload="false" uploadEnabled="true" showIcons="true" mode="None" afterItemAdded="handler.onAfterItemAdded" uploadCompleted="handler.onUploadCompleted" items="{\n\t\t\t\t\t\t\t\tpath: \'/files\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem id="ddd" fileName="{fileName}" mediaType="{mediaType}" url="{url}" thumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}" enabledEdit="false" openPressed="handler.onOpenPressed" removePressed="handler.onRemovePressed"><upload:attributes><ObjectAttribute id="dd" title="Uploaded By" text="{createdBy}" active="false" /><ObjectAttribute id="dd22" title="Uploaded on" text="{createdAt}" active="false" /><ObjectAttribute id="dddw2" title="File Type" text="{mediaType}" active="false" /><ObjectAttribute id="dd22a" title="File Size" text="{size}" active="false" /></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>',
	"revertedapp/ext/fragment/Attachemnts.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t;var a;debugger;return{onPress:function(t){e.show("Custom handler invoked.")},onAfterItemAdded:function(e){debugger;var n=location.href;t=n.match(/\('(\d+-\d+)'\)/)[1];var r=this._view.getModel().sServiceUrl;var o=e.getParameter("item");var i=function(e){debugger;var n={mediaType:e.getMediaType(),complaintno:t,fileName:e.getFileName(),size:e.getFileObject().size};var o={url:r+`files`,method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(n)};return new Promise((e,t)=>{$.ajax(o).done((t,n,r)=>{e(t.ID);debugger;a=t.ID}).fail(e=>{t(e)})})};i(o).then(e=>{var t=r+`files(${e})/content`;o.setUploadUrl(t);var a=this.byId("uploadSet");a.setHttpRequestMethod("PUT");a.uploadItem(o)}).catch(e=>{console.log(e)})},onUploadCompleted:async function(e){debugger;var t=this.byId("uploadSet");t.removeAllIncompleteItems();let n="submitcomplaints";var r=(new sap.ushell.services.UserInfo).getEmail();var o=this._view.getModel().bindContext(`/${n}(...)`);var i=JSON.stringify({uid:a,createdBy:r});o.setParameter("data",i);o.setParameter("status",JSON.stringify({status:"patchattach"}));await o.execute();t.getBinding("items").refresh()},onRemovePressed:function(t){debugger;t.preventDefault();t.getParameter("item").getBindingContext().delete();e.show("Selected file has been deleted")},onOpenPressed:function(e){debugger;e.preventDefault();var t=e.getSource();var a=t.getFileName();var n=this._view.getModel().sServiceUrl;n=n.replace("/odata/v4/my/","");var r=function(e){var t={url:n+e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})};r(t).then(e=>{var t=window.URL.createObjectURL(e);window.open(t,"_blank")}).catch(e=>{console.log(e)})},_download:function(e){debugger;var t={url:e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})},_createEntity:function(e){debugger;var a={mediaType:e.getMediaType(),complaintno:t,fileName:e.getFileName(),size:e.getFileObject().size};var n={url:"/attachments/files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(a)};return new Promise((e,t)=>{$.ajax(n).done((t,a,n)=>{e(t.ID);debugger}).fail(e=>{t(e)})})},_uploadContent:function(e,t){debugger;var a=`/attachments/Files(${t})/content`;e.setUploadUrl(a);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(e)},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"revertedapp/ext/fragment/Comments.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core"\n\txmlns="sap.m"\n\txmlns:macros="sap.fe.macros"><VBox id= "vv" class = "commentvbox" width="100%"><HBox id="buttonContainer" alignItems="End" justifyContent="End" width="100%"><Button id="rev_comm" class = "commentbtn" core:require="{ handler: \'revertedapp/ext/fragment/Comments\'}" text="Comments" press="handler.onPress" icon="sap-icon://comment" /></HBox><TextArea id="ta" rows="8" width="100%" placeholder="Write your comment" editable="true" class="commenthbox" /></VBox></core:FragmentDefinition>',
	"revertedapp/ext/fragment/Comments.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:async function(e){debugger;var t=new sap.m.Dialog({title:"Comments",endButton:new sap.m.Button({text:"Close",press:async function(){t.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})});t.addContent(new sap.m.VBox({width:"60vw"}));function a(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}debugger;var n=location.href;var s=n.match(/\('(\d+-\d+)'\)/)[1];var r=JSON.stringify({complainno:s});let o="submitcomplaints";debugger;let u=this.getModel().bindContext(`/${o}(...)`);u.setParameter("data",r);u.setParameter("status",JSON.stringify({status:"getComments"}));await u.execute();debugger;let i=u.getBoundContext();let m=i.getValue();let l=m.value;l=JSON.parse(l);var c=l.length;var g="https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png";for(var d=0;d<l.length;d++){var p=new sap.suite.ui.commons.TimelineItem("thisuniqid1"+a(),{dateTime:l[d].createdAt,userNameClickable:false,userNameClicked:"onUserNameClick",select:f,userPicture:g,text:l[d].comments,userName:l[d].createdBy});t.addContent(p)}var v;function f(e){debugger;v=e.getSource().mProperties.text;commnetbox.setValue(v);t.close()}t.open()}}});
},
	"revertedapp/i18n/i18n.properties":'# This is the resource bundle for revertedapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Vendor Inbox\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,48\nflpTitle=Vendor Inbox\n',
	"revertedapp/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"revertedapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.2","toolsId":"6c511a3f-9937-4759-9ed2-7369e3e0591a"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"revertedapp-display":{"semanticObject":"revertedapp","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.suite.ui.commons":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"revertedapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"routes":[{"pattern":":?query:","name":"complainsList","target":"complainsList"},{"pattern":"complains({key}):?query:","name":"complainsObjectPage","target":"complainsObjectPage"}],"targets":{"complainsList":{"type":"Component","id":"complainsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/complains","variantManagement":"Page","navigation":{"complains":{"detail":{"route":"complainsObjectPage"}}},"initialLoad":"Enabled","defaultTemplateAnnotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#table"}}},"complainsObjectPage":{"type":"Component","id":"complainsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/complains","navigation":{},"content":{"body":{"sections":{"Comments":{"template":"revertedapp.ext.fragment.Comments","position":{"placement":"After","anchor":"ComplaintDetails"},"title":"Comments","type":"XMLFragment"},"Attachemnts":{"template":"revertedapp.ext.fragment.Attachemnts","position":{"placement":"After","anchor":"Comments"},"title":"Attachments","type":"XMLFragment"}}},"footer":{"actions":{"submit":{"press":"revertedapp.ext.controller.Footer.submit","visible":true,"enabled":true,"text":"Submit"},"cancel":{"press":"revertedapp.ext.controller.Footer.cancel","visible":true,"enabled":true,"text":"Cancel","position":{"placement":"After","anchor":"submit"}}}}}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#revertedapp::complainsObjectPage":{"controllerName":"revertedapp.ext.controller.ObjectPagecomplain"},"sap.fe.templates.ListReport.ListReportController":{"controllerName":"revertedapp.ext.controller.Listreportcontroller"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"vendorapplication"}}'
}});
