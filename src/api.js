import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get(
        'https://api.unsplash.com/search/photos', {
            headers: {
              Authorization: 'Client-ID XXMAm1FaCxPqS2tPQ_WY93nyegsmGUpzpb2qAueS4Qo'
            },
            params: {
              query: term
            }
        }
    );

    return response.data.results;
}

export default searchImages;