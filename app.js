const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

var cast = require('./data/characters.json');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index',{
        cast:cast.characters
    });
})

app.listen(3000,()=>{
    console.log("Server Running");
})