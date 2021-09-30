import { CheckIcon, Circle } from "./CheckCircle.css";
import { useDispatch, useSelector } from "react-redux";
import { check } from "reducers/todos.reducer";
const CheckCircle = ({ id, isChecked }) => {
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const dispatch = useDispatch();

   const handleClick = () => dispatch(check({ id }));
   return (
      <Circle
         onClick={id >= 0 ? handleClick : null}
         isChecked={isChecked}
         id={id}
         isDark={isDark}
      >
         {isChecked ? <CheckIcon /> : null}
      </Circle>
   );
};
export default CheckCircle;
