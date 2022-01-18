import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../redux/actions/userActions'


const Info = ({ user, updateName }) => {

    const handlerName = (e) => {
        const name = e.target.value
        updateName(name)
    }

    return (
        <div>
            <h2>{user.name} - {user.country} </h2>

            <input type="text" onChange={handlerName} />


        </div>
    )
}
//conectar component con el store
const mapStateToProps = ({ user }) => {

    return {
        user
    }
}
/*esto pasa las funciones a las props de componente ,
pasandoselo como segundo argumento al connect*/
const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (name) => dispatch(updateName(name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Info)