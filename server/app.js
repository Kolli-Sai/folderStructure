const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");
const { connectToDb } = require("./db/connection");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8190;
const hostName = "localhost";

app.use(express.json());
app.use(cors());

app.use("/api/v1/tasks", tasksRouter);

const startServer = async () => {
  try {
    await connectToDb(process.env.URL);

    console.log(`connected to mongodb`);
    app.listen(port, hostName, () => {
      console.log(`server listening at http://${hostName}:${port}`);
    });
  } catch (error) {
    console.log(`error -> ${error}`);
  }
};

startServer();
