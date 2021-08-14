import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
  
	state = { show : false }
	
  updateState = () => { 
      
    this.setState({show: !(this.state.show)}) 
  } 

    render() {
    	return(
    		<div id="main">
			<button
        id="click"
        onClick={
          this.updateState
        }
      >
        Toggle P
      </button>
      {this.state.show ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null }
    		</div>
    	);
    }
}


export default App;

