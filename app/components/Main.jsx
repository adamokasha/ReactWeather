var React = require('react');
var Nav = require('Nav');

// Don't need to use this.props.children b/c props is passed in as argument
// simply use props.children
var Main = (props) => {
  return(
    <div>
      <Nav />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
