import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../assets/Images/pattern-bg.png';

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

export const LinkTitle = styled(Link)`
  cursor: pointer;
  color: var(--white);
`;
