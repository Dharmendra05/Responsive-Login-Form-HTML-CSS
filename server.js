const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


const htmlFile = path.join(__dirname, "index.html");
const cssFile = path.join(__dirname, "index.css");

app.get('/', (req, res)=>{
  res.sendFile(htmlFile);
});

app.get('/index.css', (req, res)=>{
    res.sendFile(cssFile);
  });

app.listen(port, ()=>{
 console.log(`server is running on http://localhost:${port}`)
});
