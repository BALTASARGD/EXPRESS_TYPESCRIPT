import express from 'express';
import mongoose from 'mongoose';
import { setRoutes } from './routes/index';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
setRoutes(app);
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch(err => {
    console.error('MongoDB connection error:', err);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
