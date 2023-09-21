import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { options } from "../utils/Constants";

export const YoutubeContext = createContext();


export const YoutubeProvider = ({ children }) => {

    // Kategori verileri 
    const [selectedCategory, setSelectedCategory] = useState({
        name: "New",
        type: "category"
    });

    // Videolar
    const [videos, setVideos] = useState(null);


    useEffect(() => {
        setVideos(null);
        if (selectedCategory.type === "category") {
              fetchCategory(selectedCategory.name);
        }

    }, [selectedCategory]);

    const fetchCategory = (category) => {
        axios.get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
            .then((response) => setVideos(response.data.contents))
            .catch((err) => console.log(err));
    }

    return (
        <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, videos }}>
            {children}
        </YoutubeContext.Provider>
    );
}
