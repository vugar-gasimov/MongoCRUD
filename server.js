const app = require("./app");
const mongoose = require("mongoose");

const PORT = 3000;
const DB_ADMIN =
  "mongodb+srv://Vugar1998:iNpWuaf1SGNb2S0o@cluster0.pu1y2vq.mongodb.net/contacts_crud?retryWrites=true&w=majority";

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
