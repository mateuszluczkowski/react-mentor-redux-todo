import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "./InputTodo.css";
import { CheckCircle } from "components";
import { add } from "reducers/todos.reducer";

const InputTodo = () => {
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
      e.preventDefault();
      const input = e.target[0];
      if (input.value === "") return;
      dispatch(add({ content: input.value }));
      input.value = "";
   };
   return (
      <Form onSubmit={handleSubmit} isDark={isDark}>
         <CheckCircle />
         <Input />
      </Form>
   );
};
export default InputTodo;
