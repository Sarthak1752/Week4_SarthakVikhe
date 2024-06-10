"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const organizationModel_1 = __importDefault(require("./organizationModel"));
class Client extends sequelize_1.Model {
}
Client.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    organizationId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: organizationModel_1.default,
            key: 'id',
        }
    },
    msaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    msaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    ndaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isNDASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    isMSASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    msaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'clients',
});
exports.default = Client;
//# sourceMappingURL=clientModel.js.map