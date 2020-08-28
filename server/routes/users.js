import { Router } from 'express';

// TODO: Import methods from '../db' to perform user database interactions

const router = Router();

router.get('/', (req, res) => {
  // Fetch all users
});

router.post('/add', (req, res) => {
  // Add a user
});

router.delete('/delete', (req, res) => {
  // Delete a user
});

// TODO: Add an 'update' route - also need to implement way to change a 'user' in the UI

export default router;
