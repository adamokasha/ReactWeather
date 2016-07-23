var React = require('react');

// Can destructure in argument
var WeatherMessage = ({temp, location}) => {
  // ES6 destructuring, these are passed as props from parent
  //var {temp, location} = props;
  return (
    <div>
      <h3>It is {temp} in {location}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
