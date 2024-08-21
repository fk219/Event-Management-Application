const mongoose = require("mongoose");

const mongoUri = 'mongodb+srv://furqank219:Wze8L5AmvX4cCwDY@cluster0.ijlcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const dbConnection = () => {
  mongoose
    .connect(mongoUri, { dbName: "MERN_STACK_EVENT_MESSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Some error occurred while connecting to the database:", err);
    });
};

module.exports = dbConnection;
