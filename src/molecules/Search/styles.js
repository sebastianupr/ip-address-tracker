import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`

export const Search = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  background-color: white;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 125px;
  margin-top: 20px;

  position: relative;

  @media (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 65px;
    width: 500px;
    grid-template-columns: 90% 10%;
  }
`;

export const Input = styled.input`
  border: 0;
  border-style: none;
  outline: none;
  font-size: 18px;

  width: 80%;
  padding: 12px 25px;

  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ${({ hasError }) =>
    hasError &&
    `
    border: 2px solid var(--red);
  `}

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export const SearchButton = styled.button`
  background-color: var(--black);
  border-style: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  svg {
    margin-top: 3px;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--red);
  position: absolute;
  margin: 0;
  bottom: 3px;
  right: 55px;
  font-size: 13px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
