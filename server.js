require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const campaignRoutes = require("./routes/campaignRoutes");
const leadRoutes = require("./routes/leadRoutes");
const runScheduler = require("./scheduler/jobRunner");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/campaigns", campaignRoutes);
app.use("/api/leads", leadRoutes);

runScheduler();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
