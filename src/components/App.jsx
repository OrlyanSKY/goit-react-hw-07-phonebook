import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';

import { Container } from 'components/Container.styled';
import { Text } from './ContactForm/ContactForm.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Text>Find contacts by name</Text>
      <Filter />
      <ContactList />
    </Container>
  );
};
