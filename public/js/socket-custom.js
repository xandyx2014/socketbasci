var socket = io();
        socket.on('connect',function(){
            console.log("conectado en servidor");
        })
        socket.on('disconnect',function(){
            console.log("Perdidom conecxion con el servidor");
        })

        socket.emit('enviarMensaje',
        {
            usuario:'Andy Jesus',
            message:'Hola mundo'
        },function(resp){
         console.log(resp);
        })
        socket.on('enviarMensaje',function(message){
            
            console.log(message);
        })