import { useSelector } from "react-redux"
import { Taskcard } from "./Taskcard"

export const Tasklist=()=>{
    const list =useSelector((state)=>state.list)
    return(
        <div>
           {  
            list.map(
                (el)=><Taskcard task={el} key={el.id}/>
            )
           } 

        </div>
    )
}