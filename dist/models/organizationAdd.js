"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
class organizationAdd extends sequelize_1.Model {
}
organizationAdd.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    zipCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: pgConfig_1.default,
    tableName: 'organizationAdd' });
exports.default = organizationAdd;
//# sourceMappingURL=organizationAdd.js.map