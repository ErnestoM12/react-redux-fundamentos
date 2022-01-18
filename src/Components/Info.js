import React from 'react'
import { connect } from 'react-redux'
import { } from '../redux/store'


const Info = ({ counter, name }) => {
    return (
        <div>
            <h2>{name} - {counter} </h2>
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


    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Info)