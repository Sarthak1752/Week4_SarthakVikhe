// src/services/organizationService.ts
import Organization from '../models/organizationModel';

export const createOrganization = async (organizationData: any) => {
  const organization = await Organization.create(organizationData);
  return organization;
};

export const getOrganizations = async () => {
  const organizations = await Organization.findAll();
  return organizations;
};

export const getOrganizationById = async (organizationId: string) => {
  const organization = await Organization.findByPk(organizationId);
  return organization;
};
