# 🌤️ Weather Dashboard

A responsive weather dashboard that fetches real-time weather information using the Open-Meteo API. Users can search for any city and view current weather conditions along with a 3-day forecast.

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 🌤️ Show weather conditions with icons
- 📅 Display a 3-day weather forecast
- ⏳ Loading state while fetching data
- ❌ Friendly error handling for invalid cities
- 📱 Responsive design for different screen sizes

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Async/Await
- Open-Meteo Weather API

## 🌐 API Used

This project uses the free public **Open-Meteo API**:

- Geocoding API → Converts city names into coordinates
- Forecast API → Fetches current weather and forecast data


## ⚙️ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/KhadijaMehmood05/neurofive-weather-dashboard.git
Open the project folder.
Run index.html using Live Server in VS Code.
Search any city name to view live weather information.
🔄 Handling Async Loading and Error States

The application uses JavaScript async/await with the Fetch API to handle API requests. A loading message is displayed while the weather data is being fetched, improving user experience during network delays. Error handling is implemented using try...catch to display a friendly message when a city is not found or an API request fails.

📸 Demo

The dashboard allows users to search different cities and displays live weather information with temperature, conditions, icons, and a 3-day forecast.

👩‍💻 Developed By

Khadija Mehmood

Frontend Web Development Internship
Neurofive Solutions
