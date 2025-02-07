import {
  ChatContainer,
  Container,
  MessageBubble,
} from "../../styles/components/Container.styles";
import { TypingIndicator } from "../../styles/components/TypingIndicator";
import { useStep } from "../../hook/step";
import { useBot } from "../../hook/bot";
import { UserInput } from "../UserInput";

export const lastStep = 4;

const Chatbot: React.FC = () => {
  const { step } = useStep();

  const { isTyping, messages } = useBot();

  return (
    <Container key={step}>
      <ChatContainer>
        <div className="messages">
          {messages.map((message, index) => (
            <MessageBubble key={index} sender={message.sender} className="message-bubble">
              {message.text}
            </MessageBubble>
          ))}
          {isTyping && (
            <TypingIndicator>Chatnilson está digitando...</TypingIndicator>
          )}
          <UserInput />
        </div>
      </ChatContainer>
    </Container>
  );
};

export default Chatbot;
