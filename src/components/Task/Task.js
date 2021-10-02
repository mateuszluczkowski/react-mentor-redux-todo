import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import { CrossIcon, Text, Wrapper } from "./Task.css";
import { CheckCircle } from "components";

import { check, remove } from "reducers/todos.reducer";

const Task = ({ content, isChecked, id, index }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
   const dispatch = useDispatch();
   const isDark = useSelector(({ themeToggle }) => themeToggle.isDark);

   const showCross = () => setIsDisplayed(true);
   const hideCross = () => setIsDisplayed(false);
   const removeTask = () => dispatch(remove({ id }));

   return (
      <Draggable draggableId={String(id)} index={index}>
         {(provided) => (
            <Wrapper
               isChecked={isChecked}
               isDark={isDark}
               onMouseOver={showCross}
               onMouseOut={hideCross}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
            >
               <CheckCircle
                  id={id}
                  isChecked={isChecked}
                  onClick={() => dispatch(check({ id }))}
               />

               <Text isChecked={isChecked} isDark={isDark} id={id}>
                  {content}
               </Text>
               <CrossIcon
                  onClick={removeTask}
                  onMouseOver={showCross}
                  onMouseOut={hideCross}
                  isDisplayed={isDisplayed}
               />
            </Wrapper>
         )}
      </Draggable>
   );
};
export default Task;
