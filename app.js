const express = require('express')
var exphbs  = require('express-handlebars');
const app = express()
const port = 3000
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function (req, res) {
  res.render('home', {
    title:"main",
  });
});
app.get('/videos', function (req, res) {
  res.render('videos',{
    title:"videos"
  });
});
app.use(express.static("public"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
