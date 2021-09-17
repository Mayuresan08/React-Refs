import ChildRef from "./refsChild";
import {useRef} from "react"

function RefsApp()
{
 let refchild=useRef();


const handleClick=()=>{
refchild.current.handleCounter("i")
}


return(
    <>
            <h2>Parent</h2>
            <button onClick={handleClick}>Increment</button>
            <ChildRef  ref={refchild}/>
            </>
)

}
export default RefsApp