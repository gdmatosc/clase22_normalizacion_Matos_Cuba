import mongoose from 'mongoose';
//const { default: mongoose } = require('mongoose')
//const mongooge=require('mongoose')
mongoose.connect('mongodb://localhost:27017/productosM1')

const Cat=mongoose.model('Cat',{name:String})

//const miGato=new Cat({name:'Shazam'})
/*
miGato.save()
    .then(()=>console.log('Se guardó el gato'))
    .catch((e)=>console.log('ERROR',e))
*/
//READ
CRUD()

async function CRUD(){
    try{
        const users=await Cat.find({})
        console.log(users);
    } catch (e){
        console.log("ERROR",e);
    }
}
/*
import * as model from './model/user.js'
CRUD()

async function CRUD(){
    try{
        const URL='mongodb://localhost:27017/app1'
        const rta = mongoose.connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        const usuarios=await model.User.find({})
        console.log(usuarios);
        } catch (e){
            console.log("ERROR",e);
        }
}
*/

