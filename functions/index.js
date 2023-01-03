const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')('sk_test_51MLncxSHIXt2RMkc9k0snbcF9xU4oNJ4s84yTwlP8XRImf8p7XmRJ85ypSGA1hGB7DcZTVxxPjgfezgidJuQhdue00LZsbDOkV')

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//  Api routes
app.get('/',(req,res)=> res.status(200).send('Hello World'))

app.post('/payments/create', async (req,res)=> {
    const total = req.query.total;
    console.log('Payment Request Recieved BOOM!!! gor this amount >>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:'inr',
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});

// listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-98e5f/us-central1/api