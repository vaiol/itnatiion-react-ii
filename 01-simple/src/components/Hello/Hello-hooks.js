import { useEffect, useState } from 'react'
import './Hello.css'

export const Hello = (props) => {
    console.log('updating')

    const [num, setNumber] = useState(0)
    const [text, setText] = useState('')

    const increaseNumber = () => {
        setNumber(num + 1)
    }

    useEffect(() => {
        setTimeout(() => {
            setNumber(num + 1)
        }, props.timeout)
    }, []) // componentDidMount

    useEffect(() => {
        setText('Current number is ' + num)
    }, [num])

    // useEffect(() => {
    //     console.log('Rendering')
    // }) // componentDidUpdate

    return (
        <div>
            <div className='hello'>
            {num}
            {text}
            <button onClick={increaseNumber}>Click</button>
            </div>
            
        </div>
    )
}