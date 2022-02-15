import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello.</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);