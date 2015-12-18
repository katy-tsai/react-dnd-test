const React = require('react');
const ReactDOM = require('react-dom');
const Container = require('./dragSources/Container');
require('../css/singleTarget');
ReactDOM.render(
  <div>
    <Container />
  </div>
  ,document.getElementById('app')
);
