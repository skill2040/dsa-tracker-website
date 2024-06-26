import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dsa-tracker-backend-kappa.vercel.app/home", {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const responseData = await response.json();
            console.log(responseData.data)
            setData(responseData.data);
            setLoading(false);
        } catch (error) {
            console.error('Fetch error:', error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return loading ? null : (
        <DataContext.Provider value={{ data, loading, error, fetchData }}>
            {children}
        </DataContext.Provider>
    );
};
