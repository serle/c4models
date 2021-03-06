"use strict";
exports.__esModule = true;
var structurizr_typescript_1 = require("structurizr-typescript");
var workspace = new structurizr_typescript_1.Workspace("asset", "some description");
var user = workspace.model.addPerson('User', 'uses the system');
var admin = workspace.model.addPerson('Admin', 'administers the system and manages user');
admin.interactsWith(user, 'manages rights');
var factory = workspace.model.addSoftwareSystem('Asset Management System', 'Takes in buy and sell orders, matches them and records portfolio information');
factory.location = structurizr_typescript_1.Location.Internal;
var ingress = factory.addContainer('ingress', 'accepts incoming telemetry data', 'IoT Hub');
var storage = factory.addContainer('storage', 'stores telemetry data', 'Table Storage');
var frontend = factory.addContainer('frontend', 'visualizes telemetry data', 'React');
ingress.uses(storage, 'store telemetry', 'IoT Hub routing');
frontend.uses(storage, 'load telemetry data', 'Table Storage SDK');
var crm = workspace.model.addSoftwareSystem('CRM system', 'manage tickets');
crm.location = structurizr_typescript_1.Location.External;
factory.uses(crm, 'Create tickets', 'AMQP', structurizr_typescript_1.InteractionStyle.Asynchronous);
user.uses(factory, 'view dashboards');
admin.uses(factory, 'configure users');
admin.uses(crm, 'work on tickets');
var systemContext = workspace.views.createSystemContextView(factory, 'factory-context', 'The system context view for the monkey factory');
systemContext.addNearestNeighbours(factory);
var containerView = workspace.views.createContainerView(factory, 'factory-containers', 'Container view for the monkey factory');
containerView.addAllContainers();
containerView.addNearestNeighbours(factory);
exports["default"] = workspace;
