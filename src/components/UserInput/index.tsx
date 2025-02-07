import { useFormContext } from "react-hook-form";
import { steps, useStep } from "../../hook/step";
import { ContainerCurrent, InputContainer } from "../../styles/components/Container.styles";
import { DatePicker } from "../DatePicker";
import { SubmitBtn } from "../SubmitBtn";
import { getBotResponse, getCurrentValidationSchema } from "../../utils/bot";
import { FormData, Sender } from "../../types/form.type";
import { useBot } from "../../hook/bot";
import { lastStep } from "../Chatbot";

export function UserInput() {
  const { step } = useStep();

  const { addMessage, isTyping, simulateBotTyping } = useBot();

  const { handleSubmit, getValues, setValue } =
    useFormContext<Partial<FormData>>();

  const onSubmit = async (data: Partial<FormData>) => {
    const currentField = Object.keys(
      getCurrentValidationSchema(step).fields
    )[0];
    let currentValue = data[currentField as keyof FormData];

    if (step === DatePicker.index) {
      currentValue = new Date(currentValue as string).toLocaleDateString();
    }

    setValue(currentField as keyof FormData, currentValue);
    if (currentValue) addMessage(currentValue?.toString() || "", Sender.USER);

    const updatedFormData = getValues();

    if (step < lastStep) {
      const nextMessage = getBotResponse(step + 1, updatedFormData);
      await simulateBotTyping(nextMessage);
    }
  };

  const Current = steps[step];

  return (
    <>
      {step <= lastStep && !isTyping && (
        <InputContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ContainerCurrent>
              <Current />
            </ContainerCurrent>
            <SubmitBtn />
          </form>
        </InputContainer>
      )}
    </>
  );
}
