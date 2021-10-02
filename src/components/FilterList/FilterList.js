import { useSelector, useDispatch } from "react-redux";
import { Wrapper, ListItem } from "./FilterList.css";
import { setFilter } from "reducers/todos.reducer";
const FilterList = () => {
   const dispatch = useDispatch();
   const isDark = useSelector((state) => state.themeToggle.isDark);
   const currentFilter = useSelector((state) => state.todos.filter);
   const handleFilterClick = (e, filter) => {
      e.target.classList.add("active");
      dispatch(setFilter({ filter }));
   };
   return (
      <Wrapper isDark={isDark}>
         <ListItem
            active={currentFilter === "all"}
            onClick={(e) => handleFilterClick(e, "all")}
         >
            All
         </ListItem>
         <ListItem
            active={currentFilter === "active"}
            onClick={(e) => handleFilterClick(e, "active")}
         >
            Active
         </ListItem>
         <ListItem
            active={currentFilter === "completed"}
            onClick={(e) => handleFilterClick(e, "completed")}
         >
            Completed
         </ListItem>
      </Wrapper>
   );
};
export default FilterList;
