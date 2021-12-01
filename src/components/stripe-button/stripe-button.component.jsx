import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51K1st5Hvx6tfjwekE3QmFWQEzE0nfcdCi9vl3R0iVSkm0zeguK9ci0qbtkT4gfuu2ZTGmPdX5QOxXkA4JAVvg4To00A7kl7lbA'

    const onToken = token => {
        console.log(token);
        alert('Payment succesful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price} `}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            currency='USD'
        />
    )
}

export default StripeCheckoutButton