var React = require('react');

var About = (props) => {
    return (
        <div>
        <h1 className="text-center">About Component</h1>
        <p>This is a weather application built on React.</p>
        <p>Here are some of the tools I've used:</p>
            <ul>
            <li><a href="https://facebook.github.io/react">React</a></li> - This was the Javascript framework used.
            <li><a href="http://openweathermap.org">Open Weather Map</a></li> - I used Open Weather Map to search for weather data by city name.
                <li><a href="https://github.com/alvaro-augustho/react-weather">Github Repository</a></li> - Github repo where this project is hosted.
            </ul>
        </div>
    );
}

module.exports = About;