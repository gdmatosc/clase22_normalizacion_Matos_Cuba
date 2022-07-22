//1.Declaración de parametros, variables y librerías
const express=require('express');
const http=require('http');
const apiRouter=require('./routes/apiRouter');
const { Server }=require("socket.io");

const app=express();
const server=http.createServer(app)
const io=new Server(server);
const PORT=8081;

//2.Uso de objetos en otros JS
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))

app.use((req,res,next)=>{
    req.io = io;
    return next();
});
app.use('/api',apiRouter);

//3.Configuración de vistas
app.set('views','./views')
app.set('view engine','ejs')

//4.Envío de datos a URLs
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root: __dirname})
})

app.get('/productos',(req,res)=>{
    res.sendFile('productos.html',{root: __dirname+'/public'})
})

//5.Puerto de escucha
server.listen(PORT,()=>{
    console.log('Listening on port: '+PORT);
})