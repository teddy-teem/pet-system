require("dotenv").config();
const express = require("express");
const routes = require("./routes")
const app = express();

app.use(express.json());
app.use("/api", routes)


app.listen(process.env.PORT, () => {
  console.log(
    `"${process.env.SERVICE}" has been started successfully on ${process.env.PORT}...`
  );
});
