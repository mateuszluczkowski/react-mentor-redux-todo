import { CleanButton, Counter, Wrapper } from "./FilterPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { FilterList } from "components";
import { remove } from "reducers/todos.reducer";
const FilterPanel = () => {
   const dispatch = useDispatch();
   const isDarkTheme = useSelector((state) => state.themeToggle.isDarkTheme);
   const tasks = useSelector((state) => state.todos.tasks);
   const isMobile = useSelector((state) => state.themeToggle.isMobile);

   const clearCompletedTask = () => {
      tasks.forEach(({ isChecked, id }) =>
         isChecked ? dispatch(remove({ value: id })) : null
      );
   };
   const displayLeftText = (tasks) => {
      const todosLeft = tasks.filter((todo) => todo.isChecked === false).length;
      if (todosLeft === 0) return "You have nothing to do";
      if (todosLeft === 1) return "One item left";
      return `${todosLeft} items left`;
   };
   return (
      <>
         <Wrapper isDarkTheme={isDarkTheme}>
            <Counter isDarkTheme={isDarkTheme}>
               {displayLeftText(tasks)}
            </Counter>
            {isMobile ? null : <FilterList />}
            <CleanButton onClick={clearCompletedTask} isDarkTheme={isDarkTheme}>
               Clear Completed
            </CleanButton>
         </Wrapper>
         {isMobile ? <FilterList /> : null}
      </>
   );
};
export default FilterPanel;
