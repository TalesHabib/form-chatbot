import { useFormContext } from "react-hook-form";
import { Input } from "../../styles/components/Input.styles";
import { fieldNames, getInputPlaceholder } from "../../utils/bot";
import { useStep } from "../../hook/step";
import { FormData } from "../../types/form.type";
import { ErrorMessage } from "../ErrorMessage";

export function Email() {
  const { step } = useStep();
  const { register } = useFormContext<Partial<FormData>>();

  return (
    <>
      <Input
        {...register(fieldNames[step] as keyof FormData)}
        placeholder={getInputPlaceholder(step)}
        type="email"
      />
      <ErrorMessage />
    </>
  );
}

Email.index = 3;
