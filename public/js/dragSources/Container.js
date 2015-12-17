const React = require('react');
const ReactDOM = require('react-dom');
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd-html5-backend');
const SourceBox = require('./SourceBox');
const Colors = require('./Colors');
const TargetBox = require('./TargetBox');
var  Container = React.createClass({
  render(){
    return (
      <div className="container">
        <div className="source">
            <SourceBox color ={Colors.BLUE}>
              <SourceBox color ={Colors.YELLOW}>
                <SourceBox color ={Colors.YELLOW}/>
                <SourceBox color ={Colors.BLUE}/>
              </SourceBox>
            </SourceBox>
            <SourceBox color ={Colors.BLUE}>
              <SourceBox color ={Colors.YELLOW}/>
            </SourceBox>
        </div>
        <div className="target">
            <TargetBox />
        </div>
      </div>
    )
  }
});
module.exports =DragDropContext(HTML5Backend)(Container);
