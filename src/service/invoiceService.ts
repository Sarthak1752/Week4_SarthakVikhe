import Invoice from '../models/invoiceModel';
import InvoiceLineItem from '../models/invoiceLineItem';
import SOWPaymentPlan from '../models/sowPaymentPlan';
import SOWPaymentPlanLineItem from '../models/sowPaymentPlanLineitem';
import Client from '../models/clientModel';


export const generateInvoices = async (data:any) => {
  const today = '2024-10-01';
  
  const paymentPlans = await SOWPaymentPlan.findAll({
    where: {
      plannedInvoiceDate: today,
    },
  });

  const invoices = [];

  for (const plan of paymentPlans) {
    
      const lineItems = await SOWPaymentPlanLineItem.findAll({
        where: {
          sowPaymentPlanId: plan.id,
        },
      });

      const client = await Client.findByPk(plan.clientId);
      if (!client) {
        throw new Error(`Client with ID ${plan.clientId} does not exist.`);
      }
      
      const invoice = await Invoice.create({
        id:data.id,
        sowId: plan.sowId,
        totalInvoiceValue: plan.totalActualAmount,
        status: data.status,
        invoiceSentOn: data.invoiceSentOn,
        clientId: data.clientId,
        paymentReceivedOn: null, 
        invoiceVersionNumber: data.invoiceVersionNumber,
        invoiceAmount: plan.totalActualAmount,
        invoiceTaxAmount: plan.totalActualAmount * 0.18,
      });

       

      for (const item of lineItems) {
        await InvoiceLineItem.create({
          id:data.invoiceLineItemId,
          invoiceId: data.id,
          orderNo: item.orderId,
          particular: item.particular,
          rate: item.rate,
          unit: item.unit,
          total: item.total,
        });
      }


      invoices.push( invoice);

      
    
  }

  return invoices;
};



export const getInvoices = async () => {
  const invoices = await Invoice.findAll();
  return invoices;
};

export const getInvoiceById = async (invoiceId: string) => {
  const invoice = await Invoice.findByPk(invoiceId);
  return invoice;
};
