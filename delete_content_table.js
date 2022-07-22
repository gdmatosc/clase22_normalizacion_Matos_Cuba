const options=require('./options/db_sqlite')
const knex=require('knex')(options)

knex.from('mensajesDB')
    .where('username','like','%Dante%R%')
    .del()

    .then(()=>console.log("data deleted"))
    .catch(err=>console.log(err))
    .finally(()=>knex.destroy())