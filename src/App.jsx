// import { Route, Routes } from "react-router-dom";
// import NavBar from "./Pages/components/navbar";
// import Home from "./Pages/homePage/home";
// import Favorites from "./Pages/favoritesPage/favorites";
// import Details from "./Pages/detailsPage/details";

import Container from "./expense-tracker/container";
import ExpenseGlobalState from "./expense-tracker/context/context";

function App() {
  return (
    <>
      <ExpenseGlobalState>
        <Container />
      </ExpenseGlobalState>
    </>
  );
}

export default App;
