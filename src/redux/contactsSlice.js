import { createSlice } from '@reduxjs/toolkit';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Anatolich Rabota', number: '459-12-56' },
  { id: 'id-2', name: 'Hozyain Arkadia', number: '443-89-12' },
  { id: 'id-3', name: 'Razvodnyak zvonyat iz banka', number: '645-17-79' },
  { id: 'id-4', name: 'Babushka', number: '227-91-26' },
  { id: 'id-5', name: "Ne brat'!!!", number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: INITIAL_CONTACTS,
    filter: { query: '' },
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    handleFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, handleFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;
