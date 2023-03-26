const express=require('express')
const con=require('./database/config')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())

app.post('/',async (req,res)=>{
    con.query('INSERT INTO restaurant SET ?',req.body,(error,result,field)=>{
        if(error){
            res.send({result:0})
        }else{
            res.send({result:1})
        }
    })
})

app.listen(3001)
