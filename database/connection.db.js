const mongoose = require("mongoose");
var db = mongoose.connection;
require("dotenv").config();

//Valido proceso de conexion
db.on("connecting",() => console.log("\x1b[34m","\n \n Conectando base de datos => OK \n \n"));
//Busco errores de conexion
db.on("error", (error) => console.log("\x1b[32m",`\n \n Error en conexion de base de datos => : \n ${error} \n `));
//Muestro conexion de base de datos
db.on("connected", () => console.log("\x1b[34m","\n \n Base de datos conectada => OK \n \n"));
//Muestro que base de datos esta lista para su uso
db.on("open", () => console.log("\x1b[34m","\n \n Base de datos lista => OK \n \n"));
//Reconexion a base de datos
db.on("reconnected", () => console.log("\x1b[34m","\n \n Reconectando base de datos => OK \n \n"));
//Desconectando base de datos
db.on("disconnected", () => {
    console.log("\x1b[33m","\n \n Desconectando base de datos => OK \n \n");
    mongoose.connect(process.env.DB,{server:{auto_reconnect:true}});
});

mongoose.connect(process.env.DB_CHARTS,{server:{auto_reconnect:true}});
module.exports = mongoose;