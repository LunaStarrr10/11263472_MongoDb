const express = require("express")
const app = express()

// declaring ROUTES so we can see the app on the browser
app.get('/',(req, res) => {
  res.send("Hello Node API")
})

// use git to keep track of codes

app.listen(3000, () =>{
console.log("My first Node API is running on port 3000")
})