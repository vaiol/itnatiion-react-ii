import { Component } from 'react'
import './Hello.css'

export class Hello extends Component {
    constructor(props) {
        super()
        this.state = {
            destination: props.to,
            newDestination: props.to2,
            timeout: props.timeout,
        }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({destination: this.state.newDestination})
        }, this.state.timeout)
    }
    shouldComponentUpdate() {
        return true;
      }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate props', prevProps)
        console.log('getSnapshotBeforeUpdate state', prevState)
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    render() {
        return (
            <div className='hello'>Hello {this.state.destination}</div>
        )
    }
}