import React, {useState} from "react";

const Task = (props) =>{
   
    const borrar =(index) =>{   
        const nuevaLista = props.list.filter((label,i) => i != index)
        props.setList(nuevaLista)
        props.setPending(props.list.length -1)                  
    }

    const [estado,setEstado] = useState("off")

    const change4 =() => {
    setEstado("on")}

    const change5 =()=> {
    setEstado("off")}

    return (
        <>         
            <div onMouseOver={change4} onMouseLeave={change5}>
            <div className="nuevoitem">{props.label}</div>
            <div  className={estado} onClick={()=>borrar(props.index)}>x</div>
            </div>
        </>
            )
}

export default Task
