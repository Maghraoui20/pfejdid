import axios from 'axios';

const url = 'http://localhost:5010/categorie';
const url1 = 'http://localhost:5010/categorie/categories';


export const fetchcategorie = () => axios.get(url);


export const fetchcategories = (userid) => axios.get(url1, {
    params: { userid}
  });