require('dotenv').config()

import bodyParser from 'body-parser';      // BodyParser
import express from 'express';     // Express

import hbs from 'express-handlebars';       // Express HandleBars
import { helpers } from '../app/helpers/handlebars.js';      // HandleBars Own Helpers

const app = express();
const router = express.Router();      // Получаем экземпляр Express-Router

// Подключем нужных посредников
// =============================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  // Включение статических файлов

// Настройка handlebars
// =============================================================================
app.set('view engine', 'hbs');
app.cache = {}

app.engine('hbs', hbs({
    helpers: helpers,       // HandeBars Own Helpers
    extname: 'hbs',
    defaultLayout: 'app',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));


// Роутеры
// =============================================================================
import { HomeRouter } from '../routes/home'

app.use('/', HomeRouter);


// Отдача 404, если файл не найден
app.use(function(req,res){
    return res.status(404).render('404')
});

// Отдача 500, если ошибка сервера
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('plain/text');
    return res.status(500).render('500')
});

// Регистрация всех роутеров
app.use(router);


// Запуска сервера
// =============================================================================
let port = process.env.APP_CONTAINER_PORT;
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});
