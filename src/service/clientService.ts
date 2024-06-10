// src/services/clientService.ts
import Client from '../models/clientModel';

export const createClient = async (clientData: any) => {
  const client = await Client.create(clientData);
  return client;
};

export const getClients = async () => {
  const clients = await Client.findAll();
  return clients;
};

export const getClientById = async (clientId: string) => {
  const client = await Client.findByPk(clientId);
  return client;
};
