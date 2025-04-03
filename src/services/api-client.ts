import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '8bf535874921495e9ab8745bbb47b304'
    }
})