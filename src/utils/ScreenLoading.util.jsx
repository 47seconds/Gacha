import {useEffect, useState} from 'react';

function ScreenLoading(cb) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const response = () => cb;
        if(response) setLoading(false);
    }, []);

  return loading ? (
    <div>
        
    </div>
  ) : response ;
}

export {ScreenLoading}