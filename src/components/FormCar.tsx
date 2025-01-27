import { FC, FormEvent, useEffect, useState } from "react";
import { z } from "zod";

type FormCarProps = {
  onSubmit: (data: FormCarSchema) => Promise<void>;
};

export const FormCarSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  car: z.string(),
  carType: z.string(),
});
export type FormCarSchema = z.infer<typeof FormCarSchema>;

const FormCar: FC<FormCarProps> = ({ onSubmit }) => {
  const [data, setData] = useState<FormCarSchema>({
    fullName: "",
    email: "",
    car: "",
    carType: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    setIsValid(FormCarSchema.safeParse(data).success);
  }, [data]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Ridic</legend>
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
        <legend>Auto</legend>
        <p>
          <label htmlFor="car">Auto:</label>
          <input
            type="text"
            id="car"
            name="car"
            onChange={(event) =>
              setData((data) => ({ ...data, car: event.target.value }))
            }
          />
        </p>
        <p>
          <label htmlFor="carType">Typ auta:</label>
          <input
            type="text"
            id="carType"
            name="carType"
            onChange={(event) =>
              setData((data) => ({ ...data, carType: event.target.value }))
            }
          />
        </p>
      </fieldset>

      <button type="submit" disabled={!isValid}>
        Odeslat
      </button>
    </form>
  );
};

export default FormCar;
