import { useFormContext } from "react-hook-form";
import { fetchCitiesStep, useBot } from "../../hook/bot";
import { useStep } from "../../hook/step";
import { Input } from "../../styles/components/Input.styles";
import { fieldNames, getInputPlaceholder } from "../../utils/bot";
import { FormData } from "../../types/form.type";
import { ErrorMessage } from "../ErrorMessage";

export function CitySuggestions() {
  const { citySuggestions } = useBot();
  const { step } = useStep();
  const { register } = useFormContext<Partial<FormData>>();

  return (
    <>
      <Input
        {...register(fieldNames[step] as keyof FormData)}
        placeholder={getInputPlaceholder(step)}
        list="city-suggestions"
      />
      <datalist id="city-suggestions">
        {citySuggestions.map((city, index) => (
          <option key={index} value={city} />
        ))}
      </datalist>
      <ErrorMessage />
    </>
  );
}

CitySuggestions.index = fetchCitiesStep;
