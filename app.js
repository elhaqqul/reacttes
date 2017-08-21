
var A = React.createClass({
	render: function(){
		return (<p>aeded</p>)
	}
});

var Tes = React.createClass({
	render: function(){
		return(<h1><A/></h1>);
	}
});
ReactDOM.render(<Tes/>, document.getElementById('react-app'));