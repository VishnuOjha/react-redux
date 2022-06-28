import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux"

function HookCakeConatiner() { 
    // useSelectore is one of the hook from React-redux .
    // it takes a function as paramerter and return the state of store  
    const numberOfCakes = useSelector((state) =>state.cake.numberOfCake )
    // useDispatch is also one of the hook form react-resux
    // it dispatch the method of store
    const dispatch = useDispatch()
    return(
        <>
            <h1>Number of cakes - {numberOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </>
    )
}

export default HookCakeConatiner