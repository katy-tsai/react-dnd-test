const React = require('react');
const ReactDom = require('react-dom');
const PropTypes = React.PropTypes;
const DropTarget = require('react-dnd').DropTarget;
const ItemTypes = require('./ItemTypes').ItemTypes;
const Colors = require('./Colors');
const ColorTarget = {
  drop(props,monitor,component){
    console.log(props);
    component.props.onDrop(monitor.getItemType());
  }
}

function collect(connect,monitor){
  return {
    connectDropTarget:connect.dropTarget(),
    isOver:monitor.isOver(),
    canDrop:monitor.canDrop(),
    draggingColor:monitor.getItemType()
  }
}

var TargetBox = React.createClass({
  PropTypes:{
    isOver:PropTypes.bool.isRequired,
    canDrop:PropTypes.bool.isRequired,
    draggingColor:PropTypes.string,
    lastDroppedColor:PropTypes.string,
    connectDropTarget:PropTypes.func.isRequired,
    onDrop:PropTypes.func.isRequired
  },
  getInitialState(){
    return {
      lastDroppedColor:null
    }

  },
  getDefaultProps: function() {
    return {
      onDrop: this.handleOnDrop
    };
  },
  render(){
    const draggingColor = this.props.draggingColor;
    const isOver = this.props.isOver;
    const connectDropTarget = this.props.connectDropTarget;
    const canDrop = this.props.canDrop;
    const lastDroppedColor = this.props.lastDroppedColor;
    const opacity= isOver?1:0.7;
    let backgroundColor ='#fff';
    switch (draggingColor) {
      case Colors.BLUE:
        backgroundColor = "lightblue";
        break;
      case Colors.YELLOW:
        backgroundColor = "lightgoldenrodyellow";
        break;
      default:
          break;
    }

    return connectDropTarget(
      <div className = "connectDropTarget" style={{backgroundColor:backgroundColor,opacity:opacity}}>
        <p>Drop here</p>
        {!canDrop && lastDroppedColor &&<p>Last dropped:{lastDroppedColor}</p>}

      </div>
    )

  },
  handleOnDrop(){
    return {
      onDrop: function(color){
        this.setState({
          lastDroppedColor:color
        })
      }
    };
  }


});
module.exports = DropTarget([Colors.YELLOW,Colors.BLUE],ColorTarget,collect)(TargetBox);
