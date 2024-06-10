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
exports.getOrganizationByIdController = exports.getOrganizationsController = exports.createOrganizationController = void 0;
const organizationService_1 = require("../service/organizationService");
const createOrganizationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, organizationService_1.createOrganization)(req.body);
        res.status(201).json(organization);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createOrganizationController = createOrganizationController;
const getOrganizationsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield (0, organizationService_1.getOrganizations)();
        res.status(200).json(organizations);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getOrganizationsController = getOrganizationsController;
const getOrganizationByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, organizationService_1.getOrganizationById)(req.params.id);
        if (organization) {
            res.status(200).json(organization);
        }
        else {
            res.status(404).json({ message: 'Organization not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getOrganizationByIdController = getOrganizationByIdController;
//# sourceMappingURL=organizationControl.js.map