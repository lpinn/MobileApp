import { requestOneTimePayment, requestBillingAgreement } from 'react-native-paypal';
import axios from 'axios';

const getToken = () => {
    axios.get()
}

const pay = (amount) => {
    const {
        nonce,
        payerId,
        email,
        firstName,
        lastName,
        phone
    } = await requestOneTimePayment(
      token,
      {
        amount: '5', // required
        currency: 'GBP',
        localeCode: 'en_GB', 
        shippingAddressRequired: true,
        userAction: 'commit', // display 'Pay Now' on the PayPal review page
        // one of 'authorize', 'sale', 'order'. defaults to 'authorize'. see details here: https://developer.paypal.com/docs/api/payments/v1/#payment-create-request-body
        intent: 'authorize', 
      }
    );
}


export {
    getToken,
    pay,
    
}