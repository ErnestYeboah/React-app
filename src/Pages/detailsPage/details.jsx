import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/detailsCard";

export default function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipesDetails, setRecipesDetails] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );

      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      if (data && data.data.recipe) {
        setRecipesDetails(data.data.recipe);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {loading && <p>loading data! please wait....</p>}
      {error && <p>{error}</p>}
      <h1>Details</h1>
      {recipesDetails && <DetailsCard details={recipesDetails} />}
    </div>
  );
}
