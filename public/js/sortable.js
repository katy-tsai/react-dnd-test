const React = require('react');
const ReactDOM = require('react-dom');
require('../css/sortable');
var colors = ["Red","Green","Blue","Yellow","Black","white","Orange"];
var placeholder = document.createElement("li");
placeholder.className = "placeholder";
var List = React.createClass({
  getInitialState:function(){
    return {data:this.props.data};
  },
  render(){
    console.log(this.state.data)
    var listItems = this.state.data.map(function(item,i){
      return (
        <li data-id={i} key={i} draggable="true" onDragEnd={this.dragEnd} onDragStart={this.dragStart}>
          {item}
        </li>
      )
    }.bind(this));
    return <ul onDragOver={this.dragOver}>{listItems}</ul>
  },
  dragStart:function(e){
    this.dragged = e.currentTarget;
    console.log(e.currentTarget);
    e.dataTransfer.effectAllowed ='move';
    e.dataTransfer.setData('text/html',e.currentTarget);
  },
  dragEnd:function(e){
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);
    var data = this.state.data;
    var form = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(form<to) to --;
    data.splice(to,0,data.splice(form,1)[0]);
    this.setState({data:data});
  },
  dragOver:function(e){
    e.preventDefault();
    this.dragged.style.display="none";
    if(e.target.className=='placeholder') return ;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder,e.target);

  }
})

ReactDOM.render(
  <List data={colors} />,document.getElementById('app')
)
