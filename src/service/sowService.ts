// src/services/sowService.ts
import SOW from '../models/sowModel';
import SOWPaymentPlan from '../models/sowPaymentPlan';
import SOWPaymentPlanLineItem from '../models/sowPaymentPlanLineitem';

export const createSOW = async (sowData: any) => {
  const sow = await SOW.create(sowData);
  return sow;
};

export const getSOWById = async (sowId: string) => {
  const sow = await SOW.findByPk(sowId);
  return sow;
};

export const createSOWPaymentPlan = async (paymentPlanData: any) => {
  
    
    const paymentPlan = await SOWPaymentPlan.create(paymentPlanData);
  return paymentPlan;
 
};

export const createSOWPaymentPlanLineItem = async (lineItemData: any) => {
  const lineItem = await SOWPaymentPlanLineItem.create(lineItemData);
  return lineItem;
};

export const getSOWPaymentPlansBySOWId = async (sowId: string) => {
  const paymentPlans = await SOWPaymentPlan.findAll({ where: { sowId } });
  return paymentPlans;
};

export const getSOWPaymentPlanLineItemsByPlanId = async (planId: string) => {
  const lineItems = await SOWPaymentPlanLineItem.findAll({ where: { sowPaymentPlanId: planId } });
  return lineItems;
};
