import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.dark};
`;
export const StyledForm = styled(Form)`
  width: 280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${({ theme }) => theme.spacing(7)};
  margin: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  background-color: transparent;
  -webkit-transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
  transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
`;
export const Input = styled(Field)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid white;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.spacing(5)};
  background-color: transparent;
  color: white;
  background-color: ${({ theme }) => theme.colors.dark};
  &:focus {
    outline: 1px solid white;
  }
  &:focus + Label,
  &:not(:placeholder-shown) + Label {
    top: -25px;
    font-size: 20px;
  }
`;
export const ErrorMess = styled.p`
  font-size: ${({ theme }) => theme.spacing(3)};
  color: red;
`;

export const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.25s;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #ffa260;
    transform: translateY(-0.25em);
  }
`;
