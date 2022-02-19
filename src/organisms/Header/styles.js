import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import image from 'assets/Images/pattern-bg.png';

export const Header = styled.header`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 15px 5px;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
`

export const Link = styled(RouterLink)`
  cursor: pointer;
  color: var(--white);

  h3 {
    margin: 0;
    margin-top: 0.7rem;
  }
`;
