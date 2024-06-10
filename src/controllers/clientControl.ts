// src/controllers/clientController.ts
import { Request, Response } from 'express';
import { createClient, getClients, getClientById } from '../service/clientService';

export const createClientController = async (req: Request, res: Response) => {
  try {
    const client = await createClient(req.body);
    res.status(201).json(client);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getClientsController = async (req: Request, res: Response) => {
  try {
    const clients = await getClients();
    res.status(200).json(clients);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const getClientByIdController = async (req: Request, res: Response) => {
  try {
    const client = await getClientById(req.params.id);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
