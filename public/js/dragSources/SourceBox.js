const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('react').PropTypes;
const DragSource = require('react-dnd').DragSource;
const ItemTypes = require('./ItemTypes').ItemTypes;
const Colors = require('./Colors');
var ColorSource = {
  canDrag(props){
    return !props.forbidDrag;
  },
  beginDrag(){
    return {};
  }
}
function type(props){
  return props.color;
}
function collect(connect,monitor){
  return {
    connectDragSource:connect.dragSource(),
    isDragging:monitor.isDragging()
  }
}
var SourceBox = React.createClass({
  propTypes:{
    connectDragSource:PropTypes.func.isRequired,
    isDragging:PropTypes.bool.isRequired,
    color:PropTypes.string.isRequired,
    children:PropTypes.node
  },
  getInitialState(){
    return {
      forbidDrag:false
    }

  },
  render(){
    const color = this.props.color;
    const isDragging = this.props.isDragging;
    const opacity = isDragging?0.4:1;
    const forbidDrag = this.state.forbidDrag;
    const connectDragSource = this.props.connectDragSource;
    const children = this.props.children;
    var backgroundColor;
    switch (color) {
      case Colors.YELLOW:
        backgroundColor = "lightgoldenrodyellow";
        break;
      case Colors.BLUE:
        backgroundColor = "lightblue";
        break;
      default:
        break;
    }

    return connectDragSource(
      <div className="connectDragSource" style={{backgroundColor:backgroundColor,opacity:opacity,cursor:forbidDrag?'default':'move'}}>
        <input type="checkbox" checked={forbidDrag} onChange={this.onToggleForbidDrag} />
        <small>Forbid drag</small>
        {children}
      </div>
    );

  },
  onToggleForbidDrag(){
    this.setState({
      forbidDrag:!this.state.forbidDrag
    })
  }

});
module.exports = DragSource(type,ColorSource,collect)(SourceBox);
