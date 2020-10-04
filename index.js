const express = require('express')
const app = express()
const port = 5000

const bodyParser = require("body-parser")
const { User } = require("./models/User")

const config = require("./config/key")

// body parser가 가져오는 정보를 인코딩 하는 것
// application/x-www-form-urlencoded 타입을 해석
app.use(bodyParser.urlencoded({extended: true}))

// application/json 타입을 해석
app.use(bodyParser.json())

const mongoose = require("mongoose")
mongoose.connect(config.mongoURI , {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("Connected"))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! hs welcome nice good')
})

app.post('/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보를 client에서 가져오고 db에 넣어줌
  
  
  const user = new User(req.body)
  
  // mongodb에서 오는 정보
  user.save((err, userInfo) => {
    // err 발생시 json 타입으로 전달
    if(err) return res.json({ success: false, err})

    // 성공시
    return res.status(200).json({
      success:true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})