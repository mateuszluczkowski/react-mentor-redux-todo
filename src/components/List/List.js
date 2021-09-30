import { useSelector } from "react-redux";
import { Wrapper } from "./List.css";
import { Panel, Task } from "components";

const List = () => {
   const todos = useSelector((state) => state.todos.todos);
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const currentFilter = useSelector((state) => state.todos.filter);

   const displayContent = () => {
      if (currentFilter === "all") {
         return todos.map((todo) => (
            <Task
               key={todo.id}
               text={todo.text}
               id={todo.id}
               isChecked={todo.isChecked}
            />
         ));
      } else if (currentFilter === "active") {
         return todos
            .filter((todo) => todo.isChecked === false)
            .map((todo) => (
               <Task
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  isChecked={todo.isChecked}
               />
            ));
      } else {
         return todos
            .filter((todo) => todo.isChecked === true)
            .map((todo) => (
               <Task
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  isChecked={todo.isChecked}
               />
            ));
      }
   };
   return (
      <Wrapper isDark={isDark}>
         {displayContent()}
         {todos.length ? <Panel /> : null}
      </Wrapper>
   );
};
export default List;
