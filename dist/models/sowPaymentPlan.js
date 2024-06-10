"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const sowModel_1 = __importDefault(require("./sowModel"));
const clientModel_1 = __importDefault(require("./clientModel"));
class SOWPaymentPlan extends sequelize_1.Model {
}
SOWPaymentPlan.init({
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
        }
    },
    clientId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: clientModel_1.default,
            key: 'id',
        }
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'sow_payment_plans',
});
exports.default = SOWPaymentPlan;
//# sourceMappingURL=sowPaymentPlan.js.map