const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    console.log('first middleware...');
    res.send('<form action="product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/', (req, res, next) => {
    console.log('second middleware...');
    res.send('<h1>Hello from express</h1>');
})


app.listen(3000);
