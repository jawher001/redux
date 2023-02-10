import { useSelector } from "react-redux";
import { Taskcard } from "./Taskcard";

export const Tasklist = () => {
  const list = useSelector((state) => state.list);
  const status = useSelector((state) => state.status);
  console.log(
    list.filter((el) =>
      status == "done" ? el.isdone : status == "undone" ? !el.isdone : el
    )
  );
  return (
    <div style={{display:"flex",alignItems:"center",flexWrap:"wrap", flexDirection:"column"
    }}>
      {list
        .filter((el) =>
          status == "done" ? el.isdone : status == "undone" ? !el.isdone : el
        )
        .map((el) => (
          <Taskcard task={el} key={el.id} />
        ))}
    </div>
  );
};
