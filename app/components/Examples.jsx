var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
            <ol>
            <li>
                <Link to='/?location=Itatiba'>Itatiba, BR</Link>    
            </li>
            <li>
                <Link to='/?location=Campinas'>Campinas, BR</Link>    
            </li>
            <li>
                <Link to='/?location=Prague'>Prague, CZ</Link>    
            </li>
            <li>
                <Link to='/?location=Pilsen,CZ'>Pilsen, CZ</Link>    
            </li>
            </ol>
        </div>
    );
}

module.exports = Examples;