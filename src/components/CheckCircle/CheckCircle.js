import { CheckIcon, Circle } from "./CheckCircle.css";
import { useDispatch } from "react-redux";
import { check } from "reducers/todos.reducer";
const CheckCircle = ({ id, isChecked }) => {
   const dispatch = useDispatch();
   const handleClick = () => dispatch(check({ id }));
   return (
      <Circle
         onClick={id >= 0 ? handleClick : null}
         isChecked={isChecked}
         id={id}
      >
         {isChecked ? <CheckIcon /> : null}
      </Circle>
   );
};
export default CheckCircle;
