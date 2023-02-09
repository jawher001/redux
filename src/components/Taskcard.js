// // export const Taskcard=({el})=>{
// //     return(
// //         <div>
// //             <p>Taskcard</p>
            
// //         </div>
// //     )
// }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { edittodo, setcheck } from '../JS/actions/actions';
import  { useState } from "react";

export  function Taskcard ({task}) {
  const [todoname, setTodoName] =useState("");

  const [text, setText] =useState(false);
  const [show, setShow] =useState(false);
  
  const handleChange = (e) => setTodoName(e.target.value);

  const dispatch = useDispatch()

  const handleSetCheck = () => dispatch(setcheck(task.id, task.isdone));
  const handleEdit = () => {
      dispatch(edittodo(task.id, todoname));   
      setText(!text)
      setShow(!show)
     
  };
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={task.imgurl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {task.name}
          </Typography>
          {show ? <input value={todoname} type="text" placeholder='edit todo' onChange={handleChange} /> : ""}
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleEdit} size="small" color="primary">
          {text ? "save" : "edit"}
        </Button>
        <input  type="checkbox" onClick={handleSetCheck}/>
      </CardActions>
    </Card>
  );
}