import styled from 'styled-components';
export const Title = styled.h2`
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.spacing(10)};
  font-weight: 700;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
`;
export const Item = styled.li`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;
export const Contact = styled.span`
  font-size: ${({ theme }) => theme.spacing(6)};
`;
export const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  font: inherit;
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition: 0.25s;
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #ffa260;
    transform: scale(1.1);
  }
`;

export const Warning = styled.p`
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.spacing(6)};
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;
export const Name = styled.span`
  text-transform: uppercase;
  font-size: 32px;
  margin-right: 40px;
`;
export const Number = styled.span`
  font-size: 32px;
`;
