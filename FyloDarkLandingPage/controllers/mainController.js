const fs = require('fs');
const path = require('path');

const descripcionesFilePath = path.join(__dirname, '../database/descripcionesBody.json');
const descripciones = JSON.parse(fs.readFileSync(descripcionesFilePath, 'utf-8'));

const testimoniosFilePath = path.join(__dirname, '../database/testimonios.json');
const testimonios = JSON.parse(fs.readFileSync(testimoniosFilePath, 'utf-8'));

const mainController= {
    index : function(req, res){
        console.log(testimonios);
        res.render('index', {testimonios ,descripciones });
    }
}

module.exports = mainController;