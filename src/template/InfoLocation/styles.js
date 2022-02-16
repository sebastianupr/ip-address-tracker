import styled from 'styled-components';

export const InfoLocation = styled.div`
  border-radius: 10px;
  background-color: white;
  z-index: 1000;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 300px;

  h6 {
    color: var(--dark);
    margin: 5px 0;
  }

  h4 {
    margin: 0;
  }

  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: -110px;
  margin-bottom: -168px;

  position: absolute;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    width: 700px;
    padding: 10px 20px;
    margin-top: -58px;
    margin-bottom: -55px;

    text-align: left !important;
    justify-content: left;

    h4,
    h6,
    p {
      text-align: left;
    }
  }
`;

export const InfoLocationSection = styled.div`
  margin: 12px 0;

  @media (min-width: 768px) {
    padding: 3px 0 0 15px;

    ${(props) =>
      props.border &&
      `
    border: 1px solid var(--dark);
    border-top: 0;
    border-bottom: 0;
  `}

    ${(props) => props.borderRight && `border-right: none;`}
  }
`;
