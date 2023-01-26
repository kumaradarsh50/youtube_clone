import axios from 'axios';

// url: 'https://youtube-v31.p.rapidapi.com/search'
// 'X-RapidAPI-Key': '30261cf035msh001222fcd66cd5bp1baf37jsn36e787aa8a01',
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
