import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtertodo } from "../JS/actions/actions";

export const Filtertask = () => {
  //const status = useSelector((state) => state.status);
  //const [done, setDone] = useState(status);

  const dispatch = useDispatch();

  console.log(dispatch);
  return (
    <div>
      <select>
        <option
          value="all"
          onClick={(e) => dispatch(filtertodo(e.target.value))}
          key=""
        >
          All
        </option>
        <option
          value="done"
          onClick={(e) => dispatch(filtertodo(e.target.value))}
          key=""
        >
          Done
        </option>
        <option
          value="undone"
          onClick={(e) => dispatch(filtertodo(e.target.value))}
          key=""
        >
          Undone
        </option>
      </select>
    </div>
  );
};
