import { useFormContext } from "react-hook-form";
import { useStep } from "../../hook/step";
import { fieldNames } from "../../utils/bot";
import { ErrorMessage as StyledErrorMessage } from "../../styles/components/ErrorMessage.styles";

export function ErrorMessage() {
  const { step } = useStep();
  const {
    formState: { errors },
  } = useFormContext<Partial<FormData>>();

  const message = errors[fieldNames[step] as keyof FormData]?.message;

  if (!message) return null;

  return <StyledErrorMessage>{message}</StyledErrorMessage>;
}
