// src/routes/sowRoutes.ts
import express from 'express';
import {
  createSOWController,
  getSOWByIdController,
  createSOWPaymentPlanController,
  createSOWPaymentPlanLineItemController,
  getSOWPaymentPlansBySOWIdController,
  getSOWPaymentPlanLineItemsByPlanIdController
} from '../controllers/sowControl';

const router = express.Router();

router.post('/', createSOWController);
router.get('/:id', getSOWByIdController);
router.post('/payment-plans', createSOWPaymentPlanController);
router.post('/payment-plan-line-items', createSOWPaymentPlanLineItemController);
router.get('/:id/payment-plans', getSOWPaymentPlansBySOWIdController);
router.get('/payment-plans/:id/line-items', getSOWPaymentPlanLineItemsByPlanIdController);

export default router;
