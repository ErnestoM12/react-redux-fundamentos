import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions/counterActions'

const Counter = ({ increment, decrement, counter, name }) => {

    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h1>{counter}</h1>
            <p>
                {name}
            </p>
        </div>
    )
}

//conectar component con el store
const mapStateToProps = ({ counter, user }) => {

    return {
        counter,
        name: user.name
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