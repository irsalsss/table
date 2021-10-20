import client from '../utils/ApiClient';

export const getUsers = (additionalParams) => {
  const params = { ...additionalParams, results: 10 };
  return client(`https://randomuser.me/api/`, { params });
}