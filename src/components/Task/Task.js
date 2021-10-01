import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CrossIcon, Text, Wrapper } from "./Task.css";
import { CheckCircle } from "components";

import { check, remove } from "reducers/todos.reducer";

const Task = ({ text, isChecked, id }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
   const dispatch = useDispatch();
   const isDark = useSelector(({ themeToggle }) => themeToggle.isDark);

   const handleMouseMove = () => setIsDisplayed(true);
   const handleMouseOut = () => setIsDisplayed(false);
   const handleMouseDown = (e) => console.log(e.target.id);
   const removeTask = () => dispatch(remove({ id }));
   return (
      <Wrapper isChecked={isChecked} isDark={isDark}>
         <CheckCircle
            id={id}
            isChecked={isChecked}
            onClick={() => dispatch(check({ id }))}
         />

         <Text
            isChecked={isChecked}
            isDark={isDark}
            id={id}
            onClick={() => dispatch(remove({ id }))}
            onMouseOver={handleMouseMove}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
         >
            {text}
         </Text>
         <CrossIcon
            onMouseOver={handleMouseMove}
            onMouseOut={handleMouseOut}
            isDisplayed={isDisplayed}
            onClick={removeTask}
         />
      </Wrapper>
   );
};
export default Task;
