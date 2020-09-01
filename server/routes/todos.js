import { Router } from 'express';

import { dbTodos } from '../db';

const router = Router();

// Fetch all todos
router.get('/', async (req, res) => {
  res.status(200).json(await dbTodos.getAll());
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
router.patch('/update/:id', async (req, res) => {
  res.status(201).json(await dbTodos.update(req.params.id, req.body));
});

export default router;
