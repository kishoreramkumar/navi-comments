import styled from "styled-components";

const ButtonWrapper = styled.button<any>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};
  padding: 0.3rem 0.75rem;
  font-weight: 600;
  &.normal {
    border: 1.5px solid transparent;
    color: ${({ theme }) => theme?.textLight};
    &.primary {
      background: ${({ theme }) => theme?.primary};
    }
    &.secondary {
      background: ${({ theme }) => theme?.secondary};
    }
    &.error {
      background: ${({ theme }) => theme?.error};
    }
  }
  &.outline {
    background: transparent;

    &.primary {
      color: ${({ theme }) => theme?.primary};
      border: ${({ theme }) => `1.5px solid ${theme?.primary}`};
    }
    &.secondary {
      color: ${({ theme }) => theme?.secondary};
      border: ${({ theme }) => `1.5px solid ${theme?.secondary}`};
    }
    &.error {
      color: ${({ theme }) => theme?.error};
      border: ${({ theme }) => `1.5px solid ${theme?.error}`};
    }
  }
`;

export { ButtonWrapper };
