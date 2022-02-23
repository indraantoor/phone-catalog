const app = require("express")();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function serverStatus() {
  console.log(`Server running on port: ${PORT}`);
});
