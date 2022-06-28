import { connect } from "react-redux"
import { buyIceCreame } from "../redux"

function IceCreameContainer(props) {

    return(
        <>
            <h1>NUmber of Ice Creames - {props.numberOfIceCreame} </h1>
            <button onClick={props.buyIceCreame}> Buy Ice Creame</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfIceCreame : state.iceCreame.numberOfIceCreame
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyIceCreame : () => dispatch(buyIceCreame())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreameContainer)