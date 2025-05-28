import express from 'express';
import cors from 'cors';
// import stockRoutes from './routes/stock';

const app = express();
const PORT = 3001;

app.use(cors());
// app.use('/api/stock', stockRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
