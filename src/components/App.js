import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state = { show : false };
      //this.updateState = this.updateState.bind(this) 
      
	};
  updateState() { 
      
    this.setState({show: !(this.state.show)}) 
  } 

    render() {
    	return(
    		<div id="main">
			<button
        id="click"
        onClick={
          this.updateState.bind(this)
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


