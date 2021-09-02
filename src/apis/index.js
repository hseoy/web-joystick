import client from './client';

// eslint-disable-next-line import/prefer-default-export
export const hostNameApi = () => client.get('/hostname');
