import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export const ChatContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #cde1f0;
  }
`;

export const MessageBubble = styled.div<{ sender: "bot" | "user" }>`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 16px;
  margin: 8px 0;
  background: ${(props) => (props.sender === "bot" ? "#f0f0f0" : "#007bff")};
  color: ${(props) => (props.sender === "bot" ? "#333" : "#fff")};
  align-self: ${(props) =>
    props.sender === "bot" ? "flex-start" : "flex-end"};
  margin-left: ${(props) => (props.sender === "bot" ? "0" : "auto")};
  margin-right: ${(props) => (props.sender === "user" ? "0" : "auto")};
  position: relative;
`;

export const InputContainer = styled.div`
  padding: 15px;
  border-top: 1px solid #eee;
  background: white;
  border-radius: 16px;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }

  .rating {
    display: flex;
    justify-content: center;
    gap: 8px;
    font-size: 24px;
    width: 100%;
  }
`;

export const ContainerCurrent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: baseline;
`;
