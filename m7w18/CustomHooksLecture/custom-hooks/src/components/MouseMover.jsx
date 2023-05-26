// import { useEffect, useState } from "react";
import useStyle from "../hooks/useStyle";
function MouseMover() {
    const {coords, setCoords} = useStyle();
    // const [coords, setCoords] =useState({x: 0, y: 0})
    // useEffect(()=>{
    //     const handleMouseMove = (event) => {
    //         setCoords({x:event.x, y:event.y});
    //     }

    //     document.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove)
    //     }
    // }, [])

    const style = {
        border: `10px dotted rgb(${coords.x/4}, 0, ${coords.y/4})`,
        backgroundColor: `rgb(0, ${coords.x/4}, ${coords.y/4})`
    }
    return ( 
        <div style={style}>
            <h1>Mouse Mover</h1>
        </div>
     );
}

export default MouseMover;