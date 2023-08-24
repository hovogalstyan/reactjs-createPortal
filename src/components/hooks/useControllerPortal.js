import React, {useCallback, useEffect, useRef, useState} from 'react';

const useControllerPortal = () => {
    const [portalOpen, setPortalOpen] = useState(false);
    const [showPortal, setShowPortal] = useState(false);
    const [getResponse, setGetResponse] = useState(null)
    const activeIndex = useRef(null);
    useEffect(() => {
        if (portalOpen) {
            setShowPortal(true)
        }
    }, [portalOpen])

    const openPortal = useCallback((item, index) => () => {
        activeIndex.current = index
        setGetResponse(item)
        setPortalOpen(!portalOpen)
    }, [portalOpen, activeIndex])
    const closePortal = useCallback((event) => {
        if (event.currentTarget === event.target) {
            setGetResponse(null)
                setShowPortal(false)
            activeIndex.current = 0
        }
    }, [activeIndex])
    return {
        showPortal,
        openPortal,
        closePortal,
        getResponse,
        activeIndex
    }
};

export default useControllerPortal;