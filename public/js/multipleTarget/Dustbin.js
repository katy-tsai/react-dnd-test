const React = require('react');
const ReactDOM = require('react-dom');
const DropTarget = require('react-dnd').DropTarget;
const PropTypes = React.PropTypes;
const ItemTypes = require('./ItemTypes').ItemTypes;
const boxTarget = {
  drop (props,monitor){
    return props.onDrop(monitor.getItem);
  }
}

function collect(connect,monitor){
  return {
    connectDropTarget:connect.dropTarget(),
    isOver:monitor.isOver(),
    canDrop:monitor.canDrop()
  }
}

var Dustbin = React.createClass({
  PropTypes:{
    connectDropTarget:PropTypes.func.isRequired,
    isOver:PropTypes.bool.isRequired,
    canDrop:PropTypes.bool.isRequired
  },
  render(){
    const canDrop = this.props.canDrop;
    const isOver = this.props.isOver;
    const connectDropTarget = this.props.connectDropTarget;
    const isActive = canDrop && isOver;
    var backgroundColor = '#222';
    if(isActive){
      backgroundColor = 'darkgreen';
    }else if(canDrop){
      backgroundColor = 'darkkhaki';
    }
    return connectDropTarget(
      <div className = "dragTarget-div" style={{backgroundColor:backgroundColor}}>
        {isActive?'Release to drop':'Drag a box here'}
      </div>
    );
  }
});
module.exports =  DropTarget(ItemTypes.BOX,boxTarget,collect)(Dustbin);;
