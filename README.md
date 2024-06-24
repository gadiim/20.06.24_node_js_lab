# 20.06.24_node_js_lab

Node.js | Module

Завдання 1.

Використовуючи npm, встановіть пакет express. Створіть скрипт і в ньому отримайте модуль express. Далі створіть екземпляр сервера:
const express = require('express');
const app = express();
Зробіть доступ до папки public:
app.use(express.static(__dirname + '/public'));
Запустіть сервер:
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
Додайте в папку кілька зображень і файл *.html з будь-якою розміткою. Продемонструйте доступ до вмісту папки public з адресного рядка браузера.


Завдання 2.

Напишіть програму для частотного аналізу певного текстового файлу. Для прикладу можна взяти текст:
2020-02-03T13:50:33.166Z A 2
2020-02-03T13:51:33.166Z B 1
2020-02-03T13:52:33.166Z C 6
2020-02-03T13:53:33.166Z B 8
2020-02-03T13:54:33.166Z B 5
Створіть текстовий файл і помістіть туди цей текст. Створіть 2 файли: parser.js і app.js. parser.js реалізуйте як модуль, в якому буде реалізовано код для парсингу рядків з файлу на чистому JavaScript. Результатом парсингу має бути об'єкт, властивостями якого є символи вихідного тексту, а значеннями – їх кількість.
Додаткове завдання.
Текст для парсингу зчитувати з файлу. Для цього підключити в проект модуль fs і використовувати асинхронний варіант функції читання файлу.
