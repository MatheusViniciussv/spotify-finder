import styled from 'styled-components'

export const Loader = styled.div`
  border: 6px solid #1db954;
  border-top: 6px solid #191414;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;