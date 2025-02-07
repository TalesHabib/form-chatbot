import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
`;

export const TypingIndicator = styled.div`
  padding: 12px 16px;
  background: #f0f0f0;
  border-radius: 16px;
  display: inline-block;
  margin: 8px 0;
  color: #666;
  font-size: 14px;
  animation: ${bounce} 1s infinite ease-in-out;
`;