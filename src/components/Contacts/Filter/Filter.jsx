import { FormLabel } from 'components/PhonebookForm/FormInput';
import { Input } from './Filter.styled';
import { handleFilter } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const { filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onInputChange = e =>
    dispatch(handleFilter({ query: e.target.value.toLowerCase() }));

  return (
    <label>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
        type="text"
        name="filter"
        value={filter.query}
        onChange={onInputChange}
      ></Input>
    </label>
  );
};
