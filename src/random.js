import {useState} from "react";

function Random(){
    let [num,setState]=useState(0)
    function change(){
        let a= Math.floor(Math.random()*10)+1
        setState(a)
    }
    return(
        <div style={{textAlign:"center", backgroundColor:"lightgrey", padding:"30px"}}>
            <h1>{num}</h1>
            <button onClick={change}>RandomNumber</button>
        </div>
    )
}
export default Random