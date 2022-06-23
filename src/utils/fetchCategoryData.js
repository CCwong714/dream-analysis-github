import axios from 'axios';
import { API_BASE_URL } from './index';

// Example response: {cat, content, image, total}
const fetchCategoryData = (languageCode, update) => {
  axios
    .get(`${API_BASE_URL}/cat/${languageCode}`)
    .then((res) => update(res.data));
};

export default fetchCategoryData;
