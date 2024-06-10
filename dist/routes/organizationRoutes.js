"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/organizationRoutes.ts
const express_1 = __importDefault(require("express"));
const organizationControl_1 = require("../controllers/organizationControl");
const router = express_1.default.Router();
router.post('/register', organizationControl_1.createOrganizationController);
router.get('/', organizationControl_1.getOrganizationsController);
router.get('/:id', organizationControl_1.getOrganizationByIdController);
exports.default = router;
//# sourceMappingURL=organizationRoutes.js.map