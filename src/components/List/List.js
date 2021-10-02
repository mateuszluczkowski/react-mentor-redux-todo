import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { Message, Wrapper } from "./List.css";
import { FilterPanel, Task } from "components";

import { replace } from "reducers/todos.reducer";

const List = () => {
   const dispatch = useDispatch();
   const todos = useSelector(({ todos }) => todos.tasks);
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
      return filteredTodos.map(({ id, content, isChecked }, index) => (
         <Task
            key={id}
            content={content}
            index={index}
            id={id}
            isChecked={isChecked}
         />
      ));
   };
   const onDragEnd = (result) => {
      const { destination, source } = result;
      if (!destination) return;
      if (
         destination.draggableId === source.doppableId &&
         destination.index === source.index
      )
         return;
      const newTodos = Array.from(todos);
      newTodos.splice(source.index, 1);
      newTodos.splice(destination.index, 0, todos[source.index]);
      dispatch(replace(newTodos));
   };
   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <Droppable droppableId={"1"}>
            {(provided) => (
               <Wrapper
                  isDark={isDark}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
               >
                  {filteredContent()}
                  {provided.placeholder}
               </Wrapper>
            )}
         </Droppable>
         {todos.length ? <FilterPanel /> : null}
      </DragDropContext>
   );
};
export default List;
