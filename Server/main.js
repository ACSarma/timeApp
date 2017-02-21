var express = require('express')
var app = express()
var a = 1;
app.get('/', function (req, res) {
  res.send('Arun World!' +"#"+ a);
  a++;
  console.log(a, "connection");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})