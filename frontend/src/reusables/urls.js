const BASE_URL = 'http://localhost:8080';


export const API_URL = (slug) => `${BASE_URL}/${slug}`;
export const USER_URL = (slug) => `${BASE_URL}/users/myinformation/:${slug}`;
