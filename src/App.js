import { Header, InputTodo, List, TodoWindow, Wrapper } from "components";
// import { useSelector } from "react-redux";
const App = () => {
   //    const todos = useSelector((state) => state.todos.todos);
   //    console.log(todos);
   return (
      <Wrapper>
         <TodoWindow>
            {" "}
            <Header />
            <InputTodo />
            <List />
         </TodoWindow>
      </Wrapper>
   );
};
export default App;
