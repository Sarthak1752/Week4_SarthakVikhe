"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/paymentRoutes.ts
const express_1 = __importDefault(require("express"));
const paymentControl_1 = require("../controllers/paymentControl");
const router = express_1.default.Router();
router.post('/', paymentControl_1.makePaymentController);
router.get('/', paymentControl_1.getPaymentsController);
router.get('/:id', paymentControl_1.getPaymentByIdController);
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map