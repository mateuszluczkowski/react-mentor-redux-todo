import { CheckIcon, Circle } from "./CheckCircle.css";
import { useDispatch, useSelector } from "react-redux";
import { check } from "reducers/todos.reducer";
const CheckCircle = ({ id, isChecked }) => {
   const isDarkTheme = useSelector((state) => state.themeToggle.isDarkTheme);
   const dispatch = useDispatch();

   const checkTodo = (id) => dispatch(check({ id }));
   return (
      <Circle
         onClick={id >= 0 ? () => checkTodo(id) : null}
         isChecked={isChecked}
         id={id}
         isDarkTheme={isDarkTheme}
      >
         {isChecked ? <CheckIcon /> : null}
      </Circle>
   );
};
export default CheckCircle;
