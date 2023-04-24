import { useState } from "react";
function Car(){
    const[car,setCar] = useState({
        branch:"ford",
        Color:"red"
    });
    const updateColor = ()=>{
        setCar(previousState => {
            return{...previousState, Color:'blue'}
        })

    }
    return(
        <>
            <h1>My {car.branch}</h1>
            <p>{car.Color}</p>
            <button type="button" onClick={updateColor}></button>
        </>
    )
}
export default Car;