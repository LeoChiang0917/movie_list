const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const movieList = require('./movies.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set ('view engine', 'handlebars')

app.get('/search',(req,res)=> {
    const keyword = req.query.keyward
    const movies = movieList.results.filter(movie=>{
        return movie.title.toLowerCase().includes(keyword.toLowerCase())
    })
    res.render('index',{movies: movies, moviekeyword:keyword})
   })

app.get('/',(req,res)=> {
 res.render('index',{movies: movieList.results})
})

app.get('/:movie_id', (req, res) => {
    console.log('req.params.movie_id', req.params.movie_id)
    const movie = movieList.results.find(movie=>movie.id.toString() === req.params.movie_id)
    res.render('show', { movie: movie })
  })

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`Express is listening on http://localhost:${port}`)
})