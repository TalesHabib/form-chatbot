import Chatbot from "./components/Chatbot";
import { BotProvider } from "./hook/bot";
import { FormStateProvider } from "./hook/formState";
import { StepProvider } from "./hook/step";

const App = () => (
  <StepProvider>
    <FormStateProvider>
      <BotProvider>
        <Chatbot />
      </BotProvider>
    </FormStateProvider>
  </StepProvider>
);

export default App;
