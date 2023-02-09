import { task } from "../../components/task";
import { ADDTASK, EDITTODO, FILTERTASK, SETCHECK } from "../actiontypes/actiontypes";

const initstate = {
  list: task,
  status: "all",
  isdone: ''
};
export const taskreducer = (state = initstate, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, list: [...state.list, {id: Math.random() , name: action.payloade.name, imgurl: action.payloade.imgurl,  isdone:false }] };
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
            ? { ...e, name: action.payload.name }
            : e
        ),
      };
case SETCHECK:
  return {
    ...state,
    list: state.list.map((e) =>
      e.id == action.payload.id
        ? 
        {...e, isdone: !action.payload.isdone }
        : e
    ),
  };
    default:
      return state;
  }
};
