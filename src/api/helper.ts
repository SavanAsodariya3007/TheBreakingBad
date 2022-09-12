import {create, CancelToken} from 'apisauce';

const apiClient = create({
  baseURL: 'https://www.breakingbadapi.com/api/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const cancelRequestList = {};

export const cancelRequests = (...keys) => {
  keys.forEach(key => {
    if (cancelRequestList[key]) {
      cancelRequestList[key]();
    }
  });
};

const getErrorMessage = response => {
  let errorMessage = response.problem;
  if (errorMessage === 'NETWORK_ERROR') {
    errorMessage = 'Network error';
  } else if (errorMessage === 'TIMEOUT_ERROR') {
    errorMessage = 'Something went wrong. Please try again later';
  } else if (errorMessage === 'SERVER_ERROR') {
    errorMessage = 'Server error';
  }
  return errorMessage;
};

const processResponse = response => {
  const status = response.status === 200;
  const data = response.data;
  return {
    data,
    status,
    message: getErrorMessage(response),
    cancel: response.problem === 'CANCEL_ERROR',
  };
};

export const get = data => {
  const {url, cancelKey, headers, params} = data;
  return apiClient
    .get(url, params, {
      headers,
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
    })
    .then(processResponse);
};

export const put = data => {
  const {url, cancelKey, params, headers} = data;
  return apiClient
    .put(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then(processResponse);
};

export const post = data => {
  const {url, cancelKey, params, headers} = data;
  return apiClient
    .post(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then(processResponse);
};

export const del = pdata => {
  const {url, cancelKey, params, data, headers} = pdata;
  return apiClient
    .delete(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
      data: data,
    })
    .then(processResponse);
};
