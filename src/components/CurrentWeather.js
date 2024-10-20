import React from 'react';
import { getCurrentWeather } from '../api'; // Use named import
import '../styles/components/CurrentWeather.scss';

const CurrentWeather = () => {
  const data = getCurrentWeather();
  console.log(data);

  const {
    cloud_cover,
    feels_like,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
    humidity,
  } = data;

  const otherInfoWidget = [
    {
      id: 0,
      icon: 'droplet',
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: 'in/h',
    },
    {
      id: 1,
      icon: 'wind',
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: 'mph',
    },
    {
      id: 2,
      icon: 'moisture',
      name: 'Humidity',
      value: Math.round(humidity),
      unit: '%',
    },
    {
      id: 3,
      icon: 'sunglasses',
      name: 'UV index',
      value: Math.round(uv_index),
      unit: '',
    },
    {
      id: 4,
      icon: 'clouds-fill',
      name: 'Cloud cover',
      value: Math.round(cloud_cover),
      unit: '%',
    },
    {
      id: 5,
      icon: 'eye',
      name: 'Visibility',
      value: Math.round(visibility),
      unit: 'mi',
    },
  ];

  return (
    <div className='CurrentWeather'>
      <div className='temperature'>
        <div className='weather-icon'>
          <img
            src={`public/dist/weather_icons/set4/big/${icon_num}.png`}
            alt={summary}
          />
        </div>
        <div className='value'>
          <div className='real'>{temperature} °C</div>
          <div className='feels-like'>Feels like {feels_like} °C</div>
        </div>
        <div className='summary'>{summary}</div>
      </div>
      <div className='other-infos'>
        {otherInfoWidget.map(({ id, icon, name, value, unit }) => (
          <div className='widget' key={id}>
            <div className='widget-container'>
              <div className='info'>
                <div className='icon'>
                  <i className={`bi bi-${icon}`}></i>
                </div>
                <div className='details'>
                  <span>{name}</span>
                  <span>{value}{unit}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeather;
