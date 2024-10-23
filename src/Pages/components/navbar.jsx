import { NavLink } from "react-router-dom";
import "./component.css";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function NavBar() {
  const { searchInput, setSearchInput, loading, error, fetchFoodRecipesData } =
    useContext(GlobalContext);

  return (
    <>
      <nav>
        <h3>Food Recipe</h3>
        <form onSubmit={fetchFoodRecipesData}>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            value={searchInput}
            placeholder="Search something..."
          />
        </form>

        <div className="nav__links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/favorites"}>Favorites</NavLink>
          <NavLink to={"/recipe-item/:id"}>Details</NavLink>
        </div>
      </nav>
      {loading && <p>loading data! please wait...</p>}
      {error && <p>{error}</p>}
    </>
  );
}
