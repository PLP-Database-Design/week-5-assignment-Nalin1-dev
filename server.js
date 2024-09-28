
// import dependencies
const express = require('express');
const app = express()
const mysql = require('mysql2');
const dotenv =require('dotenv');


// configure.env
dotenv.config();

// create a connection object
const db =mysql.createConnection({
    host: process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password :process.env.DB_PASSWORD,
    database :process.env.DB_NAME
})

// cors and ejs

// test the connection
db.connect((err)=>{
    if(err){
      return  console.log('error connecting to the database',err)
    }
    console.log('successifully connected to mysql',db.threadId)
}

)


// start and listen to the server

app.listen(3300, () => {
  console.log(`server is runnig on well`)
})

// // retrieve all patients
  app.get('',(req,res)=>{
     const getpatients= "SELECT*FROM PATIENTS"
     db.query(getpatients,(err,data) => {
         if(err){
             return res.status(400).send('failed to get patients',err)
         }
         res.status(200).send(data)


       })
 })

//  retrieve providers
app.get("",(res,req)=>{
  const getproviders ="SELECT first_name,last_name,provider_specialty FROM PROVIDERS"
  db.query(getproviders,(err,data)=>{
    if(err){
      return res.status(300).send('failed to get providers',err)
      res.status(200).send(data)
    }
  })
}

)

// patients by first name
app.get("",(res,req)=>{
  const getpatients ="SELECT first_name,last_name FROM PROVIDERS"
  db.query(getpatients,(err,data)=>{
    if(err){
      return res.status(300).send('failed to get patients',err)
      res.status(200).send(data)
    }
  })
}

)
// retrive provider speciality

app.get("",(res,req)=>{
  const getproviders ="SELECT provider_specialty FROM PROVIDERS"
  db.query(getproviders,(err,data)=>{
    if(err){
      return res.status(300).send('failed to get providers_ speciality',err)
      res.status(200).send(data)
    }
  })
}

)

  
 
  