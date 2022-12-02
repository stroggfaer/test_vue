# vue_test_front

```
Стек   vue2  SPA + SCSS  
```

```
Установить node не ниже v 14  
`$ npm install` - установка пакет node modules
`$ npm run serve` - запуск локальной среде 
`$ npm run build` - собрать проект
```

```
Структура проекта

components
-ul (ul - компонентов input,modal,alert и.т.д)
-user
-list-user (компонент список карточки)
-view-user  (компонент просмотра карточки) -container(контейнер каркас) -footer (подвал )
-header (шапка сайта)  -shared (глобальные компоненты)

store
-users  
FETCH_USERS- GET получить список пользователя
FETCH_USER - GET посмотреть конкретного пользователя
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
