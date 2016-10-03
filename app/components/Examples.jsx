var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
            <ol>
            <li>
                <Link to='/?location=London'>London, EN</Link>    
            </li>
            <li>
                <Link to='/?location=Moscow'>Moscow, RU</Link>    
            </li>
            <li>
                <Link to='/?location=Madrid'>Madrid, ES</Link>    
            </li>
            <li>
                <Link to='/?location=Praha'>Praha, CZ</Link>    
            </li>
            <li>
                <Link to='/?location=Brasilia'>Brasilia, BR</Link>
            </li>
            </ol>
        </div>
    );
}

module.exports = Examples;