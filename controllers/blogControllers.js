const express = require('express');

const Blog = require('../models/blogs');
function getBlogs(req, res){
    Blog.find().sort({ createdAt: -1 }).then(result => {
        res.render('index', { blogs: result });    
    }).catch(err => {
        res.send(err);
    })
}


function newBlog(req, res)  {
    const blog = new Blog(req.body);
    blog.save().then((result) => {
        res.redirect('/blogs');

    }).catch(err => {
        console.log(err);
    })
}

function singleBlog (req, res){
    const id = req.params.id;
    Blog.findById(id).then(result => {
        res.render('single', { blog: result });
    }).catch(err => {
        console.log(err);
    });
}

function deleteBlog(req, res) {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result => {
        res.json({redirect:'/blogs'});
    }).catch(err => {
        console.log(err);
    });
}

module.exports = { newBlog, singleBlog, deleteBlog, getBlogs };