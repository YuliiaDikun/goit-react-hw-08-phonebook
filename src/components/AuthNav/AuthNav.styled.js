import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavDiv = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  font-size: 24px;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  font-weight: 700;
  padding: 16px;
  position: relative;
  &.active::after {
    color: white;
    content: '';
    width: 100%;
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: white;
  }
`;
