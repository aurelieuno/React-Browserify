var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  render() {

    return (
      <div>
      <p>Hello World</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


