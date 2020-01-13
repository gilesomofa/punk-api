import React from "react";
import Beeritem from "./Beeritem";

class App extends React.Component {
  state = {
    beerList: []
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ beerList: parsedJSON }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        {this.state.beerList.map((beer, index) => (
          <Beeritem
            key={beer.id}
            name={beer.name}
            description={beer.description}
          />
        ))}
      </div>
    );
  }
}
export default App;
