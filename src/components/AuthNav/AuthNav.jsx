
import { NavDiv, StyledLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <NavDiv>
      <StyledLink  to="/register">
        Register
      </StyledLink>
      <StyledLink  to="/login">
        Log In
      </StyledLink>
    </NavDiv>
  );
};