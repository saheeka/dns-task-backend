const db = require('./db')
const registration = (uname, email,password,place) => {
    return db.User.findOne({ email }).then(user => {
      console.log(user);
      if (user) {
        return {
          statusCode: 422,
          status: false,
          message: "user already exist ! please login"
        }
      }
      else {
        const newUser = new db.User({
          uname,
          email,
          password,
          place
        })
        newUser.save()
        return {
          statusCode: 200,
          status: true,
          message: "successfully registered..."
        }
      }
    })
}
const login = (email, password) => {
    return db.User.findOne({ email, password })
      .then(user => {
        if (user) {
         
          return {
            statusCode: 200,
            status: true,
            message: "succesfully logged in..",
            currentUser:user.uname,
            
          }
        }
        else {
          return {
            statusCode: 422,
            status: false,
            message: "invalid user or password"
          }
        }
      })
    }
    const addproduct = (Name, Price,Quantity,Category) => {
        return db.Product.findOne({ Name }).then(product => {
          console.log(product);
          if (product) {
            return {
              statusCode: 422,
              status: false,
              message: "product already exist..!"
            }
          }
          else {
            const newProduct = new db.Product({
              Name,
              Price,
              Quantity,
              Category
              
            })
            newProduct.save()
            return {
              statusCode: 200,
              status: true,
              message: "successfully added..."
            }
          }
        })
    }
    const viewproduct=()=>{
        return db.Product.find({}).then(product=>{
          
          // reminder=user.reminders
         //  console.log(reminder);
         if(product){
           return{
           products:product,
               statusCode: 200,
               status: true,
              
           }
         }
         else{
           return{
             statusCode: 422,
                 status: false,
                 message: "invalid"
           }
         }
        })
      } 

      module.exports = {
        registration,
        login,
        addproduct,
        viewproduct
    }