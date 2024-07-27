import { axiosInstance } from "../conf/axiosInstance.conf";

export class ShottieService {
    postShottie = async () => {
        try {

        } catch (error) {
            throw error;
        }
    }

    searchShottieByID = async (shottieId) => {
        try {

        } catch (error) {
            throw error;
        }
    }

    getLatestShotties = async () => {
        try {
            const latestShotties = await axiosInstance.get('/video/get-latest-videos');
            if (latestShotties.data.statusCode == 200) {
                return latestShotties.data;
            } else {
                console.log('failed to get latest shotties');
            }
        } catch (error) {
            throw error;
        }
    }
}

const shottieService = new ShottieService();

export default shottieService;