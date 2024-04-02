//@ui5-bundle compnav/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"compnav/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("compnav.Component",{metadata:{manifest:"json"}})});
},
	"compnav/ext/fragment/Attachments.fragment.xml":'\n<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"\ndisplayBlock="true"\nxmlns:mvc="sap.ui.core.mvc"\n\txmlns:upload="sap.m.upload"><VBox id= "11" ><upload:UploadSet\n\t\t\t\t\t\n\t\t\t\t\tid="uploadSet"\n\t\t\t\t\tcore:require="{ handler: \'compnav/ext/fragment/Attachments\'}"\n\t\t\t\t\tinstantUpload="false"\n\t\t\t\t\tuploadEnabled="true"\n\t\t\t\t\tuploadButtonInvisible= "true"\n\t\t\t\t\tshowIcons="true"\n\t\t\t\t\tmode="None"\n\t\t\t\t\tafterItemAdded="handler.onAfterItemAdded"\n\t\t\t\t\tuploadCompleted="handler.onUploadCompleted"\n\t\t\t\t\titems="{\n\t\t\t\t\t\t\t\tpath: \'/files\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"\n\t\t\t\t><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem\n\t\t\t\t\t\tid="ddd"\n\t\t\t\t\t\t\tfileName="{fileName}"\n\t\t\t\t\t\t\tmediaType="{mediaType}"\n\t\t\t\t\t\t\turl="{url}"\n\t\t\t\t\t\t\tthumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}"\n\t\t\t\t\t\t\tenabledEdit="false"\n\t\t\t\t\t\t\topenPressed="handler.onOpenPressed"\n\t\t\t\t\t\t\tremovePressed="handler.onRemovePressed"\n\t\t\t\t\t\t\tvisibleEdit="false"\n\t\t\t\t\t\t\tvisibleRemove="false"\n\t\t\t\t\t\t\tenabledRemove="false"\n\t\t\t\t\t\t><upload:attributes><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded By"\n\t\t\t\t\t\t\t\t\ttext="{createdBy}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded on"\n\t\t\t\t\t\t\t\t\ttext="{createdAt}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dddw2"\n\n\t\t\t\t\t\t\t\t\ttitle="File Type"\n\t\t\t\t\t\t\t\t\ttext="{mediaType}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22a"\n\t\t\t\t\t\t\t\t\ttitle="File Size"\n\t\t\t\t\t\t\t\t\ttext="{size}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>\n',
	"compnav/ext/fragment/Attachments.js":function(){sap.ui.define(["sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/core/Item","sap/m/MessageToast"],function(e){"use strict";var t=this;let a=[];return{onPress:function(e){debugger},onAfterItemAdded:function(e){debugger;var t=e.getParameter("item");var n=function(e){debugger;var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var n={url:"/odata/v4/my/files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(n).done((t,n,o)=>{e(t.ID);debugger;a.push(t.ID)}).fail(e=>{t(e)})})};n(t).then(e=>{var a=`/odata/v4/my/files(${e})/content`;t.setUploadUrl(a);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(t)}).catch(e=>{console.log(e)})},onUploadCompleted:function(e){var t=this.byId("uploadSet");t.removeAllIncompleteItems();t.getBinding("items").refresh()},onRemovePressed:function(t){t.preventDefault();t.getParameter("item").getBindingContext().delete();e.show("Selected file has been deleted")},onOpenPressed:function(e){debugger;e.preventDefault();var t=e.getSource();var a=t.getFileName();var n=this._view.getModel().sServiceUrl;n=n.replace("/odata/v4/my/","");var o=function(e){var t={url:e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})};o(t).then(e=>{var t=window.URL.createObjectURL(e);window.open(t,"_blank")}).catch(e=>{console.log(e)})},_download:function(e){var t={url:e.getUrl(),method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})},_createEntity:function(e){var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var n={url:"/attachments/files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(n).done((t,n,o)=>{e(t.ID);debugger;a.push(t.ID)}).fail(e=>{t(e)})})},_uploadContent:function(e,t){var a=`/attachments/Files(${t})/content`;e.setUploadUrl(a);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(e)},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"compnav/i18n/i18n.properties":'# This is the resource bundle for compnav\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Complaint\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,27\nflpTitle=complaint\n',
	"compnav/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"compnav","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.1","toolsId":"8ef4a436-6c47-4df6-a2f9-1f0289d0a3e9"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"compnav-display":{"semanticObject":"compnav","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"compnav.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":"complains({key}):?query:","name":"complainsObjectPage","target":"complainsObjectPage"}],"targets":{"complainsObjectPage":{"type":"Component","id":"complainsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/complains","navigation":{},"allowDeepLinking":true,"content":{"body":{"sections":{"Attachments":{"template":"compnav.ext.fragment.Attachments","position":{"placement":"After","anchor":"ComplaintDetails"},"title":"Attachments","type":"XMLFragment"}}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"vendorapplication"}}'
}});
