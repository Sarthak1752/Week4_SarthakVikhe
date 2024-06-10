// src/controllers/sowController.ts
import { Request, Response } from 'express';
import {
  createSOW,
  getSOWById,
  createSOWPaymentPlan,
  createSOWPaymentPlanLineItem,
  getSOWPaymentPlansBySOWId,
  getSOWPaymentPlanLineItemsByPlanId,
} from '../service/sowService';

export const createSOWController = async (req: Request, res: Response) => {
  try {
    const sow = await createSOW(req.body);
    res.status(201).json(sow);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getSOWByIdController = async (req: Request, res: Response) => {
  try {
    const sow = await getSOWById(req.params.id);
    if (sow) {
      res.status(200).json(sow);
    } else {
      res.status(404).json({ message: 'SOW not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const createSOWPaymentPlanController = async (req: Request, res: Response) => {
  try {

    const paymentPlan = await createSOWPaymentPlan(req.body);
    res.status(201).json(paymentPlan);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const createSOWPaymentPlanLineItemController = async (req: Request, res: Response) => {
  try {
    const lineItem = await createSOWPaymentPlanLineItem(req.body);
    res.status(201).json(lineItem);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getSOWPaymentPlansBySOWIdController = async (req: Request, res: Response) => {
  try {
    const paymentPlans = await getSOWPaymentPlansBySOWId(req.params.id);
    res.status(200).json(paymentPlans);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getSOWPaymentPlanLineItemsByPlanIdController = async (req: Request, res: Response) => {
  try {
    const lineItems = await getSOWPaymentPlanLineItemsByPlanId(req.params.id);
    res.status(200).json(lineItems);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
