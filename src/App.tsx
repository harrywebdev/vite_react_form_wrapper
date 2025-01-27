import {useState, MouseEvent} from 'react'
import './App.css'
import FormFood from "./components/FormFood.tsx";
import FormCar from "./components/FormCar.tsx";

function App() {
    const [formType, setFormType] = useState<"food" | "car">("food")

    const handleFormOnClick = (type: "food" | "car") => (event: MouseEvent) => {
        event.preventDefault()
        setFormType(type)
    }

    return (
        <>
            <h1>Form Wrapper</h1>
            <div className={"formTabs"}>
                <a onClick={handleFormOnClick("food")}>
                    FoodForm
                </a>
                |
                <a onClick={handleFormOnClick("car")}>
                    CarForm
                </a>
            </div>

            <div className="card">
                {formType === "food" ? (<FormFood/>) : <FormCar/>}
            </div>
        </>
    )
}

export default App
