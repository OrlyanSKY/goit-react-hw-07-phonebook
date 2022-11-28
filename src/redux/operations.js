import axios from 'axios';

axios.defaults.baseURL = 'https://637fe7848efcfcedacf9b0a3.mockapi.io/api/v1/';

const postContact = () => async dispatch => {
  try {
    const response = await axios.post('/contacts');
  } catch (error) {
    console.log(error);
  }
};
