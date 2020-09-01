import { Router } from 'express';

import { dbUsers } from '../db';

const router = Router();

// Fetch all users
router.get('/', async (req, res) => {
  res.status(200).json(await dbUsers.getAll());
});

// Login a user
router.post('/', async (req, res) => {
  res.status(200).json(await dbUsers.loginUser(req.body));
});

// Add a user
router.post('/add', async (req, res) => {
  res.status(201).json(await dbUsers.add(req.body));
});

// Delete a user
router.delete('/delete/:id', async (req, res) => {
  res.status(204).json(await dbUsers.delete(req.params.id));
});

// Update a user
router.patch('/update/:id', async (req, res) => {
  res.status(201).json(await dbUsers.update(req.params.id, req.body));
});

export default router;
