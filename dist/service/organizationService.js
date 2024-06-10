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
exports.getOrganizationById = exports.getOrganizations = exports.createOrganization = void 0;
// src/services/organizationService.ts
const organizationModel_1 = __importDefault(require("../models/organizationModel"));
const createOrganization = (organizationData) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield organizationModel_1.default.create(organizationData);
    return organization;
});
exports.createOrganization = createOrganization;
const getOrganizations = () => __awaiter(void 0, void 0, void 0, function* () {
    const organizations = yield organizationModel_1.default.findAll();
    return organizations;
});
exports.getOrganizations = getOrganizations;
const getOrganizationById = (organizationId) => __awaiter(void 0, void 0, void 0, function* () {
    const organization = yield organizationModel_1.default.findByPk(organizationId);
    return organization;
});
exports.getOrganizationById = getOrganizationById;
//# sourceMappingURL=organizationService.js.map