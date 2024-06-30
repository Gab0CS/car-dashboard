import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

// Interface for the JSON data
interface JsonData {
  condition: string;
  description: string;
  title: string;
  brand: string;
  price: string;
  product_type: string;
  custom_label_0: string;
  timestamp: string;
}

// Initialize the app with the env configuration
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Body parser to parse the requests
  server.use(bodyParser.json());

  server.get('/api/inventory', (req: Request, res: Response) => {
    try {
      // Path to the JSON file
      const filePath = path.join(__dirname, 'data', 'csvjson.json');

      const jsonData: JsonData[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      res.json(jsonData);
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

  // Handle all other requests with Next.js
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
