import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "./InputTodo.css";
import { CheckCircle } from "components";
import { add } from "reducers/todos.reducer";

const InputTodo = () => {
   const isDarkTheme = useSelector((state) => state.themeToggle.isDarkTheme);
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
      e.preventDefault();
      const input = e.target[0];
      if (input.value === "") return;
      dispatch(add({ content: input.value }));
      return (input.value = "");
   };
   return (
      <Form onSubmit={(e) => handleSubmit(e)} isDarkTheme={isDarkTheme}>
         <CheckCircle />
         <Input />
      </Form>
   );
};
export default InputTodo;
