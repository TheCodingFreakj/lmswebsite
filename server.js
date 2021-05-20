import express from "express";
import cors from "cors";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});
console.log("this stage passes");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Configure the CORs middleware
app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);
import userRoute from "./src/routes/userRoute";
console.log("this stage passes");
app.use("/api/v1", userRoute);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "YAY! Congratulations! Your first endpoint is working" });
});

//Ports
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`This Server is listening to user requests at ${port}`);
});

//https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66
