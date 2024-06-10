"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const sowModel_1 = __importDefault(require("./sowModel"));
const clientModel_1 = __importDefault(require("./clientModel"));
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowModel_1.default,
            key: 'id',
        },
    },
    totalInvoiceValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('Drafted', 'Cancelled', 'Approved'),
        allowNull: false,
    },
    invoiceSentOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    clientId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: clientModel_1.default,
            key: 'id',
        },
    },
    paymentReceivedOn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    invoiceVersionNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    invoiceAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    invoiceTaxAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'invoices',
});
exports.default = Invoice;
//# sourceMappingURL=invoiceModel.js.map