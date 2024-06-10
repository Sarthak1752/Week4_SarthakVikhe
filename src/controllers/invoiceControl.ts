// src/controllers/invoiceController.ts
import { Request, Response } from 'express';
import { generateInvoices, getInvoices, getInvoiceById} from '../service/invoiceService';

export const generateInvoicesController = async (req: Request, res: Response) => {
  try {
    const invoices:any = await generateInvoices(req.body);
    res.status(201).json(invoices);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};



export const getInvoicesController = async (req: Request, res: Response) => {
  try {
    const invoices = await getInvoices();
    res.status(200).json(invoices);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getInvoiceByIdController = async (req: Request, res: Response) => {
  try {
    const invoice = await getInvoiceById(req.params.id);
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ message: 'Invoice not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
