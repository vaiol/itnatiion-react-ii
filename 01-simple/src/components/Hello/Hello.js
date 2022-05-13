import './Hello.css'

export const Hello = (props) => {
    return (
        <div className='hello'>Hello {props.to}</div>
    )
}