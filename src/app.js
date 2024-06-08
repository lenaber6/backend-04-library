const http = require("http");
const getUsers = require("./modules/users.js");
const { URL } = require("url"); // Импортируем класс URL из встроенного модуля url

// Пример request.url: '/?hello=world'

const dotenv = require("dotenv");
dotenv.config();
const {PORT} = process.env;
console.log(PORT);

const server = http.createServer((request, response) => {
  // const ipAddress = "http://127.0.0.1:3003";
  const ipAddress = `http://127.0.0.1:${PORT}`;
  const url = new URL(request.url, ipAddress); // Создаем объект URL
  // Получаем параметры
  const userName = url.searchParams.get("hello");// Здесь будет 'world', если параметр присутствует
// Выводим параметры в консоль
console.log(`Hello name is: ${userName}`);
// Этот код предполагает, что request — это объект входящего
//  HTTP-запроса, который вы получаете в обработчике запросов.
if (userName) {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "text/plain");
    response.write(`Hello, ${userName}!!!`);
    response.end();
    return;
  }
  if (request.url === "/?hello") {
    response.statusCode = 400;
    response.statusMessage = "Bad Request";
    response.setHeader("Content-Type", "text/plain");
    response.write("Enter a name, pls");
    response.end();
    return;
  }
  if (request.url === "/?users") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "application/json");
    response.write(getUsers());
    response.end();
    return;
  }
  
 
  if (request.url === "/") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "text/plain");
    response.write("Hello, World!!!");
    response.end();
    return;
  } 
    response.statusCode = 500;
    response.statusMessage = "Bad Request";
    response.setHeader("Content-Type", "text/plain");
    response.write("No hellos!!!");
    response.end();
    return;
  

  // Написать обработчик запроса:
  // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
  // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
  // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
  // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
  // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
});
server.listen(3003, () => {
  console.log(`Сервер запущен по адресу http://127.0.0.1:${PORT}`);
});
