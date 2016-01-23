var React = require('react');
var List = require('./List.jsx');


var ListManager = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      newItemText: ''
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);

    this.setState({
      items: currentItems,
      newItemText: ''
    });
  },
  onChange: function(e) {
    this.setState({
      newItemText: e.target.value
    });
  },
  render: function() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.newItemText}/>
          <button>Add</button>
          <List items={this.state.items}/>
        </form>
      </div>
    )
  }
});

module.exports = ListManager;
