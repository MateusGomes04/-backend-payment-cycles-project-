const restful = require("node-restful");
const mongoose = restful.mongoose;
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, rewuired: true },
  password: { type: String, min: 6, max: 12, required: true },
});
module.exports = restful.model("User", userSchema);