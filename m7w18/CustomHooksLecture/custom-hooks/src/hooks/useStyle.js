import { useEffect, useState } from "react";

const useStyle = () => {
    const [coords, setCoords] =useState({x: 0, y: 0})
    useEffect(()=>{
        const handleMouseMove = (event) => {
            setCoords({x:event.x, y:event.y});
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return coords;
}

export default useStyle;