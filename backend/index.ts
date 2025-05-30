import express from 'express';
import cors from 'cors';
import stockStatsRoutes from './stockStatsRoutes';

const app = express();
const PORT = 3001;

app.use(cors());

app.use('/stockStats', stockStatsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});