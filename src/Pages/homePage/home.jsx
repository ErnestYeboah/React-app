import { useContext } from "react";
import { GlobalContext } from "../context/context";
import RecipesCard from "../components/recipesCard";

export default function Home() {
  const { recipesData } = useContext(GlobalContext);

  return (
    <>
      {!recipesData && (
        <h2 style={{ textAlign: "center" }}>
          Type a food name for its recipes
        </h2>
      )}
      <div className="recipes__card-container">
        {recipesData &&
          recipesData.map((item, index) => (
            <RecipesCard key={index} recipes={item} />
          ))}
      </div>
    </>
  );
}
