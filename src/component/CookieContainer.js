import {buyCookie} from '../redux'
import {connect} from 'react-redux'
function CookieContainer(props) {

    return(
        <>
        <h1> number of cookie - {props.numberOfCookie}</h1>
        <button onClick={props.buyCookie} >Buy Cookie</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        numberOfCookie : state.cookie.numberOfCookie
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCookie : () => dispatch(buyCookie())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CookieContainer)