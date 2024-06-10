"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const clientModel_1 = __importDefault(require("./clientModel"));
class SOW extends sequelize_1.Model {
}
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
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
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    validityPeriod: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'sows',
});
exports.default = SOW;
//# sourceMappingURL=sowModel.js.map