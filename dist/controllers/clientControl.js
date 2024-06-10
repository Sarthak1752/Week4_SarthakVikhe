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
exports.getClientByIdController = exports.getClientsController = exports.createClientController = void 0;
const clientService_1 = require("../service/clientService");
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, clientService_1.createClient)(req.body);
        res.status(201).json(client);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createClientController = createClientController;
const getClientsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield (0, clientService_1.getClients)();
        res.status(200).json(clients);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getClientsController = getClientsController;
const getClientByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, clientService_1.getClientById)(req.params.id);
        if (client) {
            res.status(200).json(client);
        }
        else {
            res.status(404).json({ message: 'Client not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getClientByIdController = getClientByIdController;
//# sourceMappingURL=clientControl.js.map