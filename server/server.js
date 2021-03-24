const express = require("express");
const braintree = require("braintree");
const config = require("./config");
const { response } = require("express");

const gateway = new braintree.BraintreeGateway(config);

// https://developers.braintreepayments.com/start/hello-server/node
// https://github.com/smarkets/react-native-paypal/blob/master/exampleServer/server.js

const port = 3002;

app.use("/token", (req, res) => {
  gateway.clientToken.generate(
    {
      customerId: randomNumFromReq,
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
    customerId: aCustomerId,
  },
  (err, response) => {
    // pass clientToken to your front-end
    const clientToken = response.clientToken;
  }
);

const app = express();

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server running on PORT ${port}`);
});
