const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

//!Pretty sure I need to add to the script but I already have a start script.
//! Is the node server use only for development?
//Should there be
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 5002, () => console.log("Mail Server Running"));

console.log(process.env.mailUSER);
console.log(process.env.userPW);
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.mailUSER,
    pass: process.env.userPW,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log("Post route: ", process.env.mailUSER);

  const mail = {
    from: name,
    to: process.env.mailUSER,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
