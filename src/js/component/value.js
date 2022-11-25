import React, {useState,useEffect} from "react";


const Value = () =>{


/*-------------------Useeffect update-----------------*/

    const [todoForUpdate,setTodoForUpdate] = useState([])
    

        useEffect(() =>{
                        fetch("https://assets.breatheco.de/apis/fake/todos/user/chemawall", {
                        method: "PUT",
                        body: JSON.stringify(todoForUpdate),
                        headers: {
                                "Content-Type": "application/json"
                                 }
                         })

            .then((response) => {
            console.log(response.ok); // will be true if the response is successfull
            console.log(response.status); // the status code = 200 or code = 400 etc.
            return response.json();
            })
            
            .then((body) => {
            console.log("Este es el body", body)
            })
            .catch(error => console.error("Error:", error))
      
        },[todoForUpdate])


    
/*---------------- Add todos------------------------------------*/

    const [firstInput,setFirstInput]= useState([])
    const saveFirstInput = (event) => {
    setFirstInput(event.target.value)
         }   
            
                     
    const [list,setList] = useState([])
            
            
    const saveList= (event) =>{
        if(event.keyCode ==13 && event.target.value !== ""){
            setList([...list, firstInput])               
            setFirstInput("")
            setPending(list.length + 1)
             }
         }   
    const [pending, setPending] = useState(0)
    
 /*--------------Update----------------------------*/

    const saveTodoApi =()=>{ 
            if(event.keyCode==13){
                setTodoForUpdate(list.map((label) => {
                    return  {"label":label, done :true}
                })) 
            }
        }
       

/*-----------------Delete todos--------------------------*/

    const delette =(index) =>{   
        const newList = list.filter((label,i) => i != index)
        setList(newList)
        
        setTodoForUpdate(newList.map((label) => {
                return   {"label":label, done :true}
             })) 

    setPending(list.length -1) 
    
}

  

/*----------------Change visibility-----------------------*/

    const [visibility,setVisibility] = useState("off")

    const visibilityOn =() => {
        setVisibility("on")
    }

    const visibilityOff =()=> {
        setVisibility("off")
    }


return (
        <>
            <div>
                <input className="form" onChange={saveFirstInput} onKeyDown={saveList} onKeyUp={saveTodoApi} placeholder="¿Qué necesitas apuntar?" value={firstInput} type="text"></input>
            </div>
            
            {list.map((label,index) => {
            return <>
            <div onMouseOver={visibilityOn} onMouseLeave={visibilityOff}>
            <div className="newitem">{label}</div>
            <div className={visibility} onClick={()=>delette(index)} >x</div>
            </div>
            </>
        })}
         
        <div className="divfinal">{list.length === 0 ? `No tienes ninguna tarea pendiente`: `Tienes ${pending} tareas pendientes` }</div>
        </>

)
};

export default Value