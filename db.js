import moongoose from "mongoose";

const mongoose = require('mongoose');
const mongoURL= "mongodb+srv://DaMuse:kobiborga@melissaapi.xr35jyw.mongodb.net/Wacko-Node?retryWrites=true&w=majority"

function connect () {
  mongoose.connect(mongoURL, {
  useNewUrlParser:true,useUnifiedTopology:true
  })
  .then(() => {
console.log("connected to MongoDb");
  }
  )
  .catch(error) => {
    console.error("Error connecting to Mongo:", error);
  }
}
module.exports = {connect}
