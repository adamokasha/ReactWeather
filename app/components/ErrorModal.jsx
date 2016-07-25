var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error',
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
  },
  // Automatically called after DOM has been updated with whatever is in render function (in this case the modal (hidden))
  componentDidMount: function () {
    var {title, message} = this.props;

    // We moved modal mark up here bc it interferes with React
    var modalMarkUp = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    // Code to render modalMarkUp to string and pass to this component node
    var $modal = $(ReactDOMServer.renderToString(modalMarkUp));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
