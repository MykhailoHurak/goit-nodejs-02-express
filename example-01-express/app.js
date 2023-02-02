const express = require("express");

// request - це вся інформація про запит, наприклад, url, method
// response - це обєкт, що дозволяє налаштувати відповідь та відправити її

const app = express(); // виклик express() це і є створення веб-сервера, app - це веб-сервер

app.get("/", (request, response) => {
    response.send("<h2>Home Page</h2>")
});

app.get("/contacts", (request, response) => {
    response.send("<h2>Contacts Page</h2>")
});

app.get("/players", (request, response) => {
    response.send("<h2>Players Page</h2>")
});

app.listen(3000, () => console.log("Server is running!!!")); // запускаємо сервер вказуючи порт та колбек