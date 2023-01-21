import styled from 'styled-components';
export const NavDiv = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`;
export const LogOutButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  font: inherit;
  border-radius: 4px;
  line-height: 1;
  margin: 0.5em;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.25s;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #ffa260;
    transform: translateY(-0.25em);
  }
`;
