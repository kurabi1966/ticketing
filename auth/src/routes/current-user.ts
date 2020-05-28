import express from 'express';
import { currentUser } from '../middlewares/current-user';
// import { requireAuth } from '../middlewares/require-auth';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  console.log(`auth: ${req.url}`);

  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
