import styled from 'styled-components'

export const Input = styled.input`
  height: 2rem;
  width: 40rem;

  padding: 2rem 1.5rem;
  border-radius: 8px;
  border: 3px solid transparent;
  outline: none;

  background: #e1e1e6;

  color: #323238;

  &::placeholder {
    color: #8d8d99;
  }

  &:focus {
    border: 3px solid #1db954;
  }
`;