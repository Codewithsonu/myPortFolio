sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.myportfolio.controller.main", {
            onInit: function () {
                // Assuming the "data.json" file is located in the "model" folder relative to the controller file

                // Create JSON model
                var oModel = new sap.ui.model.json.JSONModel();
                // Set the file path relative to the controller file
                oModel.loadData("../model/data.json");

                // Set the model to "portfolio" in the current view
                this.getView().setModel(oModel, "portfolio");


                oModel.attachRequestCompleted(function(oEvent) {
                    console.log("Data loaded successfully",oEvent.getParameter("Success"));
                });
                
                oModel.attachRequestFailed(function(oEvent) {
                    console.error("Error loading data:", oEvent.getParameter("errorObject"));
                });
                



            }
        });
    });
