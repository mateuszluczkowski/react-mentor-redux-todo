import { useSelector } from "react-redux";
import { Wrapper } from "./List.css";
import { Task } from "components";

const List = () => {
   const todos = useSelector((state) => state.todos.todos);

   return (
      <Wrapper>
         {todos.map((todo) => (
            <Task
               key={todo.id}
               text={todo.text}
               id={todo.id}
               isChecked={todo.isChecked}
            />
         ))}
      </Wrapper>
   );
};
export default List;
