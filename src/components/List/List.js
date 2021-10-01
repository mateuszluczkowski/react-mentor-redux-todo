import { useSelector } from "react-redux";
import { Message, Wrapper } from "./List.css";
import { FilterPanel, Task } from "components";

const List = () => {
   const todos = useSelector(({ todos }) => todos.todos);
   const isDark = useSelector(({ themeToggle }) => themeToggle.isDark);
   const filter = useSelector(({ todos }) => todos.filter);

   const filteredContent = () => {
      const filteredTodos =
         filter === "all"
            ? todos
            : todos.filter(
                 ({ isChecked }) => isChecked === (filter !== "active")
              );
      if (filter !== "all" && filteredTodos.length === 0)
         return <Message>You don't have {filter} todos</Message>;
      return filteredTodos.map(({ id, text, isChecked }) => (
         <Task key={id} text={text} id={id} isChecked={isChecked} />
      ));
   };

   return (
      <Wrapper isDark={isDark}>
         {filteredContent()}
         {todos.length ? <FilterPanel /> : null}
      </Wrapper>
   );
};
export default List;
