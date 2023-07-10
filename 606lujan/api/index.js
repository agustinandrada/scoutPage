require("dotenv").config();
const app = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

try {
  app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
  });
} catch (err) {
  console.log(err);
}
