const express = require('express');
const nodemon = require('nodemon');
const ejs = require('ejs');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const app = express();
const dbCode = 'mongodb+srv://antonia_savu:CiDOUf9NGms8cRdr@myfirstcluster.thivy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const blogsRouter = require('./routes/blog_routes');
  

mongoose.connect(dbCode, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
//accepting form data



app.get('/', (req, res) => {
    res.redirect('/blogs');
})


app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/create', (req, res) => {
    res.render('create');
})

app.use('/blogs',blogsRouter);

app.use((req, res) => {
    res.render('404');
})
