import { useEffect, useState } from 'react';
import shottieService from '../../service/shottie.service';

function useLatestVideos() {
    const [shotties, setShotties] = useState([]);

    useEffect(() => {
      shottieService.getLatestShotties().then(res => setShotties(res.data));
    }, []);

    return [shotties, setShotties];
}

export default useLatestVideos