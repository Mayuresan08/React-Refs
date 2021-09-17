import React  from "react";
import ChildRef from "./refsChild"
class ParentRef extends React.Component
{
    constructor(props)
    {
        super(props)
        this.childRef=React.createRef()
    }

    handleClick=()=>{
        console.log(this.childRef)
        this.childRef.current.handleCounter("i")
    }
    
    render()
    {
        return(<>
            <h2>Parent</h2>
            <button onClick={this.handleClick}>Increment</button>
            <ChildRef  ref={this.childRef}/>
            </>
        )
    }
}

export default ParentRef