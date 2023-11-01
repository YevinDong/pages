import axios from './axios';
export default {
    user: {
        get_user_info: (params?: any) => axios.get('/cert/login', params, 'passport'),
    },
    kv: {
        get: () => {
            axios.get('/api/test/1');
        },
    },
};
