var React = require('react');
var ReactDOM = require('react-dom');

/* 
  StorePicker
  This will let us make a <StorePicker/> element
*/

// This var is the name of our element (see above)
var StorePicker = React.createClass({
	// render method is what shows us what HTML will be shown
  render : function() {
    return (
      <h1>Hello World</h1>
    )
  }
});


ReactDOM.render(<StorePicker/>, document.querySelector('#main'));