import { ObjectId } from 'mongodb';
import client from './client';

/* * Users * */
export const dbUsers = {
  getAll: async () => {
    try {
      return await client.db('todoapp').collection('users').find().toArray();
    } catch (err) {
      throw new Error(err);
    }
  },

  getById: async (id) => {
    try {
      return await client.db('todoapp').collection('users').find({ _id: ObjectId(id) });
    } catch (err) {
      throw new Error(err);
    }
  },

  add: async (user) => {
    try {
      return await client.db('todoapp').collection('users').insertOne();
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

  update: async (id, propsToUpdate) => {
    try {
      return await client.db('todoapp').collection('users').findOneAndUpdate(
        { _id: id }, // Find by ID
        { ...propsToUpdate }, // Update with passed in properties and values
        { returnNewDocument: true }, // Return new document to update state in client-side
      );
    } catch (err) {
      throw new Error(err);
    }
  },
};

/* * Todos * */
export const dbTodos = {
  getAll: async () => {
    try {
      return await client.db('todoapp').collection('todos').find().toArray();
    } catch (err) {
      throw new Error(err);
    }
  },

  getById: async (id) => {
    try {
      return await client.db('todoapp').collection('todos').find({ _id: ObjectId(id) });
    } catch (err) {
      throw new Error(err);
    }
  },

  add: async (todo) => {
    try {
      return await client.db('todoapp').collection('todos').insertOne(todo);
    } catch (err) {
      throw new Error(err);
    }
  },

  delete: async (id) => {
    try {
      return await client.db('todoapp').collection('todos').deleteOne({ _id: ObjectId(id) });
    } catch (err) {
      throw new Error(err);
    }
  },

  update: async (id, propsToUpdate) => {
    try {
      return await client.db('todoapp').collection('todos').findOneAndUpdate(
        { _id: id }, // Find by ID
        { ...propsToUpdate }, // Update with passed in properties and values
        { returnNewDocument: true }, // Return new document to update state in client-side
      );
    } catch (err) {
      throw new Error(err);
    }
  },
};
