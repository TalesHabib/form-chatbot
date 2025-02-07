import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { FormData, Message, Sender, BotContextType } from "../types/form.type";
import { greetingMessage } from "../utils/bot";
import { useFormContext } from "react-hook-form";
import { useStep } from "./step";
import { fetchCities } from "../api/services/getCompleteCities";
import { httpClient } from "../api/httpClient";

const BotContext = createContext<BotContextType>({} as BotContextType);

export const useBot = () => useContext(BotContext);

const initialState: Message[] = [
  {
    text: greetingMessage,
    sender: Sender.BOT,
  },
];

export const fetchCitiesStep = 1;

export function BotProvider({ children }: PropsWithChildren) {
  const [messages, setMessages] = useState(initialState);
  const { step, goNext } = useStep();

  const [isTyping, setIsTyping] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);

  const addMessage = (text: string, sender: Sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const simulateBotTyping = async (message: string) => {
    goNext();
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsTyping(false);
    addMessage(message, Sender.BOT);
  };
  const { watch, getValues } = useFormContext<Partial<FormData>>();

  const save = async () => {
    const formData = getValues();
    try {
      await httpClient.post("http://localhost:3001/api/submit", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    goNext();
  };

  const watchCity = watch("city");

  useEffect(() => {
    if (step === fetchCitiesStep && watchCity) {
      const fetchCitiesHandler = async () => {
        const suggestions = await fetchCities(watchCity);

        setCitySuggestions(suggestions);
      };

      fetchCitiesHandler();
    }
  }, [watchCity, step]);

  const provider = {
    isTyping,
    citySuggestions,
    addMessage,
    simulateBotTyping,
    messages,
    save,
  };

  return <BotContext.Provider value={provider}>{children}</BotContext.Provider>;
}
