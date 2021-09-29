import {
   DisplayList,
   CleanButton,
   Counter,
   ListItem,
   Wrapper,
} from "./Panel.css";
import { useDispatch, useSelector } from "react-redux";
import { remove, setFilter } from "reducers/todos.reducer";
const Panel = () => {
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todos.todos);
   const currentFilter = useSelector((state) => state.todos.filter);
   const clearCompleted = () => {
      todos.forEach(({ isChecked, id }) => {
         if (isChecked) dispatch(remove({ id }));
      });
   };
   const displayLeftText = () => {
      const todosLeft = todos.filter((todo) => todo.isChecked === false).length;
      if (todosLeft === 0) return "You have nothing to do";
      if (todosLeft === 1) return "One item left";
      return `${todosLeft} items left`;
   };
   const handleFilterClick = (e, filter) => {
      e.target.classList.add("active");
      dispatch(setFilter({ filter }));
   };
   return (
      <Wrapper>
         <Counter>{displayLeftText()}</Counter>
         <DisplayList>
            <ListItem
               active={currentFilter === "all"}
               onClick={(e) => handleFilterClick(e, "all")}
            >
               All
            </ListItem>
            <ListItem
               active={currentFilter === "active"}
               onClick={(e) => handleFilterClick(e, "active")}
            >
               Active
            </ListItem>
            <ListItem
               active={currentFilter === "done"}
               onClick={(e) => handleFilterClick(e, "done")}
            >
               Completed
            </ListItem>
         </DisplayList>
         <CleanButton onClick={clearCompleted}>Clear Completed</CleanButton>
      </Wrapper>
   );
};
export default Panel;
