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
exports.getClientById = exports.getClients = exports.createClient = void 0;
// src/services/clientService.ts
const clientModel_1 = __importDefault(require("../models/clientModel"));
const createClient = (clientData) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield clientModel_1.default.create(clientData);
    return client;
});
exports.createClient = createClient;
const getClients = () => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield clientModel_1.default.findAll();
    return clients;
});
exports.getClients = getClients;
const getClientById = (clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield clientModel_1.default.findByPk(clientId);
    return client;
});
exports.getClientById = getClientById;
//# sourceMappingURL=clientService.js.map