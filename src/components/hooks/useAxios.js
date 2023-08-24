import React, {useEffect, useState} from 'react';
import axios from "axios";

const useAxios = (url) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchData = async (url) => {
        try {
            setLoading(true)
            const {data} = await axios.get(url)
            setResponse(data)
        } catch (e) {
            setError(e)
            setResponse(null)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
         fetchData(url)
    }, [url])
    return {
        response,
        loading,
        error
    }
};

export default useAxios;