import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CrossIcon, Text, Wrapper } from "./Task.css";
import { CheckCircle } from "components";

import { check, remove } from "reducers/todos.reducer";

const Task = ({ content, isChecked, id }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
   const dispatch = useDispatch();
   const isDark = useSelector(({ themeToggle }) => themeToggle.isDark);

   const showCross = () => setIsDisplayed(true);
   const hideCross = () => setIsDisplayed(false);
   const removeTask = () => dispatch(remove({ id }));

   return (
      <Wrapper
         isChecked={isChecked}
         isDark={isDark}
         onMouseOver={showCross}
         onMouseOut={hideCross}
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
            onMouseOver={showCross}
            onMouseOut={hideCross}
            isDisplayed={isDisplayed}
            onClick={removeTask}
         />
      </Wrapper>
   );
};
export default Task;
