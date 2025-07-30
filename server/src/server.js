const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const clusterRoutes = require('./routes/clusterRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

const app = express();

app.use(cors({
  origin: ['https://supply-saathi-tawny.vercel.app'],
  credentials: true
}));

app.set("trust proxy", 1); 

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/clusters', clusterRoutes);
app.use('/api/suppliers', supplierRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 7777, () => {
      console.log('Server running on port', process.env.PORT || 7777);
    });
  })
  .catch(err => console.log('MongoDB connection error:', err));
