import { ADDTASK, EDITTODO, FILTERTASK, SETCHECK } from "../actiontypes/actiontypes";

export const addtask = (name, imgurl) => {
  return {
    type: ADDTASK,
    payloade: {name,imgurl}
  };
};
export const filtertodo = (status) => {
  return {
    type: FILTERTASK,
    payload: status,
  };
};
export const edittodo = (id, name) => {
  return {
    type: EDITTODO,
    payload: {id, name }
  };
};
export const setcheck = (id, isdone) => {
  return{
    type: SETCHECK,
    payload: {id, isdone}
  }
}
