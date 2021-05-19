import apisauce from 'apisauce';

// const TIME_OUT = 150;
// const headers = { 'Cache-Control': 'no-cache' };
const api = apisauce.create({
  baseURL: 'https://api.mocki.io',
  // headers,
  // timeout: TIME_OUT,
});


const getProfile = () => {
  // api.setBaseURL(config.host);
  // api.setHeader('Accept-Language', config.culture);
  return api.get('/v1/b043df5a');
  // return 123;
};

const addUser = (data:any) =>{
  // api.setBaseURL(config.host);
  // api.setHeader('Accept-Language', config.culture);
  // return api.post('/v1/b043df5a');
  localStorage.setItem('data',JSON.stringify(data));
  return api.get('/v1/b043df5a');
}


export default {
  getProfile,
  addUser
}
