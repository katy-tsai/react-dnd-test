const React = require('react');
const ReactDOM = require('react-dom');
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd-html5-backend');
const Dustbin = require('./Dustbin');
const Box = require('./Box');
var  Container = React.createClass({
  render(){
    return (
      <div >
        <div className="dustbin-div">
          <Dustbin />
        </div>
        <div className="box-div">
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    )
  }
});
module.exports =DragDropContext(HTML5Backend)(Container);
