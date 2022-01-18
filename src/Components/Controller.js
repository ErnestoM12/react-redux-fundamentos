import React from 'react'
import { connect } from 'react-redux'
import { incrementAsync } from '../redux/actions/counterActions'

const Controller = (props) => {


    const handler = () => {
        props.dispatch(incrementAsync(1000))
    }


    return (
        <div>
            <button onClick={handler}>
                Dispatch
            </button>


            <h1>{props.counter}</h1>

        </div>
    )
}
const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps)(Controller)


