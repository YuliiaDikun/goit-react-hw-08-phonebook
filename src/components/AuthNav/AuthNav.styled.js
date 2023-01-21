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
  &.active {
    color: #03e9f4;
  }
`;
