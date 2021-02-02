const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');
var bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.options('*', cors());

//BodyParser Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//DB Config
const db = 'mongodb+srv://root:root@cluster0.abzdn.mongodb.net/student-data?retryWrites=true&w=majority'

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//Use Routes
app.use("/api/addExcelData", require("./routes/student"));
// app.use("/api/users", require("./routes/api/users"));
// app.use("/api/auth", require("./routes/api/auth"));

//Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//   //Set static folder
//   app.use(express.static("client/build"));

//   app.use("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));