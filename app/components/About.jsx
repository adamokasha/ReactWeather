var React = require('react');

// Stateless functional component
// Define only render method and no state
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Component</h1>
      <p>This is a weather application built with React. I have built this for the Complete React Web App Developer Course.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name
        </li>
      </ul>
      <a href="https://github.com/samokasha/ReactWeather" target="_blank">GitHub Repo</a>
    </div>
  )
};

module.exports = About;
