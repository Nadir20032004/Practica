const sequelize = require('./db')
const {DataTypes} = require('sequelize')
const User = sequelize.define('user',{
    login:{
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            max:32
        }
    }
})
module.exports = {User}