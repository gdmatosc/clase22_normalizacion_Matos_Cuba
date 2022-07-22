//1.Declaración de parametros, variables y librerías
const { Router }=require('express');
//const Container1=require('../containerDB');
//const productosDB= new Container1('productosT','db');
const Container2=require('../containerDB');
const mensajesDB= new Container2('mensajesDB','db_sqlite');

const Contenedor=require('../contenedores/contenedor')
const contenedorProducts=new Contenedor('products.json')

const ContenedorMongo=require('../contenedores/contenedorMongo')
const contenedorMongoProducts=new ContenedorMongo()

const router=Router();

//2.Get de productos y mensajes
router.get('/ejs', (req, res) => {
    mensajesDB.init();
    contenedorProducts.init();
    res.render('teste.ejs', { contenedorProducts});
    console.log("Get")
    req.io.on('connection',(socket)=>{
        socket.emit('messages',mensajesDB.data)
        console.log('User conectado, id:'+socket.id);
    })
});

//app.get('/products',async (req,res)=>res.send(await productDao.getAll()))
//app.post('/products',async (req,res)=>res.send(await productoDao.save(req.body)))

//3.Post de productos y mensajes
/*
router.post('/objetos',async (req,res)=>{
    let {title,thumbnail,price}=req.body;
    price=Number(price);
    if(!title || !thumbnail || !price){
        return res.status(400).send({error: 'Los datos están incompletos'});
    }
    await contenedorProducts.save({title,thumbnail,price});
    await contenedorProducts.init();
    
})
*/
router.post('/objetos',async (req,res)=>{
    let {title,thumbnail,price}=req.body;
    price=Number(price);
    if(!title || !thumbnail || !price){
        return res.status(400).send({error: 'Los datos están incompletos'});
    }
    await contenedorMongoProducts.save({title,thumbnail,price});
    await contenedorMongoProducts.init();
    
})

router.post('/comentarios',async (req,res)=>{
   const {username,text}=req.body;
   console.log("StepM1-post-websocket")
   console.log({username,text})
   await mensajesDB.save({username,text});
   await mensajesDB.init();
})
 
//4.Put de productos
router.put('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id)
        const {field,value}=req.body;
        await contenedorProducts.editById(Number(id),field,value);
        res.send({message:`El producto con id ${id} se modificó exitosamente`})

    }catch(error){
        throw error
    }
})

//5.Put de productos
router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id)
        await contenedorProducts.deleteById(Number(id));
        res.send({message:`El producto con id ${id} se borró exitosamente`})

    }catch(error){
        throw error
    }
})

module.exports=router;
