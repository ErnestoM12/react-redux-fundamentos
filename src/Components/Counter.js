import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store'

const Counter = (props) => {

    return (
        <div>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
            <h1>{props.count}</h1>
        </div>
    )
}

//conectar component con el store
const mapStateToProps = (state) => {
    return {
        count: state
    }
}

/*esto pasa a la funciones a las props de componente 
pasandoselo como segundo argumento al connect*/

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Counter)