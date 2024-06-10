"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const common_1 = __importDefault(require("../common/common"));
const sequelize = new sequelize_1.Sequelize({
    host: common_1.default.postgres.HOST,
    username: common_1.default.postgres.USERNAME,
    password: common_1.default.postgres.PASSWORD,
    database: common_1.default.postgres.DATABASE,
    dialect: common_1.default.postgres.DIALECT,
    port: common_1.default.postgres.PORT
});
sequelize.authenticate().then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log("Error connecting database", error);
});
sequelize.sync().then(() => {
    console.log("Database synchronized");
}).catch((error) => {
    console.log("Error synchronizing database", error);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map