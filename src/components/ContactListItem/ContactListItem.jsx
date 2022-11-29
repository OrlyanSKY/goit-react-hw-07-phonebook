import { DelBtn, ListItem } from './ContactListItem.styled';
import { ImUserMinus } from 'react-icons/im';

import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.map(({ name, id, phone }) => (
        <ListItem key={id}>
          {name}: {phone}
          <DelBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            <ImUserMinus />
          </DelBtn>
        </ListItem>
      ))}
    </>
  );
};
