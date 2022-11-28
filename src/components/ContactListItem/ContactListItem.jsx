import { DelBtn, ListItem } from './ContactListItem.styled';
import { ImUserMinus } from 'react-icons/im';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilter);

  const normalizedFilter = filterValue.toLowerCase().trim();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {filteredContacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <DelBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            <ImUserMinus />
          </DelBtn>
        </ListItem>
      ))}
    </>
  );
};
