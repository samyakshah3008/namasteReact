import { Component } from "react";
import Aboutclass from "./Aboutclass";
class NavbarClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 3,
      counter: 2,
    };
  }
  async componentDidMount() {
    // API CALLS
  }
  render() {
    return (
      <>
        <div>This is a class based component's Navbar</div>
        <h1>{this.props.count}</h1>
        <h1> {this.state.score} Score</h1>
        <h1> {this.state.counter} Counter </h1>
        <button
          onClick={() => {
            this.setState({
              score: this.state.score + 1,
              counter: this.state.counter + 1,
            });
          }}
        >
          Increment Score
        </button>
        <Aboutclass aboutinfo="Hey, i am about component" />
      </>
    );
  }
}

export default NavbarClass;
