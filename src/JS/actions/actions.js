import { ADDTASK, EDITTODO, FILTERTASK } from "../actiontypes/actiontypes";

export const addtask = (newtask) => {
  return {
    type: ADDTASK,
    payloade: newtask,
  };
};
export const filtertodo = (status) => {
  return {
    type: FILTERTASK,
    payload: status,
  };
};
export const edittodo = (id, title) => {
  return {
    type: EDITTODO,
    payload: {id, title }
  };
};
