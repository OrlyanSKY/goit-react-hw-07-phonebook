import { DelBtn, ListItem } from './ContactListItem.styled';
import { ImUserMinus } from 'react-icons/im';
import CircleLoader from 'react-spinners/CircleLoader';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleContacts,
  selectLoading,
  selectError,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactListItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      {contacts.map(({ name, id, phone }) => (
        <ListItem key={id}>
          {name}: {phone}
          <DelBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            {isLoading && !error ? (
              <CircleLoader color="rgba(0, 0, 0, 0.4)" size={15} />
            ) : (
              <ImUserMinus />
            )}
          </DelBtn>
        </ListItem>
      ))}
    </>
  );
};
