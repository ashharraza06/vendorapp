sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";
    var vencode;
    var pono;
    var pannum;
    var comp_type;
    var desc;
    var currentStep;
    return Controller.extend("vendrcmplain.controller.App", {
      onInit: function (oEvent) {
        debugger
        this._wizard = this.byId("VendorComplain");
        this._oNavContainer = this.byId("wizardNavContainer");
        this._oWizardContentPage = this.byId("wizardContentPage");
        oEvent.oSource.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false);
        // var wizardd = this.byId("VendorComplain");
        // let steps = wizardd.getSteps()
        // wizardd.setCurrentStep(steps[3]);
        // var oModel = this.getView().getModel("device");
        //   var sDesiredVendorCode = 'VEN222';
        // oModel.setProperty("/desiredVendorCode", sDesiredVendorCode);
        // this._handleNavigationToStep(1);
        // sap.ui.getCore().byId("container-vendrcmplain---App--ComplainCreationStep-nextButton").setVisible(false);
        // sap.ui.getCore().byId("container-vendrcmplain---App--revbtn").setVisible(false); 
        // sap.ui.getCore().byId("__button0").setVisible(false);
        // if (currentStep == 3) {
        //   // this._wizard.goToStep(this._wizard.getSteps()[currentStep]);
        //   // this._handleNavigationToStep(2);

        //   // this._wizard.setCurrentStep(this.byId("ComplainCreationStep"));
        //   this.byId("VendorComplain").nextStep();
        //   this.byId("VendorComplain").nextStep();
        // }


      },
      StepOne: function (oEvent) {
        debugger;
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false);
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[2].setVisible(false)
        // sap.ui.getCore().byId("__button0").setVisible(false);
        // sap.ui.getCore().byId("container-vendrcmplain---App--subbtn").setVisible(false);
        // if (vencode === null || typeof vencode === 'undefined') {
        //   // this._wizard.setCurrentStep(this.byId("PanStep"));
        //   // this.model.setProperty("/panTable", "Error");
        //   this._wizard.invalidateStep(this.byId("PanStep"));
        // }
        // else {
        //   // this.model.setProperty("/panTable", "None");
        //   this._wizard.validateStep(this.byId("PanStep"));
        // }

      },
      StepTwo: function (oEvent) {
        debugger
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false)
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[2].setVisible(false)
        // sap.ui.getCore().byId("container-vendrcmplain---App--subbtn").setVisible(false);

        // var path = sap.ui.getCore().byId("container-vendrcmplain---App--PoStep").mAggregations.content[0].mBindingInfos.items.binding;

        // path.filter(
        //   new sap.ui.model.Filter({
        //     path: "vendor",
        //     operator: sap.ui.model.FilterOperator.EQ,
        //     value1: vencode
        //   })
        // );
        // // this._handleNavigationToStep(1);

      },
      StepThree: function (oEvent) {
        debugger
        // sap.ui.getCore().byId("container-vendrcmplain---App--subbtn").setVisible(false);
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(true);
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[2].setVisible(false);
        // sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[1].setText(vencode);
        // sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[3].setText(pono);
        // oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[2].mAggregations.items[1].setText(vencode);
        // oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[2].mAggregations.items[3].setText(pono);
        // oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[0].mAggregations.sections[1].mAggregations._grid.mAggregations.content[0].oParent.oParent.mAggregations._grid.mAggregations.content[0].mAggregations.blocks[0].mAggregations.items[1].setText(vencode);
        // oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[0].mAggregations.sections[1].mAggregations._grid.mAggregations.content[0].oParent.oParent.mAggregations._grid.mAggregations.content[0].mAggregations.blocks[0].mAggregations.items[3].setText(pono);
        // oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.customData[0].oParent.mAggregations.content[0].mAggregations.sections[1].mForwardedAggregations.subSections[0]._aAggregationProxy.blocks[0].mAggregations.items[1].setText(vencode);
        // oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.customData[0].oParent.mAggregations.content[0].mAggregations.sections[1].mForwardedAggregations.subSections[0]._aAggregationProxy.blocks[0].mAggregations.items[3].setText(pono); 
        this.byId("vencode").setText(vencode);
        this.byId("pono").setText(pono);

        // desc = oEvent.oSource.mAggregations._counter.oParent.oParent.mAggregations.items[7].getValue();
        // if (!desc) {
        //   this._wizard.setCurrentStep(this.byId("ComplainCreationStep"));
        //   this._wizard.invalidateStep(this.byId("ComplainCreationStep"));
        // }
        // else {
        //   this._wizard.validateStep(this.byId("ComplainCreationStep"));
        // }

      },
      textchange: function (oEvent) {
        debugger
        desc = this.byId("textcomp").getValue();
        var key = oEvent.oSource.oParent.mAggregations.items[5].mProperties.selectedKey;
        let arr = oEvent.oSource.oParent.mAggregations.items[5].mForwardedAggregations.items;
        for (var i = 0; i < 5; i++) {
          var ikey = arr[i].mProperties.key;
          if (key == ikey) {
            comp_type = arr[i].mProperties.text;
            break;
          }
        }
        this.byId("typ_val").setText(comp_type);
        this.byId("dsc_val").setValue(desc);
      },
      StepFour: function (oEvent) {
        debugger
        desc = this.byId("textcomp").getValue();
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false);
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[2].setVisible(true);
        // sap.ui.getCore().byId("container-vendrcmplain---App--subbtn").setVisible(true);
        // var key = oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[2].mAggregations.items[5].mProperties.selectedKey
        // let arr = oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[2].mAggregations.items[5].mForwardedAggregations.items
        // var key = sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[5].mProperties.selectedKey;
        // let arr = sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[5].mForwardedAggregations.items;
        // var key = oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[0].mAggregations.sections[1].mForwardedAggregations.subSections[0].oParent.oParent.mForwardedAggregations.subSections[0]._aAggregationProxy.blocks[0].mAggregations.items[5].mProperties.selectedKey
        // let arr = oEvent.oSource.oParent.mAggregations.steps[2].mAggregations.content[0].mAggregations.sections[1].mForwardedAggregations.subSections[0].oParent.oParent.mForwardedAggregations.subSections[0]._aAggregationProxy.blocks[0].mAggregations.items[5].mForwardedAggregations.items
        // for (var i = 0; i < 5; i++) {
        //   var ikey = arr[i].mProperties.key;
        //   if (key == ikey) {
        //     comp_type = arr[i].mProperties.text;
        //     break;
        //   }
        // }
        // this._oNavContainer.to(this.byId("wizardReviewPage"));
        // var path = oEvent.oSource.oParent.mAggregations.steps[3].mAggregations.content[0].mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].mBindingInfos.items.binding;
        // var path = sap.ui.getCore().byId("container-vendrcmplain---App--rev1hbox").mAggregations.items[0].mBindingInfos.items.binding;
        // var path = oEvent.oSource.oParent.mAggregations.steps[3].mAggregations.content[0].mAggregations.sections[0].mAggregations._grid.mAggregations.content[0].mAggregations.blocks[0].mAggregations.items[0].mAggregations.items[0].mBindingInfos.items.binding;
        var path = this.byId("revpanTable").mBindingInfos.items.binding;
        path.filter(
          new sap.ui.model.Filter({
            path: "vencode",
            operator: sap.ui.model.FilterOperator.EQ,
            value1: vencode
          })
        );
        // var path = oEvent.oSource.oParent.mAggregations.steps[3].mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].mAggregations.items[0].mBindingInfos.items.binding;
        // var path = sap.ui.getCore().byId("container-vendrcmplain---App--rev2hbox").mAggregations.items[0].mBindingInfos.items.binding;
        // var path = oEvent.oSource.oParent.mAggregations.steps[3].mAggregations.content[0].mAggregations.sections[1].mAggregations._grid.mAggregations.content[0].mAggregations.blocks[0].mAggregations.items[0].mAggregations.items[0].mBindingInfos.items.binding;
        var path = this.byId("revPoTable").mBindingInfos.items.binding;
        path.filter(
          new sap.ui.model.Filter({
            path: "pono",
            operator: sap.ui.model.FilterOperator.EQ,
            value1: pono
          })
        );

        this.byId("pan_val").setText(pannum);
        this.byId("ven_val").setText(vencode);
        this.byId("po_val").setText(pono);
        this.byId("typ_val").setText(comp_type);
        this.byId("dsc_val").setValue(desc);
      },
      editStepOne: function () {
        debugger
        this._handleNavigationToStep(0);
      },
      editStepTwo: function () {
        debugger
        this._handleNavigationToStep(1);
      },
      handleWizardBack: function () {
        debugger
        this._handleNavigationToStep(2);
      },
      onListPressed: async function (oEvent) {
        debugger
        currentStep = this._wizard.getProgress();
        this._oNavContainer.to(this.byId("wizardReviewPage"));
        // var href_For_Product_display = await sap.ushell.Container.getServiceAsync("Navigation");

        // href_For_Product_display.navigate({
        //   target: { semanticObject: "compnav", action: "display" },
        //   params: { "complainno": "1711530148386-360672" }
        // });

      },
      // change: function () {
      //   debugger
      //   var title = sap.ui.getCore().byId("container-vendrcmplain---App--PanStep").mProperties.title
      //   // if (title == "PAN Details"){
      //   //   var details = sap.ui.getCore().byId("container-vendrcmplain---App--panTable")._aSelectedPaths
      //   // }
      //   var path = sap.ui.getCore().byId("container-vendrcmplain---App--PoStep").mAggregations.content[0].mBindingInfos.items.binding;
      //   // oTable.getBinding("items").filter(oFilter);
      //   path.filter(
      //     new sap.ui.model.Filter({
      //       path: "vendor",
      //       operator: sap.ui.model.FilterOperator.EQ,
      //       value1: vencode
      //     })
      //   );
      //   sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[1].setText(vencode);
      //   sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[3].setText(pono);
      // },
      reviewPress: function () {
        this._wizard.setCurrentStep(this.byId("ReviewStep"));
      },
      panrowchange: function (oEvent) {
        debugger;
        this.byId("textcomp").setValue("");
        this._wizard.setCurrentStep(this.byId("PanStep"));
        vencode = oEvent.mParameters.listItems[0].mAggregations.cells[1].mProperties.text;
        pannum = oEvent.mParameters.listItems[0].mAggregations.cells[0].mProperties.text;
        if (vencode === null || typeof vencode === 'undefined') {
          // this._wizard.setCurrentStep(this.byId("PanStep"));
          // this.model.setProperty("/panTable", "Error");
          this._wizard.invalidateStep(this.byId("PanStep"));
        }
        else {
          // this.model.setProperty("/panTable", "None");
          this._wizard.validateStep(this.byId("PanStep"));


        }
        // this.byId("PoStep").mAggregations.content[0].getBinding("items").refresh();
        // this.byId("PoStep").mAggregations.content[0].refreshAggregation;
        // this.byId("PoStep").mAggregations.content[0].refreshItems;

        var path = this.byId("PoStep").mAggregations.content[0].mBindingInfos.items.binding;

        path.filter(
          new sap.ui.model.Filter({
            path: "vendor",
            operator: sap.ui.model.FilterOperator.EQ,
            value1: vencode
          })
        );
        this.byId("VendorComplain").nextStep()

        // this.getView().byId('CreateProductWizard').setCurrentStep(1);
      },
      porowchange: function (oEvent) {
        debugger;
        // this.byId("textcomp").setValue("");
        this._wizard.setCurrentStep(this.byId("PoStep"));
        pono = oEvent.mParameters.listItems[0].mAggregations.cells[0].mProperties.text;
        if (pono === null || typeof pono === 'undefined') {
          // this._wizard.setCurrentStep(this.byId("PanStep"));
          // this.model.setProperty("/panTable", "Error");
          this._wizard.invalidateStep(this.byId("PoStep"));
        }
        else {
          // this.model.setProperty("/panTable", "None");
          this._wizard.validateStep(this.byId("PoStep"));
        }
        this.byId("VendorComplain").nextStep()

      },
      onPress: function (oEvent) {
        debugger
      },
      wizardCompletedHandler: function () {
        debugger;
        // var key = sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[5].mProperties.selectedKey;
        // let arr = sap.ui.getCore().byId("container-vendrcmplain---App--mainvbox").mAggregations.items[5].mForwardedAggregations.items;
        // for (var i = 0; i < 5; i++) {
        //   var ikey = arr[i].mProperties.key;
        //   if (key == ikey) {
        //     comp_type = arr[i].mProperties.text;
        //     break;
        //   }
        // }
        // this._oNavContainer.to(this.byId("wizardReviewPage"));
        // // var path = 
        // var path = sap.ui.getCore().byId("container-vendrcmplain---App--rev1hbox").mAggregations.items[0].mBindingInfos.items.binding;
        // path.filter(
        //   new sap.ui.model.Filter({
        //     path: "vencode",
        //     operator: sap.ui.model.FilterOperator.EQ,
        //     value1: vencode
        //   })
        // );
        // var path = sap.ui.getCore().byId("container-vendrcmplain---App--rev2hbox").mAggregations.items[0].mBindingInfos.items.binding;
        // path.filter(
        //   new sap.ui.model.Filter({
        //     path: "pono",
        //     operator: sap.ui.model.FilterOperator.EQ,
        //     value1: pono
        //   })
        // );

        // this.byId("pan_val").setText(pannum);
        // this.byId("ven_val").setText(vencode);
        // this.byId("po_val").setText(pono);
        // this.byId("typ_val").setText(comp_type);
        // this.byId("dsc_val").setValue(desc);

      },
      _handleNavigationToStep: function (iStepNumber) {
        var fnAfterNavigate = function () {
          this._wizard.goToStep(this._wizard.getSteps()[iStepNumber]);
          this._oNavContainer.detachAfterNavigate(fnAfterNavigate);
        }.bind(this);

        this._oNavContainer.attachAfterNavigate(fnAfterNavigate);
        this.backToWizardContent();
      },
      backToWizardContent: function () {
        this._oNavContainer.backToPage(this._oWizardContentPage.getId());
      },
      handleWizardCancel: function (oEvent) {
        debugger
        // MessageToast.show("Custom handler invoked.");
        var oDialog = new sap.m.Dialog({
          title: "Sumbit",
          resizable: true,
          draggable: true,
          content: [
            new sap.m.Label({ text: "Are you sure you want to cancel?" })
          ],
          buttons: [
            new sap.m.Button({
              text: "Yes",
              press: function () {
                debugger;
                oDialog.close();
                sap.m.MessageToast.show("Cancelled");

                this._handleNavigationToStep(0);
                location.reload();
                this._wizard.discardProgress(this._wizard.getSteps()[0]);

              }.bind(this)
            }),
            new sap.m.Button({
              text: "No",
              press: function () {
                oDialog.close();
                // sap.m.MessageToast.show("Cancelled");
              }
            })
          ]
        }).addStyleClass("myCustomDialogClass");

        oDialog.open();
      },
      handleWizardSubmit: function (oEvent) {
        debugger
        // MessageToast.show("Custom handler invoked.");
        var oDialog = new sap.m.Dialog({
          title: "Sumbit",
          resizable: true,
          draggable: true,
          content: [
            new sap.m.Label({ text: "Are you sure you want to submit?" })
          ],
          buttons: [
            new sap.m.Button({
              text: "Yes",
              press: function () {
                debugger
                oDialog.close();
                sap.m.MessageToast.show("Saved successfully");
                this._handleNavigationToStep(0);
                this._wizard.discardProgress(this._wizard.getSteps()[0]);

              }.bind(this)
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
      discardProgress: function () {
        debugger
        this._wizard.discardProgress(this.byId("PanStep"));

        var clearContent = function (content) {
          for (var i = 0; i < content.length; i++) {
            if (content[i].setValue) {
              content[i].setValue("");
            }

            if (content[i].getContent) {
              clearContent(content[i].getContent());
            }
          }
        };
        clearContent(this._wizard.getSteps());
      },
      // *******************comments***************************************************
      comments : function(oEvent) {
                debugger
                var cdialog = new sap.m.Dialog({
                    title: "Comments",
                    endButton: new sap.m.Button({
                        text: "Close",
                        press: async function() {
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
                    width:"60vw"
                }));
    
                function generateUniqueId() {
                    // Generate a random number
                    var randomNumber = Math.floor(Math.random() * 1000000);
    
                    // Get the current timestamp
                    var timestamp = new Date().getTime();
    
                    // Combine timestamp and random number to create a unique ID
                    var uniqueId = timestamp + '-' + randomNumber;
    
                    return uniqueId;
                }
                debugger
                var oTimelineItem = new sap.suite.ui.commons.TimelineItem("thisuniqid1" + generateUniqueId(), {
                    dateTime: "12/3/34",
                    // title: "demo title1",
                    userNameClickable: false,
                    // userNameClicked: "onUserNameClick",
                    // select: "onPressItems",
                    // userPicture: "Photo",
                    text: 'Demo Comments',
                    userName: "Comments"
                });
                cdialog.addContent(oTimelineItem);
                cdialog.open(); // Open the dialog
            }
  

      //     **********************upload attachments****************************************************
      //   onAfterItemAdded: function (oEvent) {
      //     debugger;
      //     var url1 = this._view.getModel().sServiceUrl
      //     // var url1 = `/odata/v4/my/`
      //     var item = oEvent.getParameter("item");

      //     var _createEntity = function (item) {
      //         debugger;
      //         var data = {
      //             mediaType: item.getMediaType(),
      //             fileName: item.getFileName(),
      //             size: item.getFileObject().size             
      //         };

      //         var settings = {
      //             // url: "/odata/v4/my/files",
      //             url: url1 + `files`,
      //             method: "POST",
      //             headers: {
      //                 "Content-type": "application/json"
      //             },
      //             data: JSON.stringify(data)
      //         };

      //         return new Promise((resolve, reject) => {
      //             $.ajax(settings)
      //                 .done((results, textStatus, request) => {
      //                     resolve(results.ID);
      //                     debugger
      //                     arr.push(results.ID);
      //                 })
      //                 .fail((err) => {
      //                     reject(err);
      //                 });
      //         });
      //     };

      //     _createEntity(item)
      //         .then((id) => {
      //             // var url = `/odata/v4/my/files(${id})/content`;
      //             var url = url1 + `files(${id})/content`
      //             item.setUploadUrl(url);
      //             var oUploadSet = this.byId("uploadSet");
      //             oUploadSet.setHttpRequestMethod("PUT");
      //             oUploadSet.uploadItem(item);
      //         })
      //         .catch((err) => {
      //             console.log(err);
      //         });
      // },

      // onUploadCompleted: function (oEvent) {
      //     debugger
      //     var oUploadSet = this.byId("uploadSet");
      //     oUploadSet.removeAllIncompleteItems();
      //     oUploadSet.getBinding("items").refresh();
      // },

      // onRemovePressed: function (oEvent) {
      //     debugger
      //     oEvent.preventDefault();
      //     oEvent.getParameter("item").getBindingContext().delete();
      //     MessageToast.show("Selected file has been deleted");
      // },

      // onOpenPressed: function (oEvent) {
      //     debugger;
      //     oEvent.preventDefault();
      //     var item = oEvent.getSource();
      //     var fileName = item.getFileName();
      //     var url2 = this._view.getModel().sServiceUrl
      //     url2 = url2.replace('/odata/v4/my/', '');
      //     // var url2 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oBindingContexts.undefined.oModel.sServiceUrl

      //     var _download = function(item) {
      //       var settings = {
      //         url: url2 + item.getUrl(),
      //         method: "GET",
      //         headers: {
      //           "Content-type": "application/octet-stream"
      //         },
      //         xhrFields: {
      //           responseType: 'blob'
      //         }
      //       };

      //       return new Promise((resolve, reject) => {
      //         $.ajax(settings)
      //           .done((result) => {
      //             resolve(result);
      //           })
      //           .fail((err) => {
      //             reject(err);
      //           });
      //       });
      //     };

      //     _download(item)
      //       .then((blob) => {
      //         var url = window.URL.createObjectURL(blob);
      //         // Open the URL in a new tab
      //         window.open(url, '_blank');
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      // },


      // _download: function (item) {
      //     debugger;
      //     var settings = {
      //         url: item.getUrl(),
      //         method: "GET",
      //         headers: {
      //             "Content-type": "application/octet-stream"
      //         },
      //         xhrFields: {
      //             responseType: 'blob'
      //         }
      //     }

      //     return new Promise((resolve, reject) => {
      //         $.ajax(settings)
      //             .done((result) => {
      //                 resolve(result)
      //             })
      //             .fail((err) => {
      //                 reject(err)
      //             })
      //     });
      // },

      // _createEntity: function (item) {
      //     debugger
      //     var data = {
      //         mediaType: item.getMediaType(),
      //         fileName: item.getFileName(),
      //         size: item.getFileObject().size
      //     };

      //     var settings = {
      //         url: "/attachments/files",
      //         method: "POST",
      //         headers: {
      //             "Content-type": "application/json"
      //         },
      //         data: JSON.stringify(data)
      //     }

      //     return new Promise((resolve, reject) => {
      //         $.ajax(settings)
      //             .done((results, textStatus, request) => {
      //                 resolve(results.ID);
      //                 debugger
      //                 arr.push(results.ID);
      //             })
      //             .fail((err) => {
      //                 reject(err);
      //             })
      //     })
      // },

      // _uploadContent: function (item, id) {
      //     debugger
      //     var url = `/attachments/Files(${id})/content`
      //     item.setUploadUrl(url);
      //     var oUploadSet = this.byId("uploadSet");
      //     oUploadSet.setHttpRequestMethod("PUT")
      //     oUploadSet.uploadItem(item);
      // },

      // //formatters
      // formatThumbnailUrl: function (mediaType) {
      //     var iconUrl;
      //     switch (mediaType) {
      //         case "image/png":
      //             iconUrl = "sap-icon://card";
      //             break;
      //         case "text/plain":
      //             iconUrl = "sap-icon://document-text";
      //             break;
      //         case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      //             iconUrl = "sap-icon://excel-attachment";
      //             break;
      //         case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      //             iconUrl = "sap-icon://doc-attachment";
      //             break;
      //         case "application/pdf":
      //             iconUrl = "sap-icon://pdf-attachment";
      //             break;
      //         default:
      //             iconUrl = "sap-icon://attachment";
      //     }
      //     return iconUrl;
      // }
    });
  });
