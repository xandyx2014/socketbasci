const {io}= require('../server')

io.on('connection',(client)=>{
    console.log("Usuario conectado");
    client.emit('enviarMensaje',{
        bienvenida:'Bienvendio',
        usuario:'cliente'
    })
    client.on('disconnect',()=>{
        console.log("EL cliente se desconecto");
    })
    //escuchar el cliente
    client.on('enviarMensaje',(data, callback)=>{
        console.log(data);
        
        client.broadcast.emit('enviarMensaje',data)
        /* if(mensaje.usuario){
            callback({
                mensaje:'todo salio biem'
            })
        }else{
            callback({
                mensaje:'todo salio mal'
            })
        } */
        
    })
})