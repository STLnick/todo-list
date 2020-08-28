import { Router } from 'express';

// TODO: Import methods from '../db' to perform todo database interactions

const router = Router();

router.get('/', (req, res) => {
  // Fetch all todos
});

router.post('/add', (req, res) => {
  // Add a todo
});

router.delete('/delete', (req, res) => {
  // Delete a todo
});

// TODO: Add an 'update' route - also need to implement way to change a 'todo' in the UI

export default router;
