sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        submit: async function (oEvent) {
            // MessageToast.show("Custom handler invoked.");
            debugger;
            var path = location.href;
            var compno = path.match(/\('(\d+-\d+)'\)/)[1];
            var comment = sap.ui.getCore().byId("revertedapp::complainsObjectPage--fe::CustomSubSection::Comments--ta").getValue();

            var testdata = JSON.stringify({
                complainno: compno,
                comments: comment
            });

            let functionname = 'submitcomplaints';
            let oFunction = this._view.getModel().bindContext(`/${functionname}(...)`);
            oFunction.setParameter('data', testdata);
            oFunction.setParameter('status', JSON.stringify({ status: 'postComment' }));

            var oDialog = new sap.m.Dialog({
                title: "Submit",
                resizable: true,
                draggable: true,
                content: [
                    new sap.m.Label({ text: "Are you sure you want to submit for approval?" })
                ],
                buttons: [
                    new sap.m.Button({
                        text: "Yes",
                        press: async function () {
                            debugger
                            await oFunction.execute();
                            var status = "Submitted";
                            let revtestdata = JSON.stringify({ complainno: compno, cstatus: status });
                            oFunction.setParameter('data', revtestdata);
                            oFunction.setParameter('status', JSON.stringify({ status: 'revsubmitted' }))
                            await oFunction.execute();
                            sap.m.MessageToast.show("Complain No " + compno + " sent for re-approval");
                            oDialog.close();
                            window.history.back();
                            // Reloading the previous page after a delay to ensure it loads after navigating back
                            setTimeout(function () {
                                location.reload();
                            }, 1000);

                        }
                    }),
                    new sap.m.Button({
                        text: "No",
                        press: function () {
                            oDialog.close();
                            sap.m.MessageToast.show("Cancelled");
                        }
                    })
                ]
            }).addStyleClass("myCustomDialogClass");

            oDialog.open();
        },
        cancel: function () {
            // MessageToast.show("Custom handler invoked.");
            var oDialog = new sap.m.Dialog({
                title: "Submit",
                resizable: true,
                draggable: true,
                content: [
                    new sap.m.Label({ text: "Are you sure you want to submit for approval?" })
                ],
                buttons: [
                    new sap.m.Button({
                        text: "Yes",
                        press: async function () {
                            debugger
                            oDialog.close();
                            MessageToast.show("Cancelled");
                            window.history.back();

                        }
                    }),
                    new sap.m.Button({
                        text: "No",
                        press: function () {
                            oDialog.close();
                            //   sap.m.MessageToast.show("Cancelled");
                        }
                    })
                ]
            }).addStyleClass("myCustomDialogClass");

            oDialog.open();
        }
    };
});
