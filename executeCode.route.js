const express = require("express");
var axios = require("axios");
const config = require("./config");

const clientId = config.clientId;
const clientSecret = config.clientSecret;

const router = express.Router();

router.post("/run", (req, res) => {
  if (req.body.language == "python") req.body.language = "python3";
  else if (req.body.language == "c_cpp") req.body.language = "cpp17";
  else if (req.body.language == "java") req.body.language = "java";

  var programData = {
    clientId: clientId,
    clientSecret: clientSecret,
    language: req.body.language,
    script: req.body.code,
    stdin: req.body.input,
    versionIndex: req.body.language == "java" ? "4" : "0",
  };
  axios.post("https://api.jdoodle.com/v1/execute", programData).then(
    (response) => {
      const result = response.data;
      console.log(result);
      return res.status(201).send(result);
    },
    (error) => {
      console.log(error);
      return res.status(400).send(error);
    }
  );
});

module.exports = router;
