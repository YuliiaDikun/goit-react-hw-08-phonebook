import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  Wrapper,
  Input,
  Label,
  RegTitle,
  Button,
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <RegTitle>Log In</RegTitle>
      <Wrapper>
        <Input type="email" name="email" required placeholder=" " />
        <Label>Email</Label>
      </Wrapper>
      <Wrapper>
        <Input type="password" name="password" required placeholder=" " />
        <Label>Password</Label>
      </Wrapper>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
