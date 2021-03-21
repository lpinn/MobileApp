const braintree = require("braintree");

const config = {
  environment: braintree.Environment.Sandbox, // or braintree.Environment.Production
  merchantId: process.env.MERCHANT_ID, 
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
}

module.exports = config