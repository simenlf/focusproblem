sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	var PageController = Controller.extend("no.skye.focusproblem.modules.tabTwo.tabTwo", {
        
        onInit: function(){
	        console.info(this.getView().sViewName + " - onInit");
	        
	        sap.ui.getCore().getEventBus().subscribe("tabOne","changed",this.onEventReceived,this);
	    },
	    
	    onEventReceived: function(oEvent){
	        console.info(this.getView().sViewName + " - onLiveChange");
	        
	        var randomText = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
	        
	        this.getView().byId("tabTwoInput").setValue(randomText);
	    }

	});

	return PageController;

});