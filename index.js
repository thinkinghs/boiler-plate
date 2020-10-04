const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://hs:ho467469!@express.exfmx.mongodb.net/express?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("Connected"))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})