import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;

  background: #191414;

  gap: 2rem;

  padding: 1.5rem 2rem;
  border-radius: 8px;
`;

export const AlbumContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid #323238;

  h3 {
    font-size: 3rem;
    text-align: end;
    margin-bottom: -1.2rem;
  }
`;

export const TrackContainer = styled.div`
  flex: 1;
  margin-top: 1rem;
`;

export const TrackContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;

  border-radius: 8px;
  background: transparent;

  &:hover {
    background: #7c7c8a;
  }

  audio {
    appearance: none;
  }
`;

export const TrackInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    a {
      color: #f3f3f3;
      text-decoration: none;
      gap: 1rem;
    };

    a span {
      font-size: 0.85rem;
    };
  }
`;