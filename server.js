const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5002, () => console.log("Mail Server Running"));

// console.log(process.env.mailUSER);
// console.log(process.env.PW);
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.mailUSER,
    pass: process.env.USERPW,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

//!Pretty sure I need to add to the script but I already have a start script.
//! Is the node server use only for development?
