const mongoose=require('mongoose');
const ProductModel=require('../model/model');
const ObjectId=require('mongoose').Types.ObjectId;

class ContenedorMongo{
    //argumentos dl constructor: uri,model
    constructor(){
        const uri='mongodb://localhost:27017/productosM2';
        this.model=model
        this.mongo=mongoose.connect(uri,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
            .then(db=>console.log(`DB is connected`))
            .catch(err=>console.log(err));
    }

    async save(obj){
        const newProduct=new ProductModel(obj);
        await newProduct.save()
        return newProduct
    }
 
    async getByID(id){
        return ProductModel.find({_id: new ObjectId(id)})
    }

    async getAll(id){
        return ProductModel.find({})
    }

    async editById(obj,id){
        console.log('UPDATE');
        const objUpdated=await ProductModel.updateOne(
            {_id: new ObjectId(id)},
            {$set:obj}
        )
        return objUpdated
    }

    async deleteByID(id){
        const userDelete=await ProductModel.deleteOne({_id: new ObjectId(id)})
        return true
    }

}

module.exports=ContenedorMongo;