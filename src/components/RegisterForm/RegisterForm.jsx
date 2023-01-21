import { Form, Wrapper, Input, Label, RegTitle, Button } from './RegisterForm.styled';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <RegTitle>Registration</RegTitle>
      <Wrapper>
        <Input type="text" name="name" placeholder=" " required/>
        <Label>Username</Label>
      </Wrapper>
      <Wrapper>
        <Input type="email" name="email" placeholder=" " required/>
        <Label>Email</Label>
      </Wrapper>
      <Wrapper>
        <Input type="password" name="password" placeholder=" " required/>
        <Label>Password</Label>
      </Wrapper>
      <Button type="submit">Register</Button>
    </Form>
  );
};
