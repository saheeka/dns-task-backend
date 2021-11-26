const mongoose=require('mongoose')

//connect server to db
mongoose.connect('mongodb://localhost:27017/deepnetsoft',{
    useNewUrlParser:true
})

//model creation
const User= mongoose.model('User',{
    uname:String,
    email:String,
    
    password:String,
    place:String

})

const Product=mongoose.model('Product',{
    Name:String,
    Price:Number,
    Quantity:Number,
    Category:String
})
module.exports={
User,
Product
}