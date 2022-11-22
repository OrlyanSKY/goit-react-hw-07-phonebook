import { Field } from 'components/ContactForm/ContactForm.styled';

import { addFilterValue } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    return dispatch(addFilterValue(e.target.value));
  };
  return <Field type="text" name="filter" onChange={onChangeFilter} />;
};
