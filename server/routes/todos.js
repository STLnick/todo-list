import { Router } from 'express';

import { dbTodos } from '../db';

const router = Router();

// Fetch all todos for a user
router.post('/', async (req, res) => {
  res.status(200).json(await dbTodos.getById(req.body));
});

// Add a todo
router.post('/add', async (req, res) => {
  res.status(201).json(await dbTodos.add(req.body));
});

// Delete a todo
router.delete('/delete/:id', async (req, res) => {
  res.status(204).json(await dbTodos.delete(req.params.id));
});

// Update a todo
router.patch('/update', async (req, res) => {
  res.status(204).json(await dbTodos.update(req.body));
});

export default router;
