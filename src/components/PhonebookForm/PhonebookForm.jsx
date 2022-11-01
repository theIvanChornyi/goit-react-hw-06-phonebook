import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { schema } from './validationSchema';
import { FormInput } from './FormInput';
import { Box } from 'components/Box';
import { AddBtn } from './PhonebookForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';

export const PhonebookForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const toastName = useRef(null);
  const toastNumber = useRef(null);
  const dispatch = useDispatch();

  const checkUniqContactName = name => {
    const isIncludes = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return isIncludes;
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (checkUniqContactName(name)) {
      toast.error(`${name} is already in contacts`, {
        autoClose: false,
      });
    } else {
      resetForm();
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      dispatch(addContact(newContact));
      toast.dismiss();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnBlur={true}
        validateOnChange={false}
        validateOnMount={false}
      >
        {({ errors, touched, isValidating, values }) => {
          if (
            !isValidating &&
            touched.name &&
            !toast.isActive(toastName.current) &&
            values.name !== ''
          ) {
            toastName.current = toast.warn(errors?.name, {
              autoClose: false,
            });
          } else if (!errors?.name) {
            toast.dismiss(toastName.current);
          }

          if (
            !isValidating &&
            touched.number &&
            !toast.isActive(toastNumber.current) &&
            values.number !== ''
          ) {
            toastNumber.current = toast.warn(errors?.number, {
              autoClose: false,
            });
          } else if (!errors?.number) {
            toast.dismiss(toastNumber.current);
          }

          return (
            <Box autoComplete="off" pt={2} position="relative" as={Form}>
              <FormInput inputType="text" formName="name" />
              <FormInput inputType="tel" formName="number" />
              <AddBtn type="submit">Add contact</AddBtn>
            </Box>
          );
        }}
      </Formik>
      <ToastContainer limit={2} position="top-left" />
    </>
  );
};
