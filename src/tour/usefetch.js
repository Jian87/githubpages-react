import React from 'react';

export const useFetch = (url) => {


    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }

    return fetchData;
}