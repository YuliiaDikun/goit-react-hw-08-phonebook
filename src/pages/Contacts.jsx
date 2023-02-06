import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { LoginForm } from 'components/Form/Form';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors'; 

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <LoginForm />
      <div style={{
        textAling: 'center'
      }}>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}