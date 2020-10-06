"use strict";
exports.__esModule = true;
var fs = require("fs");
var structurizr_typescript_1 = require("structurizr-typescript");
exports.export_to_plant_uml = function (location, workspace) {
    var plantUML = new structurizr_typescript_1.PlantUMLWriter().toPlantUML(workspace);
    fs.writeFileSync(location, plantUML);
};
