var React = require('react');

var About = (props) => {
    return (
        <div className="expanded">
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built on React.</p>
        <p>Here are some of the tools I've used:</p>
            <ul>
            <li><a href="https://facebook.github.io/react">React</a></li> - This was the Javascript framework used.
            <li><a href="http://openweathermap.org">Open Weather Map</a></li> - I used Open Weather Map to search for weather data by city name.
                <li><a href="https://github.com/alvaro-augustho/react-weather">Github Repository</a></li> - Github repo where this project is hosted.
            </ul>
            <div className="contact">
        <p className="text-center">Page created by <strong>Alvaro Silva</strong></p>
        <p className="text-center">If you have any questions feel free to reach out at</p>
            <p className="text-center"><strong>alvaro.augustho@gmail.com</strong></p>
            </div>
        </div>
    );
}

module.exports = About;