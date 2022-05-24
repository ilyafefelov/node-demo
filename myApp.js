console.log("Hello World")
let express = require('express');
let app = express();
app.get('/',(req, res) => {
  // res.send('Hello Express');
  // absolutePath = __dirname + relativePath/file.ext
  // console.log(__dirname + '/views/index.html')
  // res.senfFile(__dirname + '/views/index.html')
  res.sendFile(__dirname + "/views/index.html");
  
})

app.use('/public', express.static(__dirname + "/public"))


































 module.exports = app;
