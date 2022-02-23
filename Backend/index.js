const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const phoneRoute = require("./routes/phone");

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/phones", phoneRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function serverStatus() {
  console.log(`Server running on port: ${PORT}`);
});
