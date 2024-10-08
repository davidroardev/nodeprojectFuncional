"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersRoutes = void 0;
const express_1 = require("express");
const customers_controller_1 = require("../controllers/customers_controller");
const authorization_1 = require("../middleware/authorization");
exports.customersRoutes = (0, express_1.Router)();
exports.customersRoutes.get('/customers', authorization_1.authenticateToken, customers_controller_1.getCustomers);
exports.customersRoutes.get('/customers/:id', authorization_1.authenticateToken, customers_controller_1.getCustomersById);
exports.customersRoutes.post('/createCustomer', authorization_1.authenticateToken, customers_controller_1.createCustomer);
exports.customersRoutes.delete('/deleteCustomer/:id', authorization_1.authenticateToken, customers_controller_1.deleteCustomer);
exports.customersRoutes.put('/updateCustomer/:id', authorization_1.authenticateToken, customers_controller_1.updateCustomers);
