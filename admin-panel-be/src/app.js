import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

// Routes
app.use("api/users", userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;