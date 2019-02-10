# Docker Express

### `Технологии`

- Docker
- Express
- Handlebars JS
- Sequelize
- PostgreSQL
- Redis
- Webpack
- Babel
- Mocha & Chai

## Начало

> 1. Скопируйте этот репозиторий к себе.

> 2. Копируйте `.env.example` и измените название на `.env`

> 3. Редактируйте данные, если нужно (Запуститься и с данными по умолчанию)

> 4. Запускайте команду от корная проекта `make build`, если у вас ``Linux`` или ``Mac Os``, если у вас Windows, запускайте команду `docker-compose up --build -d`

> 5. Сделайте миграцию и сиды (Демо данные).
> 5.1 Миграции `make migrate` для Unix. Для Windows `docker-compose exec app yarn migrate`
> 5.2 Сиды `make seed` для Unix. Для Windows `docker-compose exec app yarn seed`

> 6. Открываем у себя страницу `http://127.0.0.1:3000` (Порт 3000 по умолчанию, если в `.env` поменял, то поменяйте порт на свой
