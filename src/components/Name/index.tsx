import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/form.type";
import { Input } from "../../styles/components/Input.styles";
import { useStep } from "../../hook/step";
import { ErrorMessage } from "../ErrorMessage";
import { fieldNames, getInputPlaceholder } from "../../utils/bot";

export function Name() {
  const { step } = useStep();
  const { register } = useFormContext<Partial<FormData>>();

  return (
    <>
      <Input
        {...register(fieldNames[step] as keyof FormData)}
        placeholder={getInputPlaceholder(step)}
      />
      <ErrorMessage />
    </>
  );
}

Name.index = 0;
