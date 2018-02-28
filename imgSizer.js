/*var Profile = React.createClass({
  //this is the old way to do it?
});
*/

class Profile extends React.Component {
  //write react component here, using class like a boss
  //ES6 Constructor
  constructor(props){
    super(props)
    this.state = {
    height: 100,
   }
  };
  render(){
    var {name, age, bio, pic} = this.props;
    var {height} = this.state;
    return (
    <div className="profile-box">
        <h5>{name}</h5>
        <h5>Age:{age}</h5>
        <h5>Bio:{bio}</h5>
        <img src={pic} height={this.state.height} />
        <br />
        <button onClick={this.zoomPicOut.bind(this)}>-</button>
        <button onClick={this.zoomPicIn.bind(this)}>+</button>
    </div>
     );
  }
zoomPicIn(){
  this.setState({height: this.state.height + 20}); 
}
zoomPicOut(){
  this.setState({height: this.state.height - 20});
  
}  
}
//props
//state
React.render(<Profile name="John Derka" age={39} bio="I like puppies" pic="http://lorempixel.com/400/200/" />, document.getElementById('app'));
