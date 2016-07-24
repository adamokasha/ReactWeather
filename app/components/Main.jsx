var React = require('react');
var Nav = require('Nav');

// Don't need to use this.props.children b/c props is passed in as argument
// simply use props.children
var Main = (props) => {
  return(
    <div>
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
