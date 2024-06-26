sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';
    var compno;
    var uid;
    debugger;
    return {
        onPress: function (oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onAfterItemAdded: function (oEvent) {
            debugger;
            var currPath = location.href;
            compno = currPath.match(/\('(\d+-\d+)'\)/)[1];
            var url1 = this._view.getModel().sServiceUrl
            // var url1 = `/odata/v4/my/`
            var item = oEvent.getParameter("item");

            var _createEntity = function (item) {
                debugger;
                var data = {
                    mediaType: item.getMediaType(),
                    complaintno: compno,
                    fileName: item.getFileName(),
                    size: item.getFileObject().size
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
                            uid = results.ID;

                        })
                        .fail((err) => {
                            reject(err);
                        });
                });
            };

            _createEntity(item)
                .then((id) => {
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
            var username1 = new sap.ushell.services.UserInfo().getEmail();
            var ofunc = this._view.getModel().bindContext(`/${funct}(...)`);
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
            MessageToast.show("Selected file has been deleted");
        },

        onOpenPressed: function (oEvent) {
            debugger;
            oEvent.preventDefault();
            var item = oEvent.getSource();
            var fileName = item.getFileName();
            var url2 = this._view.getModel().sServiceUrl
            url2 = url2.replace('/odata/v4/my/', '');
            // var url2 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oBindingContexts.undefined.oModel.sServiceUrl

            var _download = function (item) {
                var settings = {
                    url: url2 + item.getUrl(),
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
            var data = {
                mediaType: item.getMediaType(),
                complaintno: compno,
                fileName: item.getFileName(),
                size: item.getFileObject().size
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
    };
});
