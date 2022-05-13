import { Component } from 'react';
import './App.css';
import { Hello } from './components/Hello/Hello';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: ['ItNation', 'World']
    };
  }
  render() {
    const arrHelloComponents = []
    for (const to of this.state.to) {
      arrHelloComponents.push(<Hello to={to}></Hello>);
    }
    return (
      <div className="App">
        {this.state.to?.map(to => <Hello to={to}></Hello>)}
        {arrHelloComponents}
      </div>
    );
  }
}

export default App;
