import express from "express";
import bodyParser from "body-parser";
// /user?id=7 --> lay duoc so 7
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8000; //Port == undefined => Port == 8000
app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port " + port);
})

