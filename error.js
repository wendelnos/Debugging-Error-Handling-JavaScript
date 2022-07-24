function validaArray(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros");
        if(typeof arr == "object") throw TypeError("o array precisa ser do tipo objeto");
        if(typeof num == "number") throw TypeError("o número precisa ser do tipo number");
        if(arr.length != num) throw new RangeError("Tamanaho é inválido");
        return arr;
    }
    catch(e){
               if (e instanceof ReferenceError){
                console.log("Este erro é um ReferenceError!");
                console.log(e.message);
                //console.log(e.stack);
               } else if (e instanceof TypeError) {
                console.log("Este erro é um TypeError!");
                console.log(e.message);

               }else if (e instanceof RangeError) {
                console.log("Este erro é um RangeError!");
                console.log(e.message);

               } else {
                console.log("Tipo de erro não esperado!" + e);
               }
        }
    }

    console.log(validaArray([],'a'));