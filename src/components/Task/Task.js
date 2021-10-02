import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CrossIcon, Text, Wrapper } from "./Task.css";
import { CheckCircle } from "components";

import { check, remove } from "reducers/todos.reducer";

const Task = ({ text, isChecked, id }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
   const dispatch = useDispatch();
   const isDark = useSelector(({ themeToggle }) => themeToggle.isDark);

   const displayCross = () => setIsDisplayed(!isDisplayed);
   const removeTask = () => dispatch(remove({ id }));

   return (
      <Wrapper
         isChecked={isChecked}
         isDark={isDark}
         onMouseOver={displayCross}
         onMouseOut={displayCross}
      >
         <CheckCircle
            id={id}
            isChecked={isChecked}
            onClick={() => dispatch(check({ id }))}
         />

         <Text isChecked={isChecked} isDark={isDark} id={id}>
            {text}
         </Text>
         <CrossIcon
            onMouseOver={displayCross}
            onMouseOut={displayCross}
            isDisplayed={isDisplayed}
            onClick={removeTask}
         />
      </Wrapper>
   );
};
export default Task;
