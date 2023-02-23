const express = require('express');
const app = express();


app.set('view engine','pug');
app.set('views','views');


app.get('/', (req, res,next) => {
    var payload = {
        pageTitle: 'home'
    };
    res.status(200).render('home',payload);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});