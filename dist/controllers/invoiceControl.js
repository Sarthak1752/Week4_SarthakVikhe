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
exports.getInvoiceByIdController = exports.getInvoicesController = exports.generateInvoicesController = void 0;
const invoiceService_1 = require("../service/invoiceService");
const generateInvoicesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceService_1.generateInvoices)(req.body);
        res.status(201).json(invoices);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.generateInvoicesController = generateInvoicesController;
const getInvoicesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceService_1.getInvoices)();
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getInvoicesController = getInvoicesController;
const getInvoiceByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield (0, invoiceService_1.getInvoiceById)(req.params.id);
        if (invoice) {
            res.status(200).json(invoice);
        }
        else {
            res.status(404).json({ message: 'Invoice not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getInvoiceByIdController = getInvoiceByIdController;
//# sourceMappingURL=invoiceControl.js.map