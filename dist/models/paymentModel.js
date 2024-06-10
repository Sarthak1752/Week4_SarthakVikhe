"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const invoiceModel_1 = __importDefault(require("./invoiceModel"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    paymentDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    forExAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    indianAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: invoiceModel_1.default,
            key: 'id'
        }
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    bankPaymentDetails: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'payments',
});
exports.default = Payment;
//# sourceMappingURL=paymentModel.js.map