import { useContext } from "react";
import { FeatureContext } from "./context";
import Container from "../expense-tracker/container";
import CarsCategory from "../lesson/cars-category";
import Form from "../form/form";
import { ExpenseGlobalContext } from "../expense-tracker/context";
import FormValidation from "../form/form-validation";
import FormGlobalState from "../lesson/context";

export default function FeatureFlags() {
  const { error, components } = useContext(FeatureContext);

  console.log(components);

  const compoenentsToRender = [
    {
      key: "showForms",
      component: (
        <FormValidation>
          <Form />
        </FormValidation>
      ),
    },
    {
      key: "showCarsCategory",
      component: (
        <FormGlobalState>
          <CarsCategory />
        </FormGlobalState>
      ),
    },
  ];

  function checkBasedOnData(currentkey) {
    return components[currentkey];
  }

  return (
    <>
      <h1>Feature Flags</h1>
      {error && <p>{error}</p>}

      {compoenentsToRender.map((item) =>
        checkBasedOnData(item.key) ? item.component : null
      )}
    </>
  );
}
