require("dotenv").config();
const express = require("express");
const path = require("path");
const sendMail = require("./mail");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  const { name, email, message } = req.body;
  sendMail(name, email, message, function(err, data) {
    if (err) {
      console.log("err", err)
      res.status(500).json({ message: "Ops! An error occured" });
    } else {
      res.json({ message: "Your message was sent successfully. Thanks!" });
    }
  });
});

app.use(express.static(path.resolve(__dirname)));

app.listen(process.env.PORT || 3000, () => console.log("Server started!"));
