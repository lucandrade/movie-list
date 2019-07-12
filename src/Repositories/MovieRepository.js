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
}

const instance = new MovieRepository();

export default instance;
