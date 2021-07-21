import React from "react"
import { FaTimes,FaRegCircle,FaAngellist } from "react-icons/fa";

const Icon=({choice})=>{
    switch (choice){
        case "cross":
            return <FaTimes className="icon"/>

        case "circle":
            return <FaRegCircle className="icon"/>

        default:
            return ""
    }
    
}

export default Icon