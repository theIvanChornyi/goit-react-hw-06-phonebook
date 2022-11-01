import { FiDelete } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { ContactItem, DeleteBtn } from './Contacts.styled';
import { removeContact } from 'redux/contactsSlice';
import { useEffect, useState } from 'react';

export const Contacts = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const [arr, setArr] = useState(contacts);

  useEffect(() => {
    const filtredArr = [...contacts].filter(contact => {
      return contact.name.toLowerCase().includes(filter.query);
    });
    setArr(filtredArr);
  }, [contacts, filter]);

  const dispatch = useDispatch();

  return (
    <ul>
      {arr.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <div>
            <span>{name}: </span>
            <span>{number}</span>
          </div>
          <DeleteBtn
            type="button"
            onClick={() => {
              dispatch(removeContact(id));
            }}
          >
            <FiDelete width={32} height={32} />
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
