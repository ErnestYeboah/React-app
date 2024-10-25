// import { Route, Routes } from "react-router-dom";
// import NavBar from "./Pages/components/navbar";
// import Home from "./Pages/homePage/home";
// import Favorites from "./Pages/favoritesPage/favorites";
// import Details from "./Pages/detailsPage/details";

import RandomGlobalState from "./random/context";
import Hamburger from "./random/hamburger";
import Random from "./random/random";

// import FeatureFlagsGlobalState from "./feature-flags/context";
// import FeatureFlags from "./feature-flags/feature-flags";
// import Circle from "./something/circle";
// import JokeGenerator from "./something/tenzies";
// import Tenzies from "./something/tenzies";

// import Products from "./lesson/apicall/products";
// import Container from "./lesson/card/container";

// import CarsCategory from "./lesson/cars-category";
// import FormGlobalState from "./lesson/context";

// import Form from "./form/form";
// import FormValidation from "./form/form-validation";

function App() {
  return (
    <>
      <RandomGlobalState>
        <Hamburger />
        <Random />
      </RandomGlobalState>
    </>
  );
}

export default App;
