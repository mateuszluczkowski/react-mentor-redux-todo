import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CrossIcon, Text, Wrapper } from "./Task.css";
import { CheckCircle } from "components";

import { check, remove } from "reducers/todos.reducer";

const Task = ({ text, isChecked, id }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
   const dispatch = useDispatch();
   const isDark = useSelector((state) => state.themeToggle.isDark);

   const handleClick = () => dispatch(check({ id }));
   const handleMouseMove = () => setIsDisplayed(true);
   const handleMouseOut = () => setIsDisplayed(false);

   return (
      <Wrapper
         isChecked={isChecked}
         isDark={isDark}
         onMouseOver={handleMouseMove}
         onMouseOut={handleMouseOut}
      >
         <CheckCircle id={id} isChecked={isChecked} onClick={handleClick} />

         <Text onClick={handleClick} isChecked={isChecked} isDark={isDark}>
            {text}
         </Text>
         <CrossIcon
            isDisplayed={isDisplayed}
            onClick={() => dispatch(remove({ id }))}
         />
      </Wrapper>
   );
};
export default Task;
