import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../JS/actions/actions";

export const Addtask = () => {
  const dispatch = useDispatch();
  const [newtask, setnewtask] = useState({ imgurl: "", name: "" });
  const handelechange = () => { 
    console.log("button")
    dispatch(addtask(newtask));
    setnewtask({ imgurl: "", name: "" });
  };

  return (
    <div>
      <input
      value={newtask.imgurl}
        type="usl"
        name="img"
        placeholder="put the img url"
        onChange={(e) => setnewtask({...newtask,imgurl:e.target.value})}
      />
      <input
      value={newtask.name}
        type="text"
        name="descripion"
        placeholder="put the description"
        onChange={(e) => setnewtask({...newtask,name:e.target.value})}
      />
      <button onClick={handelechange}>submit new task</button>
    </div>
  );
};
