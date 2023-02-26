const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const middleware = require('./middleware');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');


app.set('view engine','pug');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));
// routes

app.use('/login',loginRoutes);
app.use('/register',registerRoutes);
app.get('/',middleware.requireLogin , (req, res,next) => {
    var payload = {
        pageTitle: 'home'
    };
    res.status(200).render('home',payload);
});



app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});