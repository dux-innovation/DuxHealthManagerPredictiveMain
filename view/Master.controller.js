
sap.ui.controller("dux.view.Master", {
	
	handleNavBack : function (evt) {
		window.location.assign("../DuxHealthManagerDashboard");
	},
	
    handleListSelect: function(oEvent) {
    	console.log( oEvent.getParameter("listItem").getBindingContext());
    	if(oEvent.getParameter("listItem").getBindingContext().sPath == '/examinations/0' ){
    		this.navigation.navTo("idViewRoot--idViewReport001");
		}
    	else if(oEvent.getParameter("listItem").getBindingContext().sPath == '/examinations/1' ){
    		this.navigation.navTo("idViewRoot--idViewReport002");    		
    	}
    	else if(oEvent.getParameter("listItem").getBindingContext().sPath == '/examinations/2' ){
    		this.navigation.navTo("idViewRoot--idViewReport003");    		
    	}
    	else if(oEvent.getParameter("listItem").getBindingContext().sPath == '/examinations/3' ){
    		this.navigation.navTo("idViewRoot--idViewReport004");    		
    	}
    	else if(oEvent.getParameter("listItem").getBindingContext().sPath == '/examinations/4' ){
    		this.navigation.navTo("idViewRoot--idViewReport005");    		
    	}
    	else if(oEvent.getParameter("listItem").getBindingContext().sPath == '/examinations/5' ){
    		this.navigation.navTo("idViewRoot--idViewReport006");    		
    	}
    	else{
    		this.navigation.navTo("idViewRoot--idViewDetail");
    	}
   }
});


