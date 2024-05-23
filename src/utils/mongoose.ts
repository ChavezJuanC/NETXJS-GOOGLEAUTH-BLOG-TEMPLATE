import mongoose, { connect, connection } from "mongoose";

//initial connection state
const conn = {
  isConnected: 0,
};

//connection fucntion
export async function connectDB() {
  //if connection exists return
  if (conn.isConnected) return;

  //await for connection //////DONT FORGET TO ADD URI HERE////////////
  const MONGODB_URI =
    "mongodb+srv://root:root@blogit.ac91ify.mongodb.net/?retryWrites=true&w=majority&appName=BLOGIT";

  const db = await connect(MONGODB_URI);

  ///log for debug
  console.log(db.connection.db.databaseName);

  //set connection state /debug as well
  conn.isConnected = db.connections[0].readyState;
}

// Event Listeners for MongoDB Connection //

connection.on("connected", () => {
  console.log("Mongoose Connected");
});

connection.on("error", (err) => {
  console.log(`connection errror : ${err}`);
});