// src/routes/clientRoutes.ts
import express from 'express';
import {
  createClientController,
  getClientsController,
  getClientByIdController
} from '../controllers/clientControl';

const router = express.Router();

router.post('/', createClientController);
router.get('/', getClientsController);
router.get('/:id', getClientByIdController);

export default router;
