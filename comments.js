// Create web server 
// Create a comments API
// Create a GET route for /comments
// Create a POST route for /comments
// Create a DELETE route for /comments
// Create a PUT route for /comments
// Create a PATCH route for /comments
// Create a GET route for /comments/:id

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const uuid = require('uuid/v4');

// Import data
const comments = require('./data/comments');

// Create web server
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Create a comments API
// Create a GET route for /comments
app.get('/comments', (req, res) => {
    res.status(200).json(comments);
});

// Create a POST route for /comments
app.post('/comments', (req, res) => {
    const newComment = {
        id: uuid(),
        body: req.body.body,
        postId: req.body.postId
    }
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Create a DELETE route for /comments
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(comment => comment.id === id);
    if (foundComment) {
        comments = comments.filter(comment => comment.id !== id);
        res.status(200).json(foundComment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

// Create a PUT route for /comments
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(comment => comment.id === id);
    if (foundComment) {
        for (let key in req.body) {
            foundComment[key] = req.body[key];
        }
        res.status(200).json(foundComment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

// Create a PATCH route for /comments
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(comment => comment)
})