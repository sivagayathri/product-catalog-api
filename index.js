const cors = require("cors");
const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");

const productRoutes = require("./src/routes/productRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);  

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
