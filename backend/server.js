import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import data from './data/data.js';
const port = process.env.PORT || 5000;

import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.get('/api/data/:id', (req, res) => {
    const todo = data.find((p) => p.id === req.params.id);
    res.json(todo);
});

app.use(cors());

app.listen(port, () => console.log(`Server is running on port ${port}`));
