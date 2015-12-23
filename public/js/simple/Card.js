const React = require('react');
const PropTypes = React.PropTypes;
const ReactDOM = require('react-dom');
const findDOMNode = ReactDOM.findDOMNode;
const DragSource = require('react-dnd').DragSource;
const DropTarget = require('react-dnd').DropTarget;

const cardSource = {
  beginDrag(props){
    return {
      id:props.id,
      index:props.index
    }
  }
}

const cardTarget = {
  hover(props,monitor,component){
    const drageIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if(drageIndex ===hoverIndex){
      return ;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top)/2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if(drageIndex < hoverIndex && hoverClientY < hoverMiddleY){
      return ;
    }

    if(drageIndex > hoverIndex && hoverClientY > hoverMiddleY){
      return ;
    }

    props.moveCard(drageIndex,hoverIndex);
    monitor.getItem().index = hoverIndex;
  }



  export default class Card extends ReactDOM.Component {
    static propTypes = {
      connectDragSource: PropTypes.func.isRequired,
      connectDropTarget: PropTypes.func.isRequired,
      index: PropTypes.number.isRequired,
      isDragging: PropTypes.bool.isRequired,
      id: PropTypes.any.isRequired,
      text: PropTypes.string.isRequired,
      moveCard: PropTypes.func.isRequired
    };

    render() {
      const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
      const opacity = isDragging ? 0 : 1;

      return connectDragSource(connectDropTarget(
        <div style={{ ...style, opacity }}>
          {text}
        </div>
      ));
    }
  }

}
