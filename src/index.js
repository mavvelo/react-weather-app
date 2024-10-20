import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using the right import
import App from './App'; // Import the main App component
import { ThemeProvider } from './context/theme.context'; // Import your theme context provider
import { WeatherProvider } from './context/weather.context'; // Import your weather context provider
import './styles/components/App.scss'; // Import global styles (adjust path as necessary)

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root element

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <WeatherProvider>
        <App /> {/* Render the App component */}
      </WeatherProvider>
    </ThemeProvider>
  </React.StrictMode>
);
