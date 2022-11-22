import React, { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useAxios = (baseURL, extension) => {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        if (extension) {
            const response = await axios.get(
                `${baseURL}${extension}/`
            );
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        }
        else {

            const response = await axios.get(
                baseURL
            );
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        }

    };

    return [cards, addCard]
}

export default useAxios