sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("no.skye.focusproblem.Component", {

		metadata : {
			rootView : "no.skye.focusproblem.Page",
			dependencies : {
				libs : [
					"sap.m"
				]
			},
			config : {
				sample : {
					stretch : true,
					files : [
						"Page.view.xml",
						"Page.controller.js"
					]
				}
			}
		}
	});

	return Component;

});