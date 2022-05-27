import { Component } from 'react';
import './App.css';
import { Hello } from './components/Hello/Hello';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helloArray: [
        { destination: 'ItNation', newDestination: 'ItNation 2.0', timeout: 2000 },
        { destination: 'World', newDestination: 'New World!', timeout: 2000 },
        // { destination: 'New', newDestination: 'Totaly new!', timeout: 10000 },
      ]
    };
  }
  render() {
    const arrHelloComponents = []
    for (const [index, helloItem] of this.state.helloArray.entries()) {
      arrHelloComponents.push(
        <Hello
          key={index}
          to={helloItem.destination}
          to2={helloItem.newDestination}
          timeout={helloItem.timeout}>
        </Hello>
      );
    }
    return (
      <div className="App">
        {arrHelloComponents}
      </div>
    );
  }
}

export default App;
