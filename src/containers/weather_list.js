import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    console.log('City forecast', [cityName, temp, pressure, humidity]);


    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Sparklines height={100} width={150} data={temp}>
            <SparklinesLine color='red'></SparklinesLine>
          </Sparklines>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // Same as { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
