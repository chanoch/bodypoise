$(function() { 
    setTimeout(function() {
      ReactDOM.render(React.createElement(App, { context: $('body') }), document.getElementById('root'));
    }, 1000);
});