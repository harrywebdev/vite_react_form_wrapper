import {FC} from 'react'
import {z} from "zod";

type FormFoodProps = {
    //
}

export const FormFoodSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    food: z.string(),
    foodType: z.string(),
    foodPrice: z.string(),
})
export type FormFoodSchema = z.infer<typeof FormFoodSchema>

const FormFood: FC<FormFoodProps> = () => {
    return <form>
        <fieldset>
            <legend>Stravnik</legend>
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
            <legend>Jídlo</legend>
            <p>
                <label htmlFor="food">Jídlo:</label>
                <input type="text" id="food" name="food"/>
            </p>
            <p>
                <label htmlFor="foodType">Typ jídla:</label>
                <input type="text" id="foodType" name="foodType"/>
            </p>
            <p>
                <label htmlFor="foodPrice">Cena:</label>
                <input type="text" id="foodPrice" name="foodPrice"/>
            </p>
        </fieldset>

        <button type="submit">Odeslat</button>
    </form>
}

export default FormFood
