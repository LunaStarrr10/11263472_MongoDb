const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

// declaring ROUTES so we can see the app on the browser
app.get('/patientdetails',(req, res) => {
  res.send("Patient Details")
})

// use git to keep track of codes


app.post('/product', (req, res)=>{
  try {
    
  } catch (error) {
    console.log(error.message);
     res.status(500).json(
      {message:eror.message}
     )
  }
})


mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://DaMuse:kobiborga@melissaapi.xr35jyw.mongodb.net/Wacko-Node?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to MongoDB')
  app.listen(3000, () =>{
    console.log("My first Node API is running on port 3000")
    })
}).catch((error) => {
  console.log(error)
})
