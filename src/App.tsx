import {useState, MouseEvent} from 'react'
import './App.css'

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
                {formType}
            </div>
        </>
    )
}

export default App
