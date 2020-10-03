const createUrl = (pathname) => `http://localhost:3001${pathname}`;

const rj = (message) => Promise.reject({ message });
const rs = (data) => Promise.resolve({ data });

const get = async (url, { headers: { authorization: token = null } = {} } = {}) => {
  if (!token) return rj({ message: 'No token' });
  switch (url) {
    case createUrl('/products'): return rs({ products: [] });
    default: return rj('no url on mock');
  }
};

const post = async (url, body, { headers: { authorization: token = null } = {} } = {}) => {
  if (!token) {
    switch (url) {
      case createUrl('/user/login'): return rs({ ...body, token: 'jfaj3u0rud0cjawu0ur3q32r' });
      default: return rj('no url on mock');
    }
  }
};

export default {
  get,
  post,
};
