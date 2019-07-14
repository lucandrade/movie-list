import Request from '../Support/Request';

class MovieRepository {
    async listPopular(page = 1) {
        try {
            const response = await Request.get(`/?page=${page}`);
            
            if (!response.data.status) {
                return null;
            }

            return response.data.payload;
        } catch (e) {
            console.error('Error listing movies', e);
        }
        
        return null;
    }

    async search(query, page = 1) {
        try {
            const response = await Request.get(`/search?q=${query}&page=${page}`);
            
            if (!response.data.status) {
                return null;
            }

            return response.data.payload;
        } catch (e) {
            console.error('Error listing movies', e);
        }
        
        return null;
    }

    async get(movieId) {
        try {
            const response = await Request.get(`/get/${movieId}`);
            
            if (!response.data.status) {
                return null;
            }

            return response.data.payload;
        } catch (e) {
            console.error('Error getting movies', e);
        }
        
        return null;
    }
}

const instance = new MovieRepository();

export default instance;
