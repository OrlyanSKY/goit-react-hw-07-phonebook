import { useState, useEffect } from 'react';

import { Container } from 'Container.styled';
import { Text } from './ContactForm/ContactForm.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is alredy in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const delContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Text>Find contacts by name</Text>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        delContact={delContact}
      />
    </Container>
  );
};
