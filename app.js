var nodemailer = require('nodemailer');
const express = require('express');
const app = express();
//const {fs,readFile} = require('fs')
//const config =require('./app.json')
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'santhoshbassure@gmail.com',
    pass: 'santhosh*23'
  }
});

var mailOptions = {
  from: 'santhoshbassure@gmail.com',
  to: 'theivaraj@bassure.com',
  subject: 'email',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});  
app.listen(3000,()=>{
  console.log("sever is running");
});
// fs.readFile('./app.json').then((object)=>{
//     console.log('email = ${object[email]}');
//     var mailOptions = {
//         from: 'santhoshbassure@gmail.com',
//         to: 'object[email]',
//         subject: 'email',
//         text: 'That was easy!'
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });  
// })