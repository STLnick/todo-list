import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
  },
);

(async () => {
  client.connect();

  process.on('SIGINT', () => {
    client.close().then(() => {
      console.info('SIGINT receive : Closing connection to the database');
      process.exit(0);
    });
  });
})();

export default client;
