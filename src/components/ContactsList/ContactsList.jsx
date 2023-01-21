import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  Title,
  List,
  Item,
  Contact,
  Button,
  Warning,
} from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.status);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Title>Contacts 📃</Title>
      {visibleContacts.length ? (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            return (
              <Item key={id}>
                <Contact>
                  {name} {phone}
                </Contact>

                <Button
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                  type="button"
                >
                  ❌
                </Button>
              </Item>
            );
          })}
        </List>
      ) : (
        <Warning>No results...</Warning>
      )}
    </>
  );
};

