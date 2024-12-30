import {useEffect, useState} from 'react';
import apiClient from "./apiClient.jsx";

const useFetchData = ({url}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.get(url)
                setData(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])


    return {data, loading, error};

}

export default useFetchData;
