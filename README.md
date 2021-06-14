# BACKEND для игры "Цитадели"
## Nest.js
Для локального запуска проекта необходимо:
1. Установить зависимости
```
yarn install
```
2. Запустить mysql. Необходимо в корне создать файл .env с доступами к базе данных  
```
PORT=3000
DB_HOST=host
DB_PORT=3306
DB_NAME=db_name
DB_USER=db_user
DB_PASSWORD=db_password
```
3. Запуск приложение
```
yarn start // nest start,
yarn start:dev // nest start --watch
yarn start:debug // nest start --debug --watch
yarn start:prod // node dist/main
```
## Сервер
Для деплоя на сервер используется travis-ci. 

На сервере используется менеджер процессов pm2 https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/

Пример управления:
```
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
$ pm2 status 
```


Для запуска бекенда на сервере необходимо запустить процесс в менеджере pm2 с помощью команды 
```
pm2 start ./путь_до_файла_ecosystem.config.js --env production/development
```

Пример файла конфигурации ecosystem.config.js
```
module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      env: {
        NODE_ENV: 'development',
        DB_NAME: 'db_name',
        DB_USER: 'db_user',
        DB_PASSWORD: 'db_password',
        DB_HOST: 'db_host'
      },
      env_production: {
        NODE_ENV: 'production',
        DB_NAME: 'db_name',
        DB_USER: 'db_user',
        DB_PASSWORD: 'db_password',
        DB_HOST: 'db_host'
      },
    },
  ],
};
```
