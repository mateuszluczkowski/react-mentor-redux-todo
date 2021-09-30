import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "./InputTodo.css";
import { CheckCircle } from "components";
import { add } from "reducers/todos.reducer";

const InputTodo = () => {
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
      e.preventDefault();
      const text = e.target[0].value;
      if (text === "") return;
      e.target[0].value = "";
      dispatch(add({ text: text }));
   };
   return (
      <Form onSubmit={handleSubmit} isDark={isDark}>
         <CheckCircle />
         <Input />
      </Form>
   );
};
export default InputTodo;
