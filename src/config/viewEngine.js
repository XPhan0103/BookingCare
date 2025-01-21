import express from 'express';
let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //jsp(Java), blade(PHP)
    app.set("views", "./src/views"); //views folder path
}

module.exports = configViewEngine;