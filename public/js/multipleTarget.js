const React = require('react');
const ReactDOM = require('react-dom');
const Container = require('./multipleTarget/Container');
require('../css/multipleTarget');
ReactDOM.render(
  <div>
    <Container />
  </div>
  ,document.getElementById('app')
);
