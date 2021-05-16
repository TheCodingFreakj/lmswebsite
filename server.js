import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import userRoute from "./src/routes/userRoute";
app.use("/api/v1", userRoute);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "YAY! Congratulations! Your first endpoint is working" });
});

app.listen(3000);
console.log("app running on port ", 3000);

//https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66
