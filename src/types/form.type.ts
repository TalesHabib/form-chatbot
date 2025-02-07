export interface Message {
  text: string;
  sender: 'bot' | 'user';
};

export interface FormData {
  fullName: string;
  city: string;
  birthDate: Date;
  email: string;
  rating: number;
};

export enum Sender {
  BOT = 'bot',
  USER = 'user'
}

export interface StepContextType {
  step: number;
  goNext: (step?:number) => void;
  goBack: (step?:number) => void;
}

export interface BotContextType {
  isTyping: boolean;
  citySuggestions: string[];
  addMessage: (text: string, sender: Sender) => void;
  simulateBotTyping: (message: string) => Promise<void>;
  messages: Message[];
  save: () => Promise<void>;
}