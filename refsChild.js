import  React  from "react";

class ChildRef extends React.Component
{
    constructor(props)
    {
        super(props)
        this.refInput=React.createRef();
        this.state={
            value:"",
            counter:0
        }
    }

    handleClick=()=>
    {
        console.log(this.refInput.current)
        this.setState({value:this.refInput.current.value})
    }

    handleCounter=(a)=>
    {
        console.log("in")
        if( a === "i") this.setState({counter:this.state.counter+1})
        else this.setState({counter:0})
    }
    render()
    {
       return(<>
       <h2>Child</h2>
        <p>hello</p>
        <input type="text" ref={this.refInput}></input>
        <button onClick={this.handleClick}>Submit</button>
        <p>Counter:{this.state.counter}</p>
        <p>{this.state.value}</p>
        <button onClick={()=>{this.handleCounter("i")}}>increment</button>
        <button onClick={()=>{this.handleCounter("r")}}>reset</button>
        </>
       )
    }
}

export default ChildRef