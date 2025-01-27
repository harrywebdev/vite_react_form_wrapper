import { useState, MouseEvent } from "react";
import "./App.css";
import FormWithAttachments from "./components/FormWithAttachments.tsx";
import FormFood, { FormFoodSchema } from "./components/FormFood.tsx";
import FormCar, { FormCarSchema } from "./components/FormCar.tsx";

function App() {
  const [formType, setFormType] = useState<"food" | "car">("food");

  const handleFormOnClick = (type: "food" | "car") => (event: MouseEvent) => {
    event.preventDefault();
    setFormType(type);
  };

  return (
    <>
      <h1>Form Wrapper</h1>
      <div className={"formTabs"}>
        <a href={"#food"} onClick={handleFormOnClick("food")}>
          FoodForm
        </a>
        |
        <a href={"#car"} onClick={handleFormOnClick("car")}>
          CarForm
        </a>
      </div>

      {formType === "food" ? (
        <FormWithAttachments<FormFoodSchema> hasAttachments>
          {(onSubmit, attachmentsFieldset) => (
            <FormFood onSubmit={onSubmit}>{attachmentsFieldset}</FormFood>
          )}
        </FormWithAttachments>
      ) : null}

      {formType === "car" ? (
        <FormWithAttachments<FormCarSchema> hasAttachments={false}>
          {(onSubmit) => <FormCar onSubmit={onSubmit} />}
        </FormWithAttachments>
      ) : null}
    </>
  );
}

export default App;
