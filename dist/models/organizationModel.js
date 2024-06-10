"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
class Organization extends sequelize_1.Model {
}
Organization.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    invoiceTemplateId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: "Organization"
});
exports.default = Organization;
//# sourceMappingURL=organizationModel.js.map