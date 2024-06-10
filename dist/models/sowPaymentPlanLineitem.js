"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const sowModel_1 = __importDefault(require("./sowModel"));
const sowPaymentPlan_1 = __importDefault(require("./sowPaymentPlan"));
class SOWPaymentPlanLineItem extends sequelize_1.Model {
}
SOWPaymentPlanLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowPaymentPlan_1.default,
            key: 'id',
        }
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowModel_1.default,
            key: 'id',
        }
    },
    orderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'sow_payment_plan_line_items',
});
exports.default = SOWPaymentPlanLineItem;
//# sourceMappingURL=sowPaymentPlanLineitem.js.map