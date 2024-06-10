import express from 'express';
import bodyParser from 'body-parser';
import organizationRoutes from './routes/organizationRoutes';
import clientRoutes from './routes/clientRoutes';
import sowRoutes from './routes/sowRoutes';
import invoiceRoutes from './routes/invoiceRoutes';
import paymentRoutes from './routes/paymentRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/organizations', organizationRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/sows', sowRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/payments', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

