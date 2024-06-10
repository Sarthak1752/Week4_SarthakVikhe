// src/services/paymentService.ts
import Payment from '../models/paymentModel';
import Invoice from '../models/invoiceModel';

export const makePayment = async (paymentData: any) => {
  const payment = await Payment.create(paymentData);
  
  // Update invoice status if full payment made
  if (payment.isFullPayment) {
    const invoice = await Invoice.findByPk(payment.invoiceId);
    if (invoice) {
      invoice.status = 'Approved';
      await invoice.save();
    }
  }

  return payment;
};

export const getPayments = async () => {
  const payments = await Payment.findAll();
  return payments;
};

export const getPaymentById = async (paymentId: string) => {
  const payment = await Payment.findByPk(paymentId);
  return payment;
};
