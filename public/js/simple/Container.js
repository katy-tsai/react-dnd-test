var React = require('react');
var update = require('react-addons-update');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var Card = require('./Card');

var  Container = React.createClass({
  getInitialState(){
    return {
      cards:[
        {id:1,text:'aaaa'},
        {id:2,text:'bbbb'},
        {id:3,text:'cccc'},
        {id:4,text:'ddddd'},
        {id:5,text:'ffff'},
        {id:6,text:'gggg'},
        {id:7,text:'hhhh'}
      ]
    }

  },
  render(){
    var cards = this.state.cards;
    return (
      <div className="card-div">
        {cards.map(function(card,i){
          return (
            <Card key = {card.id} index={i} id={card.id} text={card.text} moveCard={this.moveCard}/>
          )
        })}
      </div>
    )
  },
  moveCard(dragIndex,hoverIndex){
    var cards = this.state.cards;
    var dragCard = cards[dragIndex];
    this.setState(update(this.state,{
      cards:{
        $splice:[
          [dragIndex,1],
          [hoverIndex,0,dragCard]
        ]
      }
    }))

  }
});
module.exports =DragDropContext(HTML5Backend)(Container);
