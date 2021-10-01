const fs = require('fs');

const crearArchivo = ( numero = 5, listar = false, hasta ) => {
        try {
            let salida = '';
        
            for(let i = 1; i<=hasta; i++){
                salida += `${numero} x ${i} = ${numero * i}\n`;
            }

            if(listar){
                console.log(salida);
            } 

            fs.writeFileSync(`./salida/Tabla-${numero}.txt`, salida);
        
            return `tabla-${numero}.txt`;
            
        } catch (err) {
            throw err;
        }
    
}

module.exports = {
    crearArchivo
}