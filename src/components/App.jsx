import { Section } from './Section';
import { Box } from './Box';
import { Contacts } from './Contacts';
import { PhonebookForm } from './PhonebookForm';
import { Filter } from './Contacts/Filter';

export const App = () => {
  return (
    <Box as="main">
      <Section tittle="Phonebook">
        <PhonebookForm />
      </Section>

      <Section tittle="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </Box>
  );
};
