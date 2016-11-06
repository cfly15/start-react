import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  //using property initializer
  addFish = (fish) => {
    // update state
    const fishes = {...this.state.fishes};
    // add our fish
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes }); // vs ({fishes: fishes}) is an ES6 thing
  };

  render() {
    return (
      <div>
        <Header tagline="Example Prop Data"/>
        <Content addFish={this.addFish}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
