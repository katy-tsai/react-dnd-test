const React = require('react');
const ReactDOM = require('react-dom');
var data = ["Red","Green","Blue","Yellow","Black","white","Orange"];
require('../css/Listchoose');
var placeholder = document.createElement("li");
placeholder.className = "placeholder";
var Listchoose = React.createClass({
  getInitialState:function(){
    return {
      data:this.props.data,
      items:["Red","Green"],
      isdrop:false
    };
  },
  render(){
    var listItems = this.state.data.map(function(item,i){
      return (
        <li data-id={i} key={i} draggable="true" className="drag" onDragEnd={this.dragEnd} onDragStart={this.dragStart}>
          {item}
        </li>
      )
    }.bind(this));

    var chooseItems = this.state.items.map(function(item,i){
      return (
        <li data-id={i} key={i} onDragOver={this.dragOver} onDragLeave={this.dragLeave}>
          {item}
        </li>
      )
    }.bind(this))

    return (
      <div>
        <ul id="chooseItem">
          {listItems}
        </ul>
        <ul id="dropContainer" onDragOver={this.dragOver} onDrop={this.drop} className="container" onDragEnter={this.dragEnter} >
        {chooseItems}
        </ul>
      </div>
    )
  },
  dragStart:function(e){
    this.dragged = e.currentTarget;
  //  console.log(e.currentTarget);
    this.setState({isdrop:false});
    e.dataTransfer.effectAllowed ='copy';

  },
  dragOver:function(e){
    e.preventDefault();
    e.stopPropagation();
    this.dragged.style.display="none";
    if(e.target.className=='placeholder') return ;
    this.over = e.target;
    if(e.target.className=='container'){
      e.target.appendChild(placeholder);
    }else{
      placeholder.setAttribute('index',Number(this.over.dataset.id));
      e.target.parentNode.insertBefore(placeholder,e.target);
    }

  },


  drop:function(e){
    var index = placeholder.getAttribute('index');
    e.target.parentNode.removeChild(placeholder);
    this.over = e.target;

    var items = this.state.items;
    var data = this.state.data;
    var form = Number(this.dragged.dataset.id);
    var to = index;

    if(isNaN(to)){
      items=items.concat(data[form]);
      this.setState({items:items,isdrop:true});
    }else{
      items.splice(to,0,data[form]);
      this.setState({items:items,isdrop:true});
    }


  },
  dragEnd:function(e){
    if(!this.state.isdrop){
      var node = document.getElementById("dropContainer")
      node.removeChild(placeholder);
    }



  },
  dragEnter:function(e){
    e.dataTransfer.dropEffect = 'copy';

  }

});

ReactDOM.render(
  <Listchoose data={data}/>,document.getElementById('app')
)
