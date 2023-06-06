import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio1: "Bio",
      name1: "Name",
      location1: "Location",
    };
    // console.log("Profile class constructor");
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/samyakshah3008")
      .then((res) => res.json())
      .then((res) => res);
    this.setState({
      bio1: data.bio,
      name1: data.name,
      location1: data.location,
    });
    // console.log("profile class did mount");
  }

  render() {
    // console.log("profile class render");
    return (
      <>
        <h1>Profile class component</h1>
        <h2> {this.state.bio1} </h2>
        <h2> {this.state.name1} </h2>
        <h2> {this.state.location1} </h2>
      </>
    );
  }
}

export default ProfileClass;
