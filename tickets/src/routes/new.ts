import express, { Request, Response } from 'express';
import { requireAuth } from '@zidny.net/common';
import { validateRequest } from '@zidny.net/common';
import { body } from 'express-validator';

import { Ticket } from '../models/ticket';

const router = express.Router();

router.post(
  '/api/tickets',
  requireAuth,
  [
    body('title').trim().notEmpty().withMessage('Title is required field'),
    body('price')
      .notEmpty()
      .isFloat({ gt: 0 })
      .withMessage('Price is required field and must be greater than zero'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const title = req.body.title;
    const price = req.body.price;
    const userId = req.currentUser!.id; // requireAuth provide the currentUser as an object and assotiated it to the request object

    // Create & Save new Ticket
    const ticket = Ticket.build({ title, price, userId });
    await ticket.save();

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
