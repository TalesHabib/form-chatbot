import { createContext, PropsWithChildren, useContext, useState } from "react";
import { StepContextType } from "../types/form.type";
import { Name } from "../components/Name";
import { CitySuggestions } from "../components/CitySuggestions";
import { DatePicker } from "../components/DatePicker";
import { Email } from "../components/Email";
import { Rating } from "../components/Rating";

const StepContext = createContext<StepContextType>({} as StepContextType);

export const useStep = () => useContext(StepContext);

export const steps = [Name, CitySuggestions, DatePicker, Email, Rating];

export function StepProvider({ children }: PropsWithChildren) {
  const [step, setStep] = useState(0);

  const goNext = (step?: number) => {
    setStep((prev) => step ?? prev + 1);
  };
  const goBack = (step?: number) => setStep((prev) => step ?? prev - 1);

  const provider = {
    step,
    goNext,
    goBack,
    setStep,
  };

  return (
    <StepContext.Provider value={provider}>{children}</StepContext.Provider>
  );
}
