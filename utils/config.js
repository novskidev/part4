require("dotenv").config();

const PORT = process.env.PORT || 3003;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://novskidev:v0ZGHCO6PUQJ2Q8s@bloglist.nznyhjr.mongodb.net/?retryWrites=true&w=majority&appName=bloglist";

module.exports = {
  MONGODB_URI,
  PORT,
};
