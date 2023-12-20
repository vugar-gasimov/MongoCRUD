const app = require("./app");
const mongoose = require("mongoose");

const PORT = 3000;
const { DB_ADMIN } = process.env;
// const { DB_ADMIN } = require("./config");
// console.log(process.env.DB_ADMIN);
mongoose
  .connect(DB_ADMIN)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database was connected successfully");
      console.log(`Server is running. Use our Api on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
