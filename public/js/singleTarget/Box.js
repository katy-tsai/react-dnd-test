const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('react').PropTypes;
const DragSource = require('react-dnd').DragSource;
const ItemTypes = require('./ItemTypes').ItemTypes;

const boxSource = {
  beginDrag(props){
    return{ name:props.name}
  },
  endDrag(props,monitor){
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log(item);
    console.log(dropResult);
    if(dropResult){
      window.alert(
        `YOU dropped ${item.name} into ${dropResult.name}`
      )
    }
  }
}

function collect(connect,monitor){
  return {
    connectDragSource:connect.dragSource(),
    isDragging:monitor.isDragging()
  }
}

var Box = React.createClass({
  propTypes:{
    connectDragSource:PropTypes.func.isRequired,
    isDragging:PropTypes.bool.isRequired,
    name:PropTypes.string.isRequired
  },
  render(){
    const isDragging = this.props.isDragging;
    const connectDragSource = this.props.connectDragSource;
    const name = this.props.name;
    const opacity = isDragging?0.4:1;

    return connectDragSource(
      <div style={{opacity:opacity}} className="boxSource-div">
        {name}
      </div>
    )


  }
})

module.exports =  DragSource(ItemTypes.BOX,boxSource,collect)(Box);
