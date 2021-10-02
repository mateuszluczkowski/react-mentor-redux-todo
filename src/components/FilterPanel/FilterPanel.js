import { CleanButton, Counter, Wrapper } from "./FilterPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { FilterList } from "components";
import { remove } from "reducers/todos.reducer";
const FilterPanel = () => {
   const dispatch = useDispatch();
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const tasks = useSelector((state) => state.todos.tasks);
   const isMobile = useSelector((state) => state.themeToggle.isMobile);
   const clearCompleted = () => {
      tasks.forEach(({ isChecked, id }) => {
         if (isChecked) dispatch(remove({ id }));
      });
   };
   const displayLeftText = () => {
      const todosLeft = tasks.filter((todo) => todo.isChecked === false).length;
      if (todosLeft === 0) return "You have nothing to do";
      if (todosLeft === 1) return "One item left";
      return `${todosLeft} items left`;
   };

   return (
      <>
         <Wrapper isDark={isDark}>
            <Counter isDark={isDark}>{displayLeftText()}</Counter>
            {isMobile ? null : <FilterList />}
            <CleanButton onClick={clearCompleted} isDark={isDark}>
               Clear Completed
            </CleanButton>
         </Wrapper>
         {isMobile ? <FilterList /> : null}
      </>
   );
};
export default FilterPanel;
