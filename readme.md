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

> 3. Редактируйте данные, если нужно (Всё запуститься и с данными по умолчанию. Рекомендуется первый раз не изменять данные)

> 4. Запускайте команду от корня проекта `make build`, если у вас `Linux`, если у вас Windows, запускайте команду `docker-compose up --build -d`

> 5. Сделайте миграцию и сиды. Обязательно!
> 5.1 Миграции `make migrate` для Linux. Для Windows `docker-compose exec app yarn migrate`
> 5.2 Сиды `make seed` для Linux. Для Windows `docker-compose exec app yarn seed`

> 6. Открываем у себя страницу `http://127.0.0.1:3000` (Порт 3000 по умолчанию, если в `.env` поменяли, то поменяйте порт на свой
