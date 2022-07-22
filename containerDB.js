//1.Declaración de parametros, variables y librerías
const fs=require('fs')

//2.Clase contenedor
class Contenedor {
constructor(nombreTabla,nombreBD){
    this.BD=nombreBD
    this.tabla=nombreTabla
    this.data=[]
    
    try{
        console.log('Initializing...')
        this.init()
    }
    catch(error){
        console.log(`Error initializing ${error}`)

    }
} 

//2.1.Lectura total de tablas
async init(){
    this.data=await this.getAll()

}

async getAll() {

    const options=require(`./options/${this.BD}`)
    const knex=require('knex')(options)
    try{
        const result = knex
            .select('*')
            .from(this.tabla)
            return result  
    }
    catch (error){
        console.log(error)
    }  
   
}
//2.2.Guardar datos ingresados por POST o PUT
async save(objeto){
    const options=require(`./options/${this.BD}`)
    const knex1=require('knex')(options)
    try{
        await this.init()
        knex1(this.tabla).insert(objeto)
            .then(()=>console.log("data inserted Post Socket Container"))
            .catch(err=>console.log(err))
            .finally(()=>knex1.destroy())
    }
    catch (error){
        console.log(error)
    }
}

}

module.exports=Contenedor





