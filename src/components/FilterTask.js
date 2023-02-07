import { useState } from "react";
import { useSelector } from "react-redux"

export const Filtertask=()=>{
  const status = useSelector((state) => state.status);
  const [done, setDone] = useState(status);
  const handeldone=(value)=>{setDone(value)}
    
    return(

    
    
        <div>
           <select>
                <option value="" key="" onClick={"done"}>Done</option>
                <option value="" key=""onClick={"undone"}>Undone</option>
                <option value="" key=""onClick={"all"}>All</option>
            </select>

            
        </div>
    )
}
