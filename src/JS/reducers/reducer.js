import { task } from "../../components/task";
import { ADDTASK, EDITTODO, FILTERTASK } from "../actiontypes/actiontypes";

const initstate = {
  list: task,
  status: "all",
};
export const taskreducer = (state = initstate, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, list: [...state.list, action.payloade] };
    case FILTERTASK:
      return {
        ...state,
        status: action.payload,
      };
    case EDITTODO:
      return {
        ...state,
        list: state.list.map((e) =>
          e.id === action.payload.id
            ? { ...e, description: action.payload.title }
            : e
        ),
      };

    default:
      return state;
  }
};
