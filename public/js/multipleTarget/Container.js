const React = require('react');
const ReactDOM = require('react-dom');
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd-html5-backend');
const Dustbin = require('./Dustbin');

var  Container = React.createClass({
  render(){
    return (
      <div >

      </div>
    )
  }
});
module.exports =DragDropContext(HTML5Backend)(Container);
