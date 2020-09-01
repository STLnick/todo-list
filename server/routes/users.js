import { Router } from 'express';
import querystring from 'querystring';

import { dbUsers } from '../db';

const router = Router();

// Fetch all users
router.get('/', async (req, res) => {
  res.status(200).json(await dbUsers.getall());
});

// Fetch one user by id
router.get('/:id', async (req, res) => {
  const query = querystring.parse(req.url.slice(req.url.indexOf('?') + 1));
  res.status(200).json(await dbUsers.getById(query.id));
});

// Add a user
router.post('/add', async (req, res) => {
  res.status(201).json(await dbUsers.add(req.body));
});

// Delete a user
router.delete('/delete', async (req, res) => {
});

// TODO: Add an 'update' route - also need to implement way to change a 'user' in the UI

export default router;
