const express = require('express');
const { ClerkExpressWithAuth, ClerkExpressRequireAuth,  } = require('@clerk/clerk-sdk-node');
const { Clerk } = require('@clerk/clerk-sdk-node')
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.use(ClerkExpressWithAuth()) // This line validates all routes with Clerk authentication

app.get('/protected', async (req, res) => {
    try {
        console.log(req.auth)
        res.send(req.auth)
    } catch (error) {
        return res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});