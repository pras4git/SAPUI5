/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nssapui5./onesapui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
