"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/sowRoutes.ts
const express_1 = __importDefault(require("express"));
const sowControl_1 = require("../controllers/sowControl");
const router = express_1.default.Router();
router.post('/', sowControl_1.createSOWController);
router.get('/:id', sowControl_1.getSOWByIdController);
router.post('/payment-plans', sowControl_1.createSOWPaymentPlanController);
router.post('/payment-plan-line-items', sowControl_1.createSOWPaymentPlanLineItemController);
router.get('/:id/payment-plans', sowControl_1.getSOWPaymentPlansBySOWIdController);
router.get('/payment-plans/:id/line-items', sowControl_1.getSOWPaymentPlanLineItemsByPlanIdController);
exports.default = router;
//# sourceMappingURL=sowRoutes.js.map