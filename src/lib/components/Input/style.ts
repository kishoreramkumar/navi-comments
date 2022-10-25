import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 0.6rem;
`;

const InputTag = styled.input`
  background: ${({ theme }) => theme?.body};
  color: ${({ theme }) => theme?.text};
  border: 1px solid;
  border-color: ${({ theme }) => theme?.dark};
  padding: 0.5rem;
  border-radius: 5px;
  resize: none;
  &:focus {
    border-color: ${({ theme }) => theme?.primary};
    outline: none;
  }
`;

export { InputWrapper, InputLabel, InputTag };
