const express=require('express')

const dataService = require('./services/data.service')
const app=express()
app.use(express.json())
const cors=require('cors')
app.use(cors({
    origin:'http://localhost:4200',
    Credentials:true
}))
app.listen(3000,()=>{
    console.log("server started    at the port");
    })
app.post('/registration',(req,res)=>{
    console.log(req.body)
   dataService.registration(req.body.uname, req.body.email,req.body.password,req.body.place)
   .then(result=>{
    res.status(result.statusCode).json(result)
   })

})
app.post('/login',(req,res)=>{
    console.log(req.body);
    dataService.login(req.body.email,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result) 
    })
})
app.post('/addproduct',(req,res)=>{
    console.log(req.body)
   dataService.addproduct(req.body.name,req.body.price,req.body.quantity,req.body.category)
   .then(result=>{
    res.status(result.statusCode).json(result)
   })

})
app.get('/viewproduct',(req,res)=>{
    dataService.viewproduct().then(result=>{
     res.status(result.statusCode).json(result)
    })
    // console.log(req.body)
              
    })       
      
