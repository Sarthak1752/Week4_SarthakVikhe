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
exports.getPaymentByIdController = exports.getPaymentsController = exports.makePaymentController = void 0;
const paymentService_1 = require("../service/paymentService");
const makePaymentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield (0, paymentService_1.makePayment)(req.body);
        res.status(201).json(payment);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.makePaymentController = makePaymentController;
const getPaymentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payments = yield (0, paymentService_1.getPayments)();
        res.status(200).json(payments);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getPaymentsController = getPaymentsController;
const getPaymentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield (0, paymentService_1.getPaymentById)(req.params.id);
        if (payment) {
            res.status(200).json(payment);
        }
        else {
            res.status(404).json({ message: 'Payment not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getPaymentByIdController = getPaymentByIdController;
//# sourceMappingURL=paymentControl.js.map