const express=  require('express');
const data = require('./data')
const cors=require('cors')
const app = express();
app.use(cors())



app.get('/getmovies',function(req,res){
    res.send(data)
});


app.listen(4000,()=>{
    console.log("connected successfully")
})