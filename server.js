const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoute = require("./routes/authRoute");
const uploadRoute = require("./routes/uploadRoute");
const app = express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
// app.use("/resources", express.static(__dirname + "/images")); //iomage locations
// app.use(express.static(__dirname + "/imageCover"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose

  .connect(
    "mongodb+srv://pallavi57:pallavi57@cluster0.2unxm.mongodb.net/lmssystem?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Database Connected"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT,POST,DELETE");
  next();
});

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use("/api/v1", authRoute);
app.use("/api/v1", uploadRoute);

app.get("/", (req, res) => {
  res.json({ message: `Welcome to my application.${process.env.PORT}` });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
