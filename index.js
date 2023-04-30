const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');

const categories = require('./data/Catagories.json');
const news = require('./data/News.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is runing ')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedId = news.find(n => parseInt(n._id) === id)
    res.send(selectedId)
})
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (id === 0) {
        res.send(news)
    } else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})