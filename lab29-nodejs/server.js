// За допомогою Node.js , Express.js створит ендпоінт

// POST /weather

// body: { city: 'Lviv' }
// Який отримує у якості параметра назву міста для якого потрбіно отримати погоду повертає швидкість вітру та температуру у вигляді JSON

// Щоб отримати дані про погоду потрібно зробити на сервері запит на API, тут потрібно змінювати LVIV на отримане місто

// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

// Документація для отримання погоди
// https://openweathermap.org/current

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/weather', (req, res) => {
  const city = req.body.city;
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

  axios
    .get(apiUrl)
    .then((response) => {
      const temperature = response.data.main.temp;
      const windSpeed = response.data.wind.speed;

      res.json({ temperature, windSpeed });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error getting weather data');
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// http://localhost:3000/weather

// Request
// {
//     "city": "KYIV"
// }

// Response
// {
//     "temperature": 12.62,
//     "windSpeed": 1.79
// }
