import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  color: white;
  font-weight: 700;
  padding: 16px;
  position: relative;
  &.active::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 15px;
    left: 0;
    height: 1px;
    background-color: white;
  }
`;
