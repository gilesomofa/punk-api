import React from "react";

class Beeritem extends React.Component {
  state = {
    isLiked: false
  };
  toggle = () => {
    let isLiked = this.state.isLiked;
    if (isLiked === false) {
      isLiked = true;
    } else {
      isLiked = false;
    }
    this.setState({ isLiked });
    console.log(isLiked);
  };
  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={() => this.toggle()}>Like me</button>
      </div>
    );
  }
}
export default Beeritem;
