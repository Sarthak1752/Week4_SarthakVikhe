// src/routes/invoiceRoutes.ts
import express from 'express';
import {
  generateInvoicesController,
  getInvoicesController,
  getInvoiceByIdController
} from '../controllers/invoiceControl';

const router = express.Router();

router.post('/generate', generateInvoicesController);
router.get('/', getInvoicesController);
router.get('/:id', getInvoiceByIdController);

export default router;
