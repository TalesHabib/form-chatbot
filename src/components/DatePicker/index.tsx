import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/form.type";
import { fieldNames, getInputPlaceholder } from "../../utils/bot";
import { useStep } from "../../hook/step";
import { Input } from "../../styles/components/Input.styles";
import { ErrorMessage } from "../ErrorMessage";

export function DatePicker() {
  const { step } = useStep();
  const { register } = useFormContext<Partial<FormData>>();

  return (
    <>
      <Input
        {...register(fieldNames[step] as keyof FormData)}
        placeholder={getInputPlaceholder(step)}
        datatype=""
        type="date"
      />
      <ErrorMessage />
    </>
  );
}

DatePicker.index = 2;
