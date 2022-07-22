//1.Declaración de parametros, variables y librerías
const socket=io.connect();
const element=document.getElementById('form')
console.log('socket ui')

//2.Carga de datos iniciales en la web
socket.on('messages',(messages)=>{
    console.log(messages);
    render(messages);
}) 

const render=(data)=>{
    const html=data.map((element,index)=>{
        return(`
            <div>
                <strong>${element.username}</strong> 
                <em>${element.text} </em>
                <em>"Check" </em>
            </div>
        `)
    }).join('');
    document.getElementById('messages').innerHTML=html;
}

//3.Agregar mensajes de websocket-reemplazado por POST
const addMessage1=()=>{
    const message={
        username: document.getElementById('username').value,
        text: document.getElementById('text').value
    };
   
    socket.emit('new-message',message);
    
    return false
}








