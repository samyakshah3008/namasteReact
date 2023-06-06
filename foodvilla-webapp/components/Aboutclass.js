import React from "react";
class Aboutclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: 1,
    };
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/samyakshah3008")
      .then((res) => res.json())
      .then((res) => res);
  }

  componentDidMount() {
    console.log("Did mount again");
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <h1>Hey, I am about class component</h1>
        <h1> {this.props.aboutinfo} </h1>
        <h1> {this.state.about} </h1>
        <button
          onClick={() => {
            this.setState({
              about: 2,
            });
          }}
        >
          I am a about button
        </button>
      </>
    );
  }
}

export default Aboutclass;
