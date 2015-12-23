var React = require('react');
var update = require('react-addons-update');
var ReactDOM = require('react-dom');

var  Test = React.createClass({
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
      <ul>
        {cards.map(this.renderNode)}

      </ul>
    );
  },
  renderNode(card,index){
     var id = card.id;

      return <li key={index} onClick={this.moveCard.bind(null,index)}>{card.text}</li>
  },
  moveCard(index){
    var cards = this.state.cards;

    var removeid = index;
    var dragCard = cards[index];
    console.log(dragCard);
    var newcards = update(this.state,{
      cards:{
        $splice:[[removeid,1],[0,0,dragCard]]
      }
    })
    console.log(newcards);
    this.setState(newcards);

  }
});

ReactDOM.render(
  <div>
    <Test />
  </div>
  ,document.getElementById('app')
);
