// src/controllers/organizationController.ts
import { Request, Response } from 'express';
import { createOrganization, getOrganizations, getOrganizationById } from '../service/organizationService';

export const createOrganizationController = async (req: Request, res: Response) => {
  try {
    const organization = await createOrganization(req.body);
    res.status(201).json(organization);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};


export const getOrganizationsController = async (req: Request, res: Response) => {
  try {
    const organizations = await getOrganizations();
    res.status(200).json( organizations);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};


export const getOrganizationByIdController = async (req: Request, res: Response) => {
  try {
    const organization = await getOrganizationById(req.params.id);
    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: 'Organization not found' });
    }
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
