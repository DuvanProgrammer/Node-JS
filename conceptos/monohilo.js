console.log('Hola mundo');

//Intervalo de tiempo
let i = 0;
setInterval(function(){
    console.log(i);
    i++;

    //Forzando error
    /*if(i === 5){
        var a = 3 +z;
    }*/
}, 1000);

console.log("Segunda instruccion");