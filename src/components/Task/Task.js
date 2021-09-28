import { Wrapper } from "./Task.css";
import { CheckCircle } from "components";

const Task = ({ text, isChecked, id }) => {
   return (
      <Wrapper isChecked={isChecked}>
         <CheckCircle id={id} isChecked={isChecked} />
         {text}
      </Wrapper>
   );
};
export default Task;
