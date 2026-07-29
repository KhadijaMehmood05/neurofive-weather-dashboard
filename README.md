🌤️ Weather Dashboard

A responsive weather dashboard that fetches real-time weather information using the Open-Meteo API. Users can search for any city and view current weather conditions along with a 3-day forecast.

The project is built using HTML, CSS, and JavaScript with Fetch API and async/await for handling live weather data.

🚀 Features
🔍 Search weather by city name
🌡️ Display current temperature
🌤️ Show weather conditions with icons
📅 Display a 3-day weather forecast
⏳ Loading state while fetching weather data
❌ Friendly error handling for invalid city searches
📱 Responsive design for different screen sizes
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6)
Fetch API
Async/Await
Open-Meteo Weather API
🌐 API Used

This project uses the free public Open-Meteo API.

Geocoding API is used to convert city names into geographical coordinates.
Forecast API is used to fetch current weather information and a 3-day forecast.
🔄 Async Loading and Error Handling

I used JavaScript async/await with the Fetch API to handle requests to the Open-Meteo weather API. A loading message is displayed while the API request is in progress so users know that data is being fetched. I implemented try/catch error handling to manage failed requests and invalid city searches. A friendly error message is shown when weather data cannot be retrieved, providing a better user experience.

📸 Demo

The dashboard allows users to search different cities and displays live weather information including temperature, weather conditions, weather icons, and a 3-day forecast.

👩‍💻 Developed By

Khadija Mehmood

Frontend Web Development Internship
Neurofive Solutions
