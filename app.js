const express = require("express");
const app = express();
const questionRouter = require("./routes/questionRoutes");
const testRouter = require("./routes/testRoutes");
const examRouter = require("./routes/examRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const Urls = require("./settings/staticUrls");

app.use(cors());
app.listen(Urls.serverPort, () =>
  console.log(
    `Server is running at ${Urls.serverDomain}:${Urls.serverPort}`
  )
);

app.use(bodyParser.json());

app.use("/api/Questions", questionRouter);
app.use("/api/tests", testRouter);
app.use("/api/exams", examRouter);
