import mongoose from 'mongoose';
import * as model from './model/user.js'

CRUD()

async function CRUD(){
    try{
        const URL='mongodb://localhost:27017/app1'
        const rta = mongoose.connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('DB conectada!')

        //CREATE
        /*
        console.log('CREATE');
        const user={
            name:'Francisco',
            lastname:'Macedonio',
            email:'franciscoelgrande@gmail.com',
            username:'francisco',
            password:'123456'
        }
        */
        /*const user={
            name:'R2',
            lastname:'Verbel',
            email:'r2@gmail.com',
            username:'r2',
            password:'r2r2r2'
        }*/
        /*
        const userSaveModel=new model.User(user)
        const userSave=await userSaveModel.save()
        console.log(userSave)
        */

        //READ
        console.log('READ');
        const users=await model.User.find({})
        console.log(users);

        //UPDATE
        /*console.log('UPDATE')
        const userUpdate= await model.User.updateOne(
            {name: 'R2'},
            {$set: {password: 123}}   
        )
        console.log(userUpdate)
        */
        //DELETE
        /*
        console.log('DELETE')
        const userDelete=await model.User.deleteOne({name:'R2'})
        console.log(userDelete)
        */
        
        //READ
        console.log('READ');
        console.log(await model.User.find({}))
        /*
        await new model.User({name:'Juan',lastname:'Perez',email:'jp@jp.com',password:'123456'}).save()
        await new model.User({name:'Pedro',lastname:'Suarez',email:'ps@ps.com',password:'98765'}).save()
        await new model.User({name:'Anna',lastname:'Mei',email:'am@g.com',password:'567891'}).save()
        await new model.User({name:'Mirta',lastname:'Llorende',email:'mb@mb.com',password:'468032'}).save()
        */
        console.log('READ PROYECTO+FILTER');
        //console.log(await model.User.find({lastname:'Suarez'},{name:1,email:1}));
        //console.log(await model.User.find({name:'R2'},{name:1,email:1,password:1}))

        //SORT
        //console.log(await model.User.find({},{name:1,lastname:1,_id:0}).sort({name:-1}))
        //console.log(await model.User.find({},{name:1,lastname:1,_id:0}).sort({lastname:-1}))
    
        //SKIP-Eliminar primeros registros
        console.log(await model.User.find({},{name:1,lastname:1,_id:0}).sort({name:-1}).skip(3))
        //LIMIT-Muestra primeros registros
        console.log(await model.User.find({},{name:1,lastname:1,_id:0}).sort({name:-1}).skip(3).limit(2))
    } catch (e){
        console.log("ERROR",e);
    }
}
