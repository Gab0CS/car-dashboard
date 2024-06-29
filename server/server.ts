import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

// Interface for the CSV data
interface CsvData {
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

  // Route of the api
  server.get('/api/inventory', (req: Request, res: Response) => {
    
    // Array to store the data
    const results: CsvData[] = [];

    // Path to the CSV file
    const filePath = path.join(__dirname, 'data', 'sample-data-v2.csv');
    
    // Read Stream for the csv file
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: CsvData) => results.push(data))
      .on('end', () => {
        res.json(results);
      })
      .on('error', (error) => {
        res.status(500).json({ error: error.message });
      });
  });

  // if other request handle also it
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Server start
  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch((err) => {
  // Handle errors
  console.error(err.stack);
  process.exit(1);
});
