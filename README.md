# 🌤️ Weather Dashboard

A responsive weather dashboard that fetches real-time weather information using the **Open-Meteo API**. Users can search for any city and view current weather conditions, temperature, weather icons, and a **3-day forecast**.

This project demonstrates API integration using **JavaScript Fetch API**, **async/await**, and dynamic DOM updates to display live weather data.

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 🌤️ Show weather conditions with icons
- 📅 Display a 3-day weather forecast
- ⏳ Loading state while fetching weather data
- ❌ Friendly error handling for invalid city searches
- 📱 Responsive design for different screen sizes

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Fetch API**
- **Async/Await**
- **Open-Meteo Weather API**

## 🌐 API Integration

This project uses the free public **Open-Meteo API** to fetch live weather information.

- **Geocoding API:** Converts city names into geographical coordinates.
- **Forecast API:** Retrieves current weather conditions and 3-day forecast data.

## 🔄 Async Loading and Error Handling

The application uses **JavaScript async/await with the Fetch API** to handle requests to the Open-Meteo weather API. A loading state is displayed while the API request is in progress so users know that data is being fetched. Error handling is implemented using **try/catch** to manage invalid city searches and failed API requests. A friendly error message is displayed whenever weather data cannot be retrieved.

##  Demo

The weather dashboard allows users to search different cities and view live weather details including temperature, weather conditions, icons, and a 3-day forecast.

## 👩‍💻 Developed By

**Khadija Mehmood**

Frontend Web Development Internship  
**Neurofive Solutions**
