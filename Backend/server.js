//********************************* Connection Requirements (Postman and MongoDb) ************************************* */
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const floorRoutes = require('./routes/FloorRoutes'); // Ensure this path is correct

dotenv.config({ path: "./.env" });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
require("./db/database");

// Register routes
app.use('/api', floorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server listening at http://localhost:${PORT}`);
})
