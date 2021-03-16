import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./router/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

const connectionUrl =
  "mongodb+srv://sayeed:test123@memories.qfvur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
  )
  .catch(() => console.log(error.message));

mongoose.set("useFindAndModify", false);

