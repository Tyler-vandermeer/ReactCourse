import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xetULUTsqlLx1WljjRFkb-LZPJP2ohuUZ6GsxXLRTQg'
    }
});