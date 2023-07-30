import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      joke : "hello"
    }
  }

  display = async() => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      const newjoke = data.value;
      this.setState({joke: newjoke}) 
    }
    catch {
      this.setState({joke : "unable to fetch joke"})
    }
  }

  render () {
    return (
      <div className="mainDiv">
        <h1>Chuck Norris has your laugh</h1>
        <div>
          <h3>{this.state.joke}</h3>
        </div>
        <button onClick={this.display}>New Joke!!</button>
      </div>
    );
  
  }
}

export default App;
