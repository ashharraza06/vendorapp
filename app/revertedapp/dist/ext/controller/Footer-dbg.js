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
            var comp_type = sap.ui.getCore().byId("revertedapp::complainsObjectPage--fe::FormContainer::ComplaintDetails::FormElement::DataField::ccomplain_about::Field").getValue();
            var username = new sap.ushell.services.UserInfo().getEmail();

            var testdata = JSON.stringify({
                complainno: compno,
                comments: comment,
                createdBy: username
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
                            let functionname1 = 'triggerProcess';
                            let oFunction1 = this.oView.getModel().bindContext(`/${functionname1}(...)`);
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
                            var testdata1 = JSON.stringify({
                                complainno: compno,
                                ccomplain_about: comp_type,
                              });
                            oFunction1.setParameter('data', testdata1);
                            oFunction1.setParameter('status', JSON.stringify({ status: '' }));
                            await oFunction1.execute();
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
                title: "Cancel",
                resizable: true,
                draggable: true,
                content: [
                    new sap.m.Label({ text: "Are you sure you want to cancel for approval?" })
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
