"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const invoiceRoutes_1 = __importDefault(require("./routes/invoiceRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api/organizations', organizationRoutes_1.default);
app.use('/api/clients', clientRoutes_1.default);
app.use('/api/sows', sowRoutes_1.default);
app.use('/api/invoices', invoiceRoutes_1.default);
app.use('/api/payments', paymentRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map