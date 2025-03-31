require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`hello world`)
})

app.get('/name',(req,res)=>{
    const name = 'Надир';
    const familyname = 'Мухамедов' 
    return res.send(`${name} ${familyname}`);
})
app.listen(process.env.PORT || 8080, () => console.log(`Server start no ${process.env.PORT || 8080}`))
