import { useBot } from "../../hook/bot";
import { useStep } from "../../hook/step";
import { Rating } from "../Rating";
import { FaPlay } from "react-icons/fa";
import { Button } from "../../styles/components/Button.styles";
import { ContainerButton } from "../../styles/components/Container.styles";

export function SubmitBtn() {
  const { step } = useStep();
  const { simulateBotTyping, save } = useBot();

  if (step === Rating.index)
    return (
      <Button
        type="button"
        onClick={async () => {
          await simulateBotTyping(
            "Obrigado pela avaliação! Foi ótimo conversar com você."
          );
          await save();
        }}
      >
        Salvar
      </Button>
    );

  return (
    <ContainerButton>
      <Button type="submit"><FaPlay /></Button>
    </ContainerButton>
  )
}
