"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/clientRoutes.ts
const express_1 = __importDefault(require("express"));
const clientControl_1 = require("../controllers/clientControl");
const router = express_1.default.Router();
router.post('/', clientControl_1.createClientController);
router.get('/', clientControl_1.getClientsController);
router.get('/:id', clientControl_1.getClientByIdController);
exports.default = router;
//# sourceMappingURL=clientRoutes.js.map