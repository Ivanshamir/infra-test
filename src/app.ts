import express from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/', apiRoutes);

app.listen(parseInt(PORT.toString()), '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;