# Weather App

A simple and responsive weather application that allows users to search for any city and view current weather information. The project includes a Node.js backend that communicates with the OpenWeather API and a frontend built with HTML, CSS, and JavaScript.

## 🚀 Live Demo
Frontend: https://weather-website-uendi.netlify.app

Backend: https://weather-backend-w2cp.onrender.com

---

## 📁 Project Structure
```
project-root/
├── index.html
├── style.css
├── script.js
├── server/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env (NOT visible in repo)
└── README.md
```

---

## ⚙️ Features
- Search weather by city name
- Real-time weather data using the OpenWeather API
- Backend proxy server to keep API key secure
- CORS-enabled server for frontend communication
- Responsive UI

---

## 🧩 Technologies Used
### **Frontend**
- HTML5
- CSS3
- JavaScript (Vanilla)

### **Backend**
- Node.js
- Express
- CORS
- Dotenv

### **Hosting**
- Netlify (Frontend)
- Render (Backend)

---

## 🔧 Installation & Setup
### 1. Clone the repository
```
git clone <your-repo-url>
cd <repo-name>
```

### 2. Install backend dependencies
```
cd server
npm install
```

### 3. Create a `.env` file inside the **server** folder
```
API_KEY=openweather_api_key
```

### 4. Start the backend server
```
node server.js
```
The backend should run on:
```
http://localhost:5000
```

### 5. Open the frontend
Just open `index.html` in your browser.

---

## 🔗 API Endpoint
### **GET /weather?city=CityName**
Example:
```
https://weather-backend-w2cp.onrender.com/weather?city=Hamburg
```

Response example:
```json
{
  "temperature": 12.34,
  "description": "clear sky",
  "icon": "01d"
}
```

---

## 🐛 Troubleshooting
### **"Failed to connect to server"**
- Make sure Render backend is deployed and not asleep
- Check CORS settings in your server
- Verify API key is correct and `.env` exists

### **CORS errors**
Ensure your server includes:
```js
app.use(cors());
```

---

## 📄 License
This project is for educational and portfolio use.

---

## 🙌 Acknowledgments
- Weather data provided by **OpenWeather API**.
- Hosted with **Netlify** and **Render**.

---

## 🔮 Future Improvements

- Add weekly forecast support

Integrate the 5-day or 7-day forecast endpoint from OpenWeather to provide extended weather predictions.

- Improve loading and error handling

Add a loading spinner while data is being fetched and display clearer, user-friendly error messages for invalid or unavailable cities.

- Add search history

Store previously searched cities in local storage so users can quickly repeat searches.

- Enhance UI/UX design

Refine the layout, add animations, improve typography, and create a more visually appealing interface.

- Use geolocation for auto-weather detection

Detect the user’s current location and automatically show weather information for their area.

- Add temperature unit toggle (°C ⇄ °F)

Allow users to switch between Celsius and Fahrenheit.

- Backend improvements

Add input validation, API response caching, and more robust error handling on the server side.

- Use a custom domain

Replace the auto-generated Netlify URL with a custom domain for a more professional presentation.

- Add “Enter to Search”

Lets users press Enter instead of clicking the button.

---

## 👤 Author

Uendi Faja – B.Sc. Computer Science student at TUHH, Hamburg
