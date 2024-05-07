sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onPress: async function (oEvent) {
            // MessageToast.show("Custom handler invoked.");
            debugger;
            var cdialog = new sap.m.Dialog({
                title: "Comments",
                endButton: new sap.m.Button({
                    text: "Close",
                    press: async function () {
                        cdialog.close();
                    },
                    layoutData: new sap.m.FlexItemData({
                        // Add layoutData for flexible item behavior
                        growFactor: 5,
                        alignSelf: "End" // Align the button to the end (right)
                    })
                })
            });
            cdialog.addContent(new sap.m.VBox({
                width: "60vw"
            }));

            function generateUniqueId() {
                var randomNumber = Math.floor(Math.random() * 1000000);
                var timestamp = new Date().getTime();
                var uniqueId = timestamp + '-' + randomNumber;
                return uniqueId;
            }
            debugger
            //   var getcomp = this.byId("comp_valvw").getText()
            var path = location.href;
            var getcomp = path.match(/\('(\d+-\d+)'\)/)[1];
            var testdata = JSON.stringify({
                complainno: getcomp
            });
            let functionname = 'submitcomplaints';
            debugger
            let oFunction = this.getModel().bindContext(`/${functionname}(...)`);
            oFunction.setParameter('data', testdata);
            oFunction.setParameter('status', JSON.stringify({ status: 'getComments' }));
            await oFunction.execute();
            debugger

            let context = oFunction.getBoundContext();
            let getdata = context.getValue();
            let result = getdata.value;
            result = JSON.parse(result);
            var len = result.length;
            for (var i = 0; i < result.length; i++) {
                var oTimelineItem = new sap.suite.ui.commons.TimelineItem("thisuniqid1" + generateUniqueId(), {
                    dateTime: result[i].createdAt,
                    // title: "demo title1",
                    userNameClickable: false,
                    // userNameClicked: "onUserNameClick",
                    select: onPressItems,
                    // userPicture: "Photo",
                    text: result[i].comments
                    // userName: result[i].CREATEDBY
                });
                cdialog.addContent(oTimelineItem);
            }
            var t;
            function onPressItems(oEvent) {
                debugger
                // Get the clicked timeline item
                t = oEvent.getSource().mProperties.text;
                commnetbox.setValue(t);
                cdialog.close();
            }

            cdialog.open();
        }

    };
});
