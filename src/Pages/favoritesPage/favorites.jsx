import { useContext } from "react";
import { GlobalContext } from "../context/context";
import RecipesCard from "../components/recipesCard";

export default function Favorites() {
  const { favorites } = useContext(GlobalContext);
  console.log(favorites);

  return (
    <div>
      <h1>Favorites</h1>
      <div className="recipes__card-container">
        {favorites &&
          favorites.map((item, index) => (
            <RecipesCard key={index} recipes={item} />
          ))}
      </div>
    </div>
  );
}
