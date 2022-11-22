import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { Container } from 'components/Container.styled';
import { Text } from './ContactForm/ContactForm.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const addNewContact = newContact => {
  //   if (
  //     contacts.find(
  //       ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${newContact.name} is alredy in contacts`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, newContact]);
  // };
  // const delContact = contactId => {
  //   setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  // };

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
