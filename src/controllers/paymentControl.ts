// src/controllers/paymentController.ts
import { Request, Response } from 'express';
import { makePayment, getPayments, getPaymentById } from '../service/paymentService';

export const makePaymentController = async (req: Request, res: Response) => {
  try {
    const payment = await makePayment(req.body);
    res.status(201).json(payment);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getPaymentsController = async (req: Request, res: Response) => {
  try {
    const payments = await getPayments();
    res.status(200).json(payments);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getPaymentByIdController = async (req: Request, res: Response) => {
  try {
    const payment = await getPaymentById(req.params.id);
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
