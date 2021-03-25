require('dotenv').config();

const express = require("express");
const braintree = require("braintree");
const helmet = require('helmet');
const config = require("./config");
const https = require('https');
const SHA256 = require("crypto-js/sha256");

const gateway = new braintree.BraintreeGateway(config);

// https://developers.braintreepayments.com/start/hello-server/node
// https://github.com/smarkets/react-native-paypal/blob/master/exampleServer/server.js

const port = 3002;

const app = express();

app.use(helmet({

}));

let customerId; 

const createToken = async () => {
  const time = new Date().getTime * Math.random(); // multiply the time right now by a rand num btw 0 and 1
  customerId = SHA256(time)
}

app.use("/token", async (req, res) => {
  await createToken()
  gateway.clientToken.generate(
    {
      customerId: customerId,
    },
    (err, res) => {
      // pass clientToken to your front-end
      const clientToken = res.clientToken;
      return res.send(JSON.stringify({success: true, clientToken: res.clientToken}))
    }
  );
});

app.use("/pay", (req, res) => {
  // get the amount and nonce from front end request
});

gateway.clientToken.generate(
  {
    customerId: customerId,
  },
  (err, response) => {
    // pass clientToken to your front-end
    const clientToken = response.clientToken;
  }
);

const httpsServer = https.createServer(app); // could add credentials

httpsServer.listen(3005);

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server running on PORT ${port}`);
});
