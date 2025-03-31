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
});
app.post('/',async(req,res)=>{
    const {login,password} = req.body
    await User.create({login,password})
    return res.send(`User was created`)
});
app.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const candidate = await User.findByPk(id)
    if(!candidate){
        return res.status(500).json({message:`Server error`})
    }
    await candidate.destroy()
    res.send(`user was destroyed`)
});
async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT || 8080, () => console.log(`Server start no ${process.env.PORT || 8080}`))

    } catch (error) {
        console.log(error)
    }
}
start()