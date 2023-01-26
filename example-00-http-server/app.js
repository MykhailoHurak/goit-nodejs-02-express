const http = require("http"); // вбудований http-сервер

const server = http.createServer((request, response) => {
    const { url } = request;

    if (url === "/") {
        response.write("<h2>Home Page<h2>");
    } else if (url === "/contacts") {
        response.write("<h2>Contacts Page<h2>");
    } else {
        response.write("<h2>Not Found<h2>");
    }

    response.end();
});