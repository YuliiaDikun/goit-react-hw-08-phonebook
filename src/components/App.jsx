import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

import { fetchTasks } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Container } from './Container/Container.styled';
import { Title } from './Title/Title';
import { LoginForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { InputSearch } from './InputSearch/InputSearch';

export const App = () => {
  const dispatch = useDispatch();
  
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title />
        <LoginForm />

        <InputSearch />
        {isLoading && !error && <b>Request in progress...</b>}
        {!isLoading && <ContactsList />}
        
      </Container>

      <GlobalStyleComponent />
    </ThemeProvider>
  );
};
