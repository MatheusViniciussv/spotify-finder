import styled from 'styled-components'

export const Container = styled.div`
  summary::marker {
    display: flex;
    justify-content: flex-end;
    right: 100;
  }

  padding: 2rem;
  flex: 1;

  width: 56rem;
  min-width: 4rem;

  background: #191414;

  border-radius: 8px;

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 2rem rgba(33, 33, 33, 10.5);
  }
`;

export const Content = styled.div`
  display: flex;

  min-height: 4rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  div + div {
    display: flex;
    height: 4rem;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

  div + div button a {
    text-decoration: none;
    color: #f8f8f8;
    font-size: 0.85rem;
  }
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  background: #1db954;
  text-decoration: none;
  color: #f8f8f8;
  border: 0;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #1aa608;
  }
`;

export const Info = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-left: 1rem;

  div > span {
    font-size: 0.8rem;
  }

  & > span {
    font-size: 0.85rem;
    color: #c4c4cc;
  }
`;

export const Artists = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    color: #8d8d99;
     text-decoration: none
  }

  span {
    font-size: 0.85rem;
  }
`;