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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentById = exports.getPayments = exports.makePayment = void 0;
// src/services/paymentService.ts
const paymentModel_1 = __importDefault(require("../models/paymentModel"));
const invoiceModel_1 = __importDefault(require("../models/invoiceModel"));
const makePayment = (paymentData) => __awaiter(void 0, void 0, void 0, function* () {
    const payment = yield paymentModel_1.default.create(paymentData);
    // Update invoice status if full payment made
    if (payment.isFullPayment) {
        const invoice = yield invoiceModel_1.default.findByPk(payment.invoiceId);
        if (invoice) {
            invoice.status = 'Approved';
            yield invoice.save();
        }
    }
    return payment;
});
exports.makePayment = makePayment;
const getPayments = () => __awaiter(void 0, void 0, void 0, function* () {
    const payments = yield paymentModel_1.default.findAll();
    return payments;
});
exports.getPayments = getPayments;
const getPaymentById = (paymentId) => __awaiter(void 0, void 0, void 0, function* () {
    const payment = yield paymentModel_1.default.findByPk(paymentId);
    return payment;
});
exports.getPaymentById = getPaymentById;
//# sourceMappingURL=paymentService.js.map