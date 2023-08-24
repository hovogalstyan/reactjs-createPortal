import React, {useCallback, useEffect, useMemo, useState} from 'react';

const useScrollAddLimits = (response, defaultLimit) => {
    const [limit, setLimit] = useState(defaultLimit);
    const sliceData = useMemo(() => {
        return response && response.slice(0, limit)
    }, [limit, response]);
    const handleScroll = useCallback(() => {
        if (response.length > sliceData.length) {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            setTimeout(() => {
                setLimit(limit => limit + limit)
            }, 300)
        }
    }, [response, sliceData])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll])
    return {
        sliceData,
    }
};

export default useScrollAddLimits;