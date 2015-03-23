sap.ui.controller("dux.view.Master", {

    handleListSelect: function(oEvent) {
        this.navigation.navTo("idViewRoot--idViewDetail", oEvent.getParameter("listItem").getBindingContext());
    }


});