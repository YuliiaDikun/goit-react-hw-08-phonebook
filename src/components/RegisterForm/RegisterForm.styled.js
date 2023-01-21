import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;
export const RegTitle = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 32px;
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;
  background: transparent;
  &:focus + Label,
  &:not(:placeholder-shown) + Label {
    top: -25px;
    font-size: 20px;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  pointer-events: none;
  transition: 0.5s;
`;
export const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  font: inherit;
  border-radius: 4px;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.25s;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #ffa260;
    transform: translateY(-0.25em);
  }
`;
