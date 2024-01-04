const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  //Write a code here for endpoint /product/:productId and also print parameter in json form
   let id=req.params.productId;

   res.status(200).json({'productId':id});
});

module.exports = app;
