sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:async function(e){debugger;var t=new sap.m.Dialog({title:"Comments",endButton:new sap.m.Button({text:"Close",press:async function(){t.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})});t.addContent(new sap.m.VBox({width:"60vw"}));function a(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}debugger;var n=location.href;var s=n.match(/\('(\d+-\d+)'\)/)[1];var o=JSON.stringify({complainno:s});let r="submitcomplaints";debugger;let i=this.getModel().bindContext(`/${r}(...)`);i.setParameter("data",o);i.setParameter("status",JSON.stringify({status:"getComments"}));await i.execute();debugger;let u=i.getBoundContext();let l=u.getValue();let m=l.value;m=JSON.parse(m);var g=m.length;for(var c=0;c<m.length;c++){var d=new sap.suite.ui.commons.TimelineItem("thisuniqid1"+a(),{dateTime:m[c].createdAt,userNameClickable:false,select:p,text:m[c].comments});t.addContent(d)}var f;function p(e){debugger;f=e.getSource().mProperties.text;commnetbox.setValue(f);t.close()}t.open()}}});