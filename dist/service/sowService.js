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
exports.getSOWPaymentPlanLineItemsByPlanId = exports.getSOWPaymentPlansBySOWId = exports.createSOWPaymentPlanLineItem = exports.createSOWPaymentPlan = exports.getSOWById = exports.createSOW = void 0;
// src/services/sowService.ts
const sowModel_1 = __importDefault(require("../models/sowModel"));
const sowPaymentPlan_1 = __importDefault(require("../models/sowPaymentPlan"));
const sowPaymentPlanLineitem_1 = __importDefault(require("../models/sowPaymentPlanLineitem"));
const createSOW = (sowData) => __awaiter(void 0, void 0, void 0, function* () {
    const sow = yield sowModel_1.default.create(sowData);
    return sow;
});
exports.createSOW = createSOW;
const getSOWById = (sowId) => __awaiter(void 0, void 0, void 0, function* () {
    const sow = yield sowModel_1.default.findByPk(sowId);
    return sow;
});
exports.getSOWById = getSOWById;
const createSOWPaymentPlan = (paymentPlanData) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentPlan = yield sowPaymentPlan_1.default.create(paymentPlanData);
    return paymentPlan;
});
exports.createSOWPaymentPlan = createSOWPaymentPlan;
const createSOWPaymentPlanLineItem = (lineItemData) => __awaiter(void 0, void 0, void 0, function* () {
    const lineItem = yield sowPaymentPlanLineitem_1.default.create(lineItemData);
    return lineItem;
});
exports.createSOWPaymentPlanLineItem = createSOWPaymentPlanLineItem;
const getSOWPaymentPlansBySOWId = (sowId) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentPlans = yield sowPaymentPlan_1.default.findAll({ where: { sowId } });
    return paymentPlans;
});
exports.getSOWPaymentPlansBySOWId = getSOWPaymentPlansBySOWId;
const getSOWPaymentPlanLineItemsByPlanId = (planId) => __awaiter(void 0, void 0, void 0, function* () {
    const lineItems = yield sowPaymentPlanLineitem_1.default.findAll({ where: { sowPaymentPlanId: planId } });
    return lineItems;
});
exports.getSOWPaymentPlanLineItemsByPlanId = getSOWPaymentPlanLineItemsByPlanId;
//# sourceMappingURL=sowService.js.map