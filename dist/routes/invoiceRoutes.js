"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/invoiceRoutes.ts
const express_1 = __importDefault(require("express"));
const invoiceControl_1 = require("../controllers/invoiceControl");
const router = express_1.default.Router();
router.post('/generate', invoiceControl_1.generateInvoicesController);
router.get('/', invoiceControl_1.getInvoicesController);
router.get('/:id', invoiceControl_1.getInvoiceByIdController);
exports.default = router;
//# sourceMappingURL=invoiceRoutes.js.map