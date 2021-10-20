import axios from 'axios';
import qs from 'qs';

const client = async(endpoint, { body, method, params, additionalConfig, cancelToken } = {}) => {
  const Axios = axios.create();

  let headers = {
    "Content-type": "application/json; charset=UTF-8",
  }

  let config = {
    url: endpoint,
    method,
    cancelToken,
    headers: {
      ...headers
    },
    ...additionalConfig
  }

  if (params){
    config.params = params
    config.method = 'GET'
    config.paramsSerializer = params => {
      return qs.stringify(params, {
        arrayFormat: "brackets",
        encode: true,
        skipNulls: true
      })
    }
  }

  if (body){
    config.data = body
  }

  const onSuccess = (r) => {
    return r
  }

  const onError = (e) => {
    return Promise.reject(e.response)
  }

  return Axios(config)
    .then(onSuccess)
    .catch(onError)
}

export default client;