import {FC} from 'react'

type FormCarProps = {
    //
}

const FormCar: FC<FormCarProps> = () => {
    return <form>
        <fieldset>
            <legend>Ridic</legend>
            <p>
                <label htmlFor="fullName">Jmeno:</label>
                <input type="text" id="fullName" name="fullName"/>
            </p>
            <p>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"/>
            </p>
        </fieldset>

        <fieldset>
            <legend>Auto</legend>
            <p>
                <label htmlFor="car">Auto:</label>
                <input type="text" id="car" name="car"/>
            </p>
            <p>
                <label htmlFor="carType">Typ auta:</label>
                <input type="text" id="carType" name="carType"/>
            </p>
        </fieldset>

        <button type="submit">Odeslat</button>
    </form>
}

export default FormCar
