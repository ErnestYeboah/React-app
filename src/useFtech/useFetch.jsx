import { useEffect, useState } from "react";

export default function useFetchApiCall(url, options = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error("Search not found");
      }

      const data = await response.json();
      if (data) {
        setLoading(false);
        setData(data);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return [loading, error, data];
}
