// src/routes/paymentRoutes.ts
import express from 'express';
import {
  makePaymentController,
  getPaymentsController,
  getPaymentByIdController
} from '../controllers/paymentControl';

const router = express.Router();

router.post('/', makePaymentController);
router.get('/', getPaymentsController);
router.get('/:id', getPaymentByIdController);

export default router;
