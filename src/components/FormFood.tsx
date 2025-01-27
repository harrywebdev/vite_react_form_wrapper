import { FC, FormEvent, PropsWithChildren, useEffect, useState } from "react";
import { z } from "zod";

type FormFoodProps = PropsWithChildren & {
  onSubmit: (data: FormFoodSchema) => Promise<void>;
};

export const FormFoodSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  food: z.string(),
  foodType: z.string(),
  foodPrice: z.string(),
});
export type FormFoodSchema = z.infer<typeof FormFoodSchema>;

const FormFood: FC<FormFoodProps> = ({ children, onSubmit }) => {
  const [data, setData] = useState<FormFoodSchema>({
    fullName: "",
    email: "",
    food: "",
    foodType: "",
    foodPrice: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    setIsValid(FormFoodSchema.safeParse(data).success);
  }, [data]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Stravnik</legend>
        <p>
          <label htmlFor="fullName">Jmeno:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={(event) =>
              setData((data) => ({ ...data, fullName: event.target.value }))
            }
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(event) =>
              setData((data) => ({ ...data, email: event.target.value }))
            }
          />
        </p>
      </fieldset>

      <fieldset>
        <legend>Jídlo</legend>
        <p>
          <label htmlFor="food">Jídlo:</label>
          <input
            type="text"
            id="food"
            name="food"
            onChange={(event) =>
              setData((data) => ({ ...data, food: event.target.value }))
            }
          />
        </p>
        <p>
          <label htmlFor="foodType">Typ jídla:</label>
          <input
            type="text"
            id="foodType"
            name="foodType"
            onChange={(event) =>
              setData((data) => ({ ...data, foodType: event.target.value }))
            }
          />
        </p>
        <p>
          <label htmlFor="foodPrice">Cena:</label>
          <input
            type="text"
            id="foodPrice"
            name="foodPrice"
            onChange={(event) =>
              setData((data) => ({ ...data, foodPrice: event.target.value }))
            }
          />
        </p>
      </fieldset>

      {children}

      <button type="submit" disabled={!isValid}>
        Odeslat
      </button>
    </form>
  );
};

export default FormFood;
