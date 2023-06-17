import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import connectDB from './db/connect.js';

import cors from 'cors';
app.use(cors());

import todos from './routes/todos.js';

// middleware

app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/v1/todos', todos);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is running on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};
start();
