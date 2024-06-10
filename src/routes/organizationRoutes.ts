// src/routes/organizationRoutes.ts
import express from 'express';
import {
  createOrganizationController,
  getOrganizationsController,
  getOrganizationByIdController
} from '../controllers/organizationControl';

const router = express.Router();

router.post('/register', createOrganizationController);
router.get('/', getOrganizationsController);
router.get('/:id', getOrganizationByIdController);

export default router;
