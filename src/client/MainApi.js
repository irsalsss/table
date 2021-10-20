import client from '../utils/ApiClient';

export const getUsers = (additionalParams) => {
  const params = { results: 10, ...additionalParams };
  return client(`https://randomuser.me/api/`, { params });
}