import { Component } from 'react';
import logo from '../../logo.svg';
import { ListItem } from '../ListItem/ListItem';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      destinations: ['world', 'itnation', 'all', '4']
    }
  }

  render() {
    const items = []
    for (let i = 0; i < this.state.destinations.length; i++) {
      items.push(<ListItem destination={this.state.destinations[i]}></ListItem>)
    }
    return (
      <div className="App">
        {items}
      </div>
    );
  }
}

export default App;
