sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function(Controller) {
	"use strict";

	var PageController = Controller.extend("no.skye.focusproblem.modules.tabOne.tabOne", {
	    
	    onInit: function(){
	        console.info(this.getView().sViewName + " - onInit");
	    },
	    
	    onLiveChange: function(oEvent){
	        console.info(this.getView().sViewName + " - onLiveChange");
	        
		    sap.ui.getCore().getEventBus().publish("tabOne", "changed");
	    }

	});


	return PageController;

});