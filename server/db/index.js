import { ObjectId } from 'mongodb';
import client from './client';

/* * Users * */
export const dbUsers = {
  add: async (user) => {
    try {
      return await client.db('todoapp').collection('users').insertOne(user);
    } catch (err) {
      throw new Error(err);
    }
  },

  delete: async (id) => {
    try {
      return await client.db('todoapp').collection('users').deleteOne({ _id: ObjectId(id) });
    } catch (err) {
      throw new Error(err);
    }
  },

  getAll: async () => {
    try {
      return await client.db('todoapp').collection('users').find().toArray();
    } catch (err) {
      throw new Error(err);
    }
  },

  update: async (id, propsToUpdate) => {
    try {
      return await client.db('todoapp').collection('users').findOneAndUpdate(
        { _id: ObjectId(id) }, // Find by ID
        { $set: { ...propsToUpdate } }, // Update with passed in properties and values
        { returnNewDocument: true }, // Return new document to update state in client-side
      );
    } catch (err) {
      throw new Error(err);
    }
  },
};

/* * Todos * */
export const dbTodos = {
  add: async (todo) => {
    try {
      return await client.db('todoapp').collection('todos').insertOne(todo);
    } catch (err) {
      throw new Error(err);
    }
  },

  delete: async ({ _id }) => {
    try {
      return await client.db('todoapp').collection('todos').deleteOne({ _id: ObjectId(_id) });
    } catch (err) {
      throw new Error(err);
    }
  },

  getById: async ({ userId }) => {
    try {
      return await client.db('todoapp').collection('todos').find({ userId }).toArray();
    } catch (err) {
      throw new Error(err);
    }
  },

  update: async (toggledTodo) => {
    try {
      const { _id, completed } = toggledTodo;
      return await client.db('todoapp').collection('todos').findOneAndUpdate(
        { _id: ObjectId(_id) }, // Find by ID
        { $set: { completed } }, // Update with passed in properties and values
      );
    } catch (err) {
      throw new Error(err);
    }
  },
};
