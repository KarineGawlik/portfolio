import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 20px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`;

export const Paragrafo = styled.p`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;
