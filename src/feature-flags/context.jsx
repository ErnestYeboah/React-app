/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "./data";

export const FeatureContext = createContext();

export default function FeatureFlagsGlobalState({ children }) {
  const [error, setError] = useState("");
  const [components, setComponents] = useState("");

  async function fetchComponents() {
    try {
      const response = await featureFlagsDataServiceCall();
      setComponents(response);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    fetchComponents();
  }, []);

  return (
    <FeatureContext.Provider value={{ error, components }}>
      {children}
    </FeatureContext.Provider>
  );
}
