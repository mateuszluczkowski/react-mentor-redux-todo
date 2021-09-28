import { CheckIcon, Circle } from "./CheckCircle.css";
import { useDispatch } from "react-redux";
import { check } from "reducers/todos.reducer";
const CheckCircle = ({ id, isChecked }) => {
   const dispatch = useDispatch();
   const handleClick = () => dispatch(check({ id }));
   console.log(id);
   return (
      <Circle onClick={handleClick} isChecked={isChecked}>
         {isChecked ? <CheckIcon /> : null}
      </Circle>
   );
};
export default CheckCircle;
