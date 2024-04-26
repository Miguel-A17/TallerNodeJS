const express   = require('express');

//const dotenv = require('dotenv');
//dotenv.config();

const app = express();

const port = process.env.PORT || 3000

/*  EStamos mandando un 
    mensaje que es hola mundo
    por el servidor express atraves del
    puerto 3000

    El get se utiliza 
    para recuperar la informacion

    */
app.get('/', (req,res) => {//req = request res = response
    res.send('Hola mundo!')
    
})

/*  Estamos escuchando
    atraves del servidor 
    que esta conectado en el
    puerto 3000
*/

/*  para poder activar
    el puerto debo usar la terminal
    primero navengando hasta la carpeta
    luego estando en la carpeta usar el comando
    node[]nombre del archivo.js en esta caso es index.js 
    luego abrir el navegador
    y usar la siguiente linea
    https://localhost:3000/

 */
 app.listen(port, () => {
    console.info(`Escuchando por el puerto:  ${port}`)
    //console.log(process.env.PORT);
});