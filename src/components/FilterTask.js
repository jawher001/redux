import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtertodo } from "../JS/actions/actions";

export const Filtertask = () => {
  //const status = useSelector((state) => state.status);
  //const [done, setDone] = useState(status);

  const dispatch = useDispatch();

  return (
    <div>
      <select onChange={(e) => dispatch(filtertodo(e.target.value))}>
        <option value="all" >
          All
        </option>
        <option value="done" >
          Done
        </option>
        <option value="undone">
          Undone
        </option>
      </select>
    </div>
  );
};
