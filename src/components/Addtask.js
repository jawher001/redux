import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../JS/actions/actions";

export const Addtask = () => {
  const dispatch = useDispatch();
  const [newtask, setnewtask] = useState("");
  const [newtaskurl, setnewtaskurl] = useState("");
  const handelechange = () => { 
    console.log("button")
    dispatch(addtask(newtask,newtaskurl));
    setnewtask("");
    setnewtaskurl("")
  };
console.log(newtaskurl)
  return (
    <div>
      <input
      value={newtask.imgurl}
        type="usl"
        name="img"
        placeholder="put the img url"
        onChange={(e) => setnewtaskurl(e.target.value)}
      />
      <input
      value={newtask.name}
        type="text"
        name="descripion"
        placeholder="put the description"
        onChange={(e) => setnewtask(e.target.value)}
      />
      <button onClick={handelechange}>submit new task</button>
    </div>
  );
};
