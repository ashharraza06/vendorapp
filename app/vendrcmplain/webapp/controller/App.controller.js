sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ushell/services/UserInfo"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Filter, FilterOperator, UserInfo) {
    "use strict";
    var pokey;
    var vencode;
    var pono;
    var pannum;
    var comp_type;
    var desc;
    var status;
    var day;
    var compno;
    var commnetbox;
    var username1 = new sap.ushell.services.UserInfo().getEmail();
    var uid;
    let filesids = [];
    return Controller.extend("vendrcmplain.controller.App", {
      onInit: async function (oEvent) {
        debugger

        let functionname = 'submitcomplaints';
        let oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
        var testdata = JSON.stringify({
          panno: username1
        });
        oFunction.setParameter('data', testdata);
        oFunction.setParameter('status', JSON.stringify({ status: 'getvendor' }));
        await oFunction.execute();
        debugger

        let context = oFunction.getBoundContext();
        let getdata = context.getValue();
        let result = getdata.value;
        result = JSON.parse(result);
        vencode = result[0].vencode

        debugger
        this.byId("screen1").attachBrowserEvent("click", function (oEvent) {
          porowchange(oEvent);
        });
        // this._handleNavigationToStep(1);
        var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
          usage: "screen1", async: true, manifest: true
        });
        ocustomerDetailContainer.then(
          function (ocustomerDetail) {
            debugger
            this.byId("screen1").setComponent(ocustomerDetail);
            this._customerDetailContainer = ocustomerDetail;
          }.bind(this)
        );

        // //this.byId("PanStep").setNextStep(this.getView().byId("PoStep"));
        this._wizard = this.byId("VendorComplain");
        this._oNavContainer = this.byId("wizardNavContainer");
        this._oWizardContentPage = this.byId("wizardContentPage");
        oEvent.oSource.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false);



      },
      b: function (oEvent) {
        debugger
      },
      // //StepOne: function (oEvent) {
      // // debugger;
      //   oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false);
      //   oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[2].setVisible(false)
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

      // },
      StepTwo: function (oEvent) {
        debugger
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false)
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[3].setVisible(false)
        // sap.ui.getCore().byId("container-vendrcmplain---App--subbtn").setVisible(false);
        // this.byId("textcomp").setRequired(true);
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
        sap.ui.getCore().byId("application-vednorinfor-Display-component---App--step2").setVisible(false);
        var selectedpo = sap.ui.getCore().byId("polist::poheaderList--fe::table::poheader::LineItem-innerTable")._aSelectedPaths[0];
        if (selectedpo !== null && typeof selectedpo !== 'undefined' && pono !== "-") {
          pono = selectedpo.substring(selectedpo.indexOf("(") + 1, selectedpo.indexOf(")"));
          pono = selectedpo.match(/\('([^']+)'\)/)[1];
          // var path = this.byId("complainTable").mBindingInfos.items.binding;
          // path.filter(
          //   new sap.ui.model.Filter({
          //     path: "cpono",
          //     operator: sap.ui.model.FilterOperator.EQ,
          //     value1: pono
          //   })
          // );
          var path = this.byId("complainTable").mBindingInfos.items.binding;
          path.filter([
            new sap.ui.model.Filter({
              path: "cpono",
              operator: sap.ui.model.FilterOperator.EQ,
              value1: pono
            }),
            new sap.ui.model.Filter({
              path: "cvencode", // New field to filter
              operator: sap.ui.model.FilterOperator.EQ,
              value1: vencode // Provide the value for cvencode
            })
          ]);

          console.log(pono); // Output: PONO12345

        }

        var com = null;
        var add = this.byId("11").mAggregations.items[0].mBindingInfos.items.binding;
        add.filter(
          new sap.ui.model.Filter({
            path: "complaintno",
            operator: sap.ui.model.FilterOperator.EQ,
            value1: com
          })
        );
        // add.refresh();
        // sap.ui.getCore().byId("container-vendrcmplain---App--subbtn").setVisible(false);
        if (!desc) {
          oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false);
        }
        else {
          oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(true);
        }

        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[2].setVisible(false);
        this.byId("vencode").setText(vencode);
        this.byId("pono").setText(pono);

        // this.byId("textcomp").setValueStateText("IT CANNOT BE EMPTY");

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
        var currStepPath = this.byId("VendorComplain").getCurrentStep();
        var parts = currStepPath.split('--');
        var currStep = parts[parts.length - 1];


        if (currStep != "ReviewStep") {
          if (desc != "") {
            this.byId("textcomp").setValueState("None");
            this.byId("textcomp").setValueStateText("");
            this.byId("revbtn").setVisible(true);
          }
          else {
            this.byId("revbtn").setVisible(false);
            this.byId("textcomp").setValueState("Error");
            this.byId("textcomp").setValueStateText("Value is required");

          }
        }

        var key = this.byId("ordr").mProperties.selectedKey;
        let arr = this.byId("ordr").mForwardedAggregations.items;
        // var key = oEvent.oSource.oParent.mAggregations.items[5].mProperties.selectedKey;
        // let arr = oEvent.oSource.oParent.mAggregations.items[5].mForwardedAggregations.items;
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
      StepFour: async function (oEvent) {

        debugger;
        desc = this.byId("textcomp").getValue();
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[1].setVisible(false);
        oEvent.oSource.oParent.oParent.oParent.oParent.oParent.mAggregations.rootControl.mAggregations.content[0].mAggregations.pages[0].mAggregations.footer.mAggregations.content[3].setVisible(true);
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

        // var path = oEvent.oSource.oParent.mAggregations.steps[3].mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].mAggregations.items[0].mBindingInfos.items.binding;
        // var path = sap.ui.getCore().byId("container-vendrcmplain---App--rev2hbox").mAggregations.items[0].mBindingInfos.items.binding;
        // var path = oEvent.oSource.oParent.mAggregations.steps[3].mAggregations.content[0].mAggregations.sections[1].mAggregations._grid.mAggregations.content[0].mAggregations.blocks[0].mAggregations.items[0].mAggregations.items[0].mBindingInfos.items.binding;
        // var path = this.byId("revPoTable").mBindingInfos.items.binding;
        // path.filter(
        //   new sap.ui.model.Filter({
        //     path: "pono",
        //     operator: sap.ui.model.FilterOperator.EQ,
        //     value1: pono
        //   })
        // );
        var selectedpo = sap.ui.getCore().byId("polist::poheaderList--fe::table::poheader::LineItem-innerTable")._aSelectedPaths[0];
        if (selectedpo !== null && typeof selectedpo !== 'undefined') {
          let functionname = 'submitcomplaints';
          let oFunction = this.oView.getModel().bindContext(`/${functionname}(...)`);
          var selectedpodata = JSON.stringify({
            pono: pono
          });
          oFunction.setParameter('data', selectedpodata);
          oFunction.setParameter('status', JSON.stringify({ status: 'getpo' }));
          await oFunction.execute();
          let context = oFunction.getBoundContext().getValue();
          let result = context.value;
          result = JSON.parse(result);
          var vend = result[0].vendor;
          var t = result[0].type;
          var am = result[0].amount;
          var oTable = this.byId("revPoTable");
          oTable.destroyColumns();
          var oColumn1 = new sap.m.Column({ header: new sap.m.Text({ text: "PO/Invoice Number" }) })
          var oColumn2 = new sap.m.Column({ header: new sap.m.Text({ text: "Vendor Code" }) });
          var oColumn3 = new sap.m.Column({ header: new sap.m.Text({ text: "Type" }) });
          var oColumn4 = new sap.m.Column({ header: new sap.m.Text({ text: "Amount" }) });

          oTable.addColumn(oColumn1);
          oTable.addColumn(oColumn2);
          oTable.addColumn(oColumn3);
          oTable.addColumn(oColumn4);
          var oRow = new sap.m.ColumnListItem();
          oRow.addCell(new sap.m.Text({ text: pono }));
          oRow.addCell(new sap.m.Text({ text: vend }));
          oRow.addCell(new sap.m.Text({ text: t }));
          oRow.addCell(new sap.m.Text({ text: am }));
          oTable.addItem(oRow);
        }
        var com = null;
        var add = this.byId("112").mAggregations.items[0].mBindingInfos.items.binding;
        add.filter(
          new sap.ui.model.Filter({
            path: "complaintno",
            operator: sap.ui.model.FilterOperator.EQ,
            value1: com
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
        //review page of already submitted complaints
        debugger
        // currentStep = this._wizard.getProgress();
        var getcomp = oEvent.oSource.mAggregations.cells[0].mProperties.text
        commnetbox = this.byId("ta");
        var testdata = JSON.stringify({
          complainno: getcomp
        });
        let functionname = 'submitcomplaints';
        debugger
        let oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
        oFunction.setParameter('data', testdata);
        oFunction.setParameter('status', JSON.stringify({ status: 'getComp' }));
        await oFunction.execute();
        debugger

        let context = oFunction.getBoundContext();
        let getdata = context.getValue();
        let result = getdata.value;
        result = JSON.parse(result);
        if (result[0].cpono == '-') {
          this.byId("povw").setVisible(false);
        }
        else {
          this.byId("po_valvw").setText(result[0].cpono);
        }
        this.byId("ven_valvw").setText(result[0].cvencode);
        this.byId("pan_valvw").setText(result[0].cpannum);
        this.byId("status_valvw").setText(result[0].cstatus);
        this.byId("typ_valvw").setText(result[0].ccomplain_about);
        this.byId("dsc_valvw").setValue(result[0].cdesc);
        this.byId("comp_valvw").setText(result[0].complainno);
        var c = result[0].complainno;
        var add = this.byId("112vw").mAggregations.items[0].mBindingInfos.items.binding;
        add.filter(
          new sap.ui.model.Filter({
            path: "complaintno",
            operator: sap.ui.model.FilterOperator.EQ,
            value1: c
          })
        );
        this._oNavContainer.to(this.byId("wizardReviewPage"));
        // var href_For_Product_display = await sap.ushell.Container.getServiceAsync("Navigation");

        // href_For_Product_display.navigate({
        //   target: { semanticObject: "compnav", action: "display" },
        //   params: { "complainno": "1711530148386-360672" }
        // });

      },
      change: async function (oEvent) {
        debugger

        // var title = sap.ui.getCore().byId("container-vendrcmplain---App--PanStep").mProperties.title
        // // if (title == "PAN Details"){
        // //   var details = sap.ui.getCore().byId("container-vendrcmplain---App--panTable")._aSelectedPaths
        // // }
        var nav_title = oEvent.mParameters.step.mProperties.title;

        //applying filter to preview complains
        if (nav_title == "Preview") {
          var com = null;
          var add = this.byId("112").mAggregations.items[0].mBindingInfos.items.binding;
          add.filter(
            new sap.ui.model.Filter({
              path: "size",
              operator: sap.ui.model.FilterOperator.NE,
              value1: null
            })
          );
          add.filter(
            new sap.ui.model.Filter({
              path: "complaintno",
              operator: sap.ui.model.FilterOperator.EQ,
              value1: null
            })
          );
        }

        // here is the code for the change of po selection

        var selectedpo = sap.ui.getCore().byId("polist::poheaderList--fe::table::poheader::LineItem-innerTable")._aSelectedPaths[0];
        if (selectedpo !== null && typeof selectedpo !== 'undefined') {
          this.byId("selPObox").setVisible(true);
          this.byId("poVbox").setVisible(true);
          pono = selectedpo.substring(selectedpo.indexOf("(") + 1, selectedpo.indexOf(")"));
          pono = selectedpo.match(/\('([^']+)'\)/)[1];
          this.byId("po_val").setText(pono);
          this.byId("pono").setText(pono);
          var path = this.byId("complainTable").mBindingInfos.items.binding;
          path.filter(
            new sap.ui.model.Filter({
              path: "cpono",
              operator: sap.ui.model.FilterOperator.EQ,
              value1: pono
            })
          );
          console.log(pono); // Output: PONO12345
          if (nav_title == "Preview") {
            let functionname = 'submitcomplaints';
            let oFunction = this.oView.getModel().bindContext(`/${functionname}(...)`);
            var selectedpodata = JSON.stringify({
              pono: pono
            });
            oFunction.setParameter('data', selectedpodata);
            oFunction.setParameter('status', JSON.stringify({ status: 'getpo' }));
            await oFunction.execute();
            let context = oFunction.getBoundContext().getValue();
            let result = context.value;
            result = JSON.parse(result);
            var vend = result[0].vendor;
            var t = result[0].type;
            var am = result[0].amount;
            var oTable = this.byId("revPoTable");
            oTable.destroyColumns();
            oTable.removeAllItems();
            var oColumn1 = new sap.m.Column({ header: new sap.m.Text({ text: "PO/Invoice Number" }) })
            var oColumn2 = new sap.m.Column({ header: new sap.m.Text({ text: "Vendor Code" }) });
            var oColumn3 = new sap.m.Column({ header: new sap.m.Text({ text: "Type" }) });
            var oColumn4 = new sap.m.Column({ header: new sap.m.Text({ text: "Amount" }) });

            oTable.addColumn(oColumn1);
            oTable.addColumn(oColumn2);
            oTable.addColumn(oColumn3);
            oTable.addColumn(oColumn4);
            var oRow = new sap.m.ColumnListItem();
            oRow.addCell(new sap.m.Text({ text: pono }));
            oRow.addCell(new sap.m.Text({ text: vend }));
            oRow.addCell(new sap.m.Text({ text: t }));
            oRow.addCell(new sap.m.Text({ text: am }));
            oTable.addItem(oRow);
          }
        }

        if (nav_title == "Preview") {
          //show submit button
          this.byId("subbtn").setVisible(true);
        }
        else {
          //hide submit button
          this.byId("subbtn").setVisible(false);
        }
      },
      reviewPress: function () {
        this._wizard.setCurrentStep(this.byId("ReviewStep"));
      },
      // setPoMethod : function(oEvent)
      // {
      //     debugger;
      //      pokey = this.byId("paymentMethodSelection").mProperties.selectedKey;
      //     switch (pokey) {
      //       case "withPO":
      //         default:
      //         this.byId("PanStep").setNextStep(this.getView().byId("PoStep"));
      //         break;
      //       case "withoutPO":
      //         pono = "-";
      //         this.byId("po_val").setText("-");
      //         this.byId("PanStep").setNextStep(this.getView().byId("ComplainCreationStep"));

      //         break;
      //     }

      //   //   if (vencode !== null && typeof vencode !== 'undefined') {
      //   //     // Your code block when vencode is neither null nor undefined
      //   //     this.byId("VendorComplain").nextStep()
      //   // }

      // },
      withoutpo: function (oEvent) {
        debugger
        sap.ui.getCore().byId("polist::poheaderList--fe::table::poheader::LineItem-innerTable").removeSelections();
        // this._wizard.validateStep(this.byId("PoStep"));
        this._wizard.discardProgress(this._wizard.getSteps()[0]);
        pono = "-";
        this._wizard.setCurrentStep(this.byId("PoStep"));
        this.byId("selPObox").setVisible(false);
        this.byId("poVbox").setVisible(false);
        var oTable = this.byId("revPoTable");
        oTable.removeAllItems();
        this.byId("VendorComplain").nextStep();
        var path = this.byId("complainTable").mBindingInfos.items.binding;
        path.filter(
          new sap.ui.model.Filter({
            path: "cpono",
            operator: sap.ui.model.FilterOperator.EQ,
            value1: pono
          }),
          new sap.ui.model.Filter({
            path: "cvencode", // New field to filter
            operator: sap.ui.model.FilterOperator.EQ,
            value1: vencode // Provide the value for cvencode
          })
        );

      },
      Step2btn: function (oEvent) {
        debugger;
        // this.byId("step2").setVisible(false);
        sap.ui.getCore().byId("application-vednorinfor-Display-component---App--step2").setVisible(false)
        this._wizard.setCurrentStep(this.byId("PoStep"));
        this.byId("VendorComplain").nextStep();
      },
      // panrowchange: function (oEvent) {
      //   debugger;
      //   this.byId("textcomp").setValue("");
      //   this._wizard.setCurrentStep(this.byId("PanStep"));
      //   vencode = oEvent.mParameters.listItems[0].mAggregations.cells[1].mProperties.text;
      //   pannum = oEvent.mParameters.listItems[0].mAggregations.cells[0].mProperties.text;
      //   if (vencode === null || typeof vencode === 'undefined') {
      //     // this._wizard.setCurrentStep(this.byId("PanStep"));
      //     // this.model.setProperty("/panTable", "Error");
      //     this._wizard.invalidateStep(this.byId("PanStep"));
      //   }
      //   else {
      //     // this.model.setProperty("/panTable", "None");
      //     this._wizard.validateStep(this.byId("PanStep"));


      //   }
      //   // this.byId("PoStep").mAggregations.content[0].getBinding("items").refresh();
      //   // this.byId("PoStep").mAggregations.content[0].refreshAggregation;
      //   // this.byId("PoStep").mAggregations.content[0].refreshItems;

      //   var path = this.byId("PoStep").mAggregations.content[0].mBindingInfos.items.binding;
      //   path.filter(
      //     new sap.ui.model.Filter({
      //       path: "vendor",
      //       operator: sap.ui.model.FilterOperator.EQ,
      //       value1: vencode
      //     })
      //   );
      //   //going to 2nd step here
      //   this.byId("VendorComplain").nextStep()

      //   // this.getView().byId('CreateProductWizard').setCurrentStep(1);
      // },
      porowchange: function (oEvent) {
        debugger;
        // // this.byId("textcomp").setValue("");
        // this.byId("selPObox").setVisible(true);
        // this._wizard.setCurrentStep(this.byId("PoStep"));
        // pono = oEvent.mParameters.listItems[0].mAggregations.cells[0].mProperties.text;

        // var path3 = this.byId("complainTable").mBindingInfos.items.binding;

        // path3.filter(
        //   new sap.ui.model.Filter({
        //     path: "cpono",
        //     operator: sap.ui.model.FilterOperator.EQ,
        //     value1: pono
        //   })
        // );

        // if (pono === null || typeof pono === 'undefined') {
        //   // this._wizard.setCurrentStep(this.byId("PanStep"));
        //   // this.model.setProperty("/panTable", "Error");
        //   // this._wizard.invalidateStep(this.byId("PoStep"));
        // }
        // else {
        //   // this.model.setProperty("/panTable", "None");
        //   // this._wizard.validateStep(this.byId("PoStep"));
        // }

        // this.byId("VendorComplain").nextStep()

      },
      onPress: function (oEvent) {
        debugger
      },
      wizardCompletedHandler: function () {
        debugger;


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
          title: "Cancel",
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
      handleWizardSubmit: async function (oEvent) {
        debugger
        let functionname = 'submitcomplaints';
        let oFunction = this.oView.getModel().bindContext(`/${functionname}(...)`);
        let functionname1 = 'triggerProcess';
        let oFunction1 = this.oView.getModel().bindContext(`/${functionname1}(...)`);

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

                var randomNumber = Math.floor(Math.random() * 1000000);
                var timestamp = new Date().getTime();
                var uniqueId = timestamp + '-' + randomNumber;
                compno = uniqueId.toString();
                var message = "Complaint No " + compno + " sent for approval";
                sap.m.MessageToast.show(message);
                var url3 = this.oView.getModel().sServiceUrl;
                for (var i = 0; i < filesids.length; i++) {
                  var fid = filesids[i];
                  let filedata = JSON.stringify({ ID: fid, complaintno: compno });
                  var url = url3 + `files/` + fid;
                  $.ajax({
                    url: url,
                    type: 'PATCH',
                    contentType: 'application/json',
                    data: filedata,
                    success: function (data) {
                      debugger
                      // Handle success
                      console.log(data);

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                      // Handle error
                      debugger
                      console.error(textStatus, errorThrown);
                    }
                  })

                }
                status = "Submitted";
                day = '0';
                var baseurl = this.oView.getModel().sServiceUrl;
                var testdata1 = JSON.stringify({
                  complainno: compno,
                  cpono: pono,
                  cvencode: vencode,
                  cpannum: pannum,
                  cstatus: status,
                  ccomplain_about: comp_type,
                  cdesc: desc,
                  days: day
                });
                var testdata3 = JSON.stringify({
                  complainno: compno,
                  cpono: pono,
                  cvencode: vencode,
                  cpannum: pannum,
                  cstatus: status,
                  ccomplain_about: comp_type,
                  cdesc: desc,
                  days: day,
                  baseurl: baseurl
                });
                oFunction.setParameter('data', testdata1);
                oFunction.setParameter('status', JSON.stringify({ status: 'postComp' }));
                await oFunction.execute();
                oFunction.setParameter('data', testdata1);
                oFunction.setParameter('status', JSON.stringify({ status: 'getlevel' }));
                await oFunction.execute();
                let context = oFunction.getBoundContext();
                let getdata = context.getValue();
                let result = getdata.value;
                result = JSON.parse(result);
                for (var i = 0; i < result.length; i++) {
                  var level = result[i].level;
                  var eid = result[i].employeid;
                  const d = new Date();
                  const day = String(d.getDate()).padStart(2, '0');
                  const month = String(d.getMonth() + 1).padStart(2, '0');
                  const year = d.getFullYear();
                  const formattedDate = `${day}-${month}-${year}`;
                  var testdata2 = JSON.stringify({
                    complainno: compno,
                    Begin_DateAND_Time: formattedDate,
                    level: level,
                    Employee_ID: eid,
                    Notification_Status: status
                  });
                  oFunction.setParameter('data', testdata2);
                  oFunction.setParameter('status', JSON.stringify({ status: 'postWorkflow' }));
                  await oFunction.execute();

                }
                oFunction1.setParameter('data', testdata3);
                oFunction1.setParameter('status', JSON.stringify({ status: '' }));
                await oFunction1.execute();



                sap.m.MessageToast.show("Saved successfully");
                this._handleNavigationToStep(0);
                this._wizard.discardProgress(this._wizard.getSteps()[0]);
                location.reload();
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
      handleSearch: function (oEvent) {
        debugger;
        var valkey = this.byId("SearchField").getValue();
        var path = this.byId("idProductsTable").mBindingInfos.items.binding;
        if (valkey === "" || valkey === null || typeof valkey === 'undefined') {
          path.filter([]);
          return;
        }
        var filters = [];

        // Add filter for 'vencode'
        filters.push(new sap.ui.model.Filter({
          path: "vendor",
          operator: sap.ui.model.FilterOperator.EQ,
          value1: valkey
        }));

        // Add filter for 'pannumber'
        filters.push(new sap.ui.model.Filter({
          path: "pannum",
          operator: sap.ui.model.FilterOperator.EQ,
          value1: valkey
        }));

        // Add filter for 'ponumber'
        filters.push(new sap.ui.model.Filter({
          path: "pono",
          operator: sap.ui.model.FilterOperator.EQ,
          value1: valkey
        }));

        // Add filter for 'type'
        filters.push(new sap.ui.model.Filter({
          path: "type",
          operator: sap.ui.model.FilterOperator.EQ,
          value1: valkey
        }));

        // Add filter for 'amount'
        filters.push(new sap.ui.model.Filter({
          path: "amount",
          operator: sap.ui.model.FilterOperator.EQ,
          value1: valkey
        }));

        // Apply OR condition
        var finalFilter = new sap.ui.model.Filter({
          filters: filters,
          and: false
        });

        // Apply the filter

        path.filter(finalFilter);

      },

      // *******************comments***************************************************
      comments: async function (oEvent) {
        debugger
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
        var getcomp = this.byId("comp_valvw").getText()
        var testdata = JSON.stringify({
          complainno: getcomp
        });
        let functionname = 'submitcomplaints';
        debugger
        let oFunction = this.getView().getModel().bindContext(`/${functionname}(...)`);
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
      },


      //     **********************upload attachments****************************************************
      onAfterItemAdded: function (oEvent) {
        debugger;
        var url1 = this.oView.getModel().sServiceUrl
        // var url1 = `/odata/v4/my/`
        var item = oEvent.getParameter("item");

        var _createEntity = function (item) {
          debugger;
          var data = {
            mediaType: item.getMediaType(),
            fileName: item.getFileName(),
            size: item.getFileObject().size,
          };

          var settings = {
            // url: "/odata/v4/my/files",
            url: url1 + `files`,
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            data: JSON.stringify(data)
          };

          return new Promise((resolve, reject) => {
            $.ajax(settings)
              .done((results, textStatus, request) => {
                resolve(results.ID);
                debugger
                filesids.push(results.ID);
                uid = results.ID;
              })
              .fail((err) => {
                reject(err);
              });
          });
        };

        _createEntity(item)
          .then((id) => {
            debugger
            // var url = `/odata/v4/my/files(${id})/content`;
            var url = url1 + `files(${id})/content`
            item.setUploadUrl(url);
            var oUploadSet = this.byId("uploadSet");
            oUploadSet.setHttpRequestMethod("PUT");
            oUploadSet.uploadItem(item);

          })
          .catch((err) => {
            console.log(err);
          });
      },

      onUploadCompleted: async function (oEvent) {
        debugger
        var oUploadSet = this.byId("uploadSet");
        oUploadSet.removeAllIncompleteItems();
        let funct = 'submitcomplaints';
        var ofunc = this.getView().getModel().bindContext(`/${funct}(...)`);
        var dat = JSON.stringify({
          uid: uid,
          createdBy: username1
        });
        ofunc.setParameter('data', dat);
        ofunc.setParameter('status', JSON.stringify({ status: 'patchattach' }));
        await ofunc.execute();
        oUploadSet.getBinding("items").refresh();
      },

      onRemovePressed: function (oEvent) {
        debugger
        oEvent.preventDefault();
        oEvent.getParameter("item").getBindingContext().delete();
        sap.m.MessageToast.show("Selected file has been deleted");
      },

      onOpenPressed: function (oEvent) {
        debugger;
        oEvent.preventDefault();
        var item = oEvent.getSource();
        var fileName = item.getFileName();
        var url2 = this.oView.getModel().sServiceUrl
        url2 = url2.replace('/odata/v4/my/', '');

        var _download = function (item) {
          var settings = {
            url: url2 + item.getUrl(),
            // url: item.getUrl(),
            method: "GET",
            headers: {
              "Content-type": "application/octet-stream"
            },
            xhrFields: {
              responseType: 'blob'
            }
          };

          return new Promise((resolve, reject) => {
            $.ajax(settings)
              .done((result) => {
                resolve(result);
              })
              .fail((err) => {
                reject(err);
              });
          });
        };

        _download(item)
          .then((blob) => {
            var url = window.URL.createObjectURL(blob);
            // Open the URL in a new tab
            window.open(url, '_blank');
          })
          .catch((err) => {
            console.log(err);
          });
      },


      _download: function (item) {
        debugger;
        var settings = {
          url: item.getUrl(),
          method: "GET",
          headers: {
            "Content-type": "application/octet-stream"
          },
          xhrFields: {
            responseType: 'blob'
          }
        }

        return new Promise((resolve, reject) => {
          $.ajax(settings)
            .done((result) => {
              resolve(result)
            })
            .fail((err) => {
              reject(err)
            })
        });
      },

      _createEntity: function (item) {
        debugger
        // var username = new sap.ushell.services.UserInfo().getEmail();
        var data = {
          mediaType: item.getMediaType(),
          fileName: item.getFileName(),
          size: item.getFileObject().size,
        };

        var settings = {
          url: "/attachments/files",
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(data)
        }

        return new Promise((resolve, reject) => {
          $.ajax(settings)
            .done((results, textStatus, request) => {
              resolve(results.ID);
              debugger
              arr.push(results.ID);
            })
            .fail((err) => {
              reject(err);
            })
        })
      },

      _uploadContent: function (item, id) {
        debugger
        var url = `/attachments/Files(${id})/content`
        item.setUploadUrl(url);
        var oUploadSet = this.byId("uploadSet");
        oUploadSet.setHttpRequestMethod("PUT")
        oUploadSet.uploadItem(item);
      },

      //formatters
      formatThumbnailUrl: function (mediaType) {
        debugger;
        var iconUrl;
        switch (mediaType) {
          case "image/png":
            iconUrl = "sap-icon://card";
            break;
          case "text/plain":
            iconUrl = "sap-icon://document-text";
            break;
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            iconUrl = "sap-icon://excel-attachment";
            break;
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            iconUrl = "sap-icon://doc-attachment";
            break;
          case "application/pdf":
            iconUrl = "sap-icon://pdf-attachment";
            break;
          default:
            iconUrl = "sap-icon://attachment";
        }
        return iconUrl;
      }
    });
  });
