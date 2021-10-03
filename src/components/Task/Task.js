import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import { CrossIcon, Text, Wrapper } from "./Task.css";
import { CheckCircle } from "components";

import { remove } from "reducers/todos.reducer";

const Task = ({ content, isChecked, id, index }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
   const dispatch = useDispatch();
   const isDarkTheme = useSelector(
      ({ themeToggle }) => themeToggle.isDarkTheme
   );

   const displayCross = (value) => setIsDisplayed(value);
   const removeTask = (value) => dispatch(remove({ value }));
   return (
      <Draggable draggableId={String(id)} index={index}>
         {(provided) => (
            <Wrapper
               isChecked={isChecked}
               isDarkTheme={isDarkTheme}
               onMouseOver={() => displayCross(true)}
               onMouseOut={() => displayCross(false)}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
            >
               <CheckCircle id={id} isChecked={isChecked} />

               <Text isChecked={isChecked} isDarkTheme={isDarkTheme} id={id}>
                  {content}
               </Text>
               <CrossIcon
                  onClick={() => removeTask(id)}
                  onMouseOver={() => displayCross(true)}
                  onMouseOut={() => displayCross(false)}
                  isDisplayed={isDisplayed}
               />
            </Wrapper>
         )}
      </Draggable>
   );
};
export default Task;
