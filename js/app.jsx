import React from "react";
import ReactDOM from "react-dom";

import TouristsList from "./touristsList.jsx";

// class SpeedClickGame extends React.Component{

//     constructor(props){
//         super(props);
//         this.nextTime = props.time;
//         this.state = {
//             time: props.time,
//             points: 0,
//             buttonDisabled: false,
//             left: "200px",
//             top: "200px"
//         };

//     }
//     handleClick = ()=>{
//         if(!this.state.buttonDisabled){

//             this.setState({points: this.state.points+10});
//             this.nextTime -= 50;
//             this.setState({time: this.nextTime});
//             this.setState({
//                 left: (Math.random()*1000) + "px",
//                 top: (Math.random()*500) + "px",
//             })
//         }
//     }
//     render(){
//         return <div onClick={this.handleClick} style={{backgroundColor:"pink", width: "200px", height: "200px", position: "absolute", left:this.state.left, top:this.state.top}}>
//             {/* <button onClick={this.handleClick} disabled={this.state.buttonDisabled}>PUSH ME!</button> */}
//             <h1>Time: {this.state.time}</h1>
//             <h2>Points: {this.state.points}</h2>
//         </div>
//     }
//     componentDidMount(){
//         this.id = setInterval(()=>{
//             this.setState({time: this.state.time-50});
//             if(this.state.time <= 0){
//                 this.setState({time: 0})
//                 this.setState({buttonDisabled: true})
//                 clearInterval(this.id);
//             }
//         }, 50);
//     }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
        <TouristsList />
      </div>
    );
  }
}
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
