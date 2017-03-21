import React, { PropTypes } from 'react';
import { Link } from 'react-router';

if (process.env.WEBPACK) require('./App.scss');

function App(props) {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/rooms">rooms</Link>
          </li>
          <li>
            <Link to="/login">log in</Link>
          </li>
        </ul>
      </header>
      <div id="main">
        <article>
          {props.children}
        </article>
        <aside>aside</aside>
      </div>
      <footer>footer</footer>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.defaultProps = {
  children: (<div>default</div>),
};

export default App;
