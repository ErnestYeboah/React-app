/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../components/uselLocalStorage";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipesData, setRecipesData] = useState("");
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  const navigate = useNavigate();

  async function fetchFoodRecipesData(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}`
      );
      const data = await response.json();
      if (!response.ok) throw new Error(response.statusText);

      if (data && data.data.recipes) {
        setRecipesData(data.data.recipes);
        setLoading(false);
        setSearchInput("");
        navigate("/");
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  function saveToFavorites(currentDetailsCard) {
    const cpyFavorites = [...favorites];
    const index = favorites.findIndex(
      (item) => item.id === currentDetailsCard.id
    );

    if (index === -1) {
      cpyFavorites.push(currentDetailsCard);
    } else {
      cpyFavorites.splice(index);
    }
    setFavorites(cpyFavorites);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchInput,
        recipesData,
        loading,
        error,
        setSearchInput,
        fetchFoodRecipesData,
        saveToFavorites,
        favorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
