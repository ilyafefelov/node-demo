console.log("Hello World")
let express = require('express');
let app = express();

app.get('/',(req, res) => {
  // res.send('Hello Express');
  // absolutePath = __dirname + relativePath/file.ext
  // res.senfFile(__dirname + '/views/index.html')
  res.sendFile(__dirname + "/views/index.html");
  
})
.use('/public', express.static(__dirname + "/public"))
  
.get('/json', (req,res) => {
  res.json(
    {"message": process.env.MESSAGE_STYLE == 'uppercase' ? "HELLO JSON":"Hello json"}
  )
})































 module.exports = app;
