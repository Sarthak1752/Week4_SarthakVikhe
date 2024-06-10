"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSOWPaymentPlanLineItemsByPlanIdController = exports.getSOWPaymentPlansBySOWIdController = exports.createSOWPaymentPlanLineItemController = exports.createSOWPaymentPlanController = exports.getSOWByIdController = exports.createSOWController = void 0;
const sowService_1 = require("../service/sowService");
const createSOWController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sow = yield (0, sowService_1.createSOW)(req.body);
        res.status(201).json(sow);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createSOWController = createSOWController;
const getSOWByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sow = yield (0, sowService_1.getSOWById)(req.params.id);
        if (sow) {
            res.status(200).json(sow);
        }
        else {
            res.status(404).json({ message: 'SOW not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getSOWByIdController = getSOWByIdController;
const createSOWPaymentPlanController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentPlan = yield (0, sowService_1.createSOWPaymentPlan)(req.body);
        res.status(201).json(paymentPlan);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createSOWPaymentPlanController = createSOWPaymentPlanController;
const createSOWPaymentPlanLineItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lineItem = yield (0, sowService_1.createSOWPaymentPlanLineItem)(req.body);
        res.status(201).json(lineItem);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createSOWPaymentPlanLineItemController = createSOWPaymentPlanLineItemController;
const getSOWPaymentPlansBySOWIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentPlans = yield (0, sowService_1.getSOWPaymentPlansBySOWId)(req.params.id);
        res.status(200).json(paymentPlans);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getSOWPaymentPlansBySOWIdController = getSOWPaymentPlansBySOWIdController;
const getSOWPaymentPlanLineItemsByPlanIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lineItems = yield (0, sowService_1.getSOWPaymentPlanLineItemsByPlanId)(req.params.id);
        res.status(200).json(lineItems);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getSOWPaymentPlanLineItemsByPlanIdController = getSOWPaymentPlanLineItemsByPlanIdController;
//# sourceMappingURL=sowControl.js.map