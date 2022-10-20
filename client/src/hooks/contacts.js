import axios from 'axios';

export const getAllContacts = async (token) => {
  const contacts = await axios.get('http://localhost:8000/api/contacts', {
    headers: {
      'x-auth-token': token,
    },
  });
  return contacts;
};
