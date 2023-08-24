import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { options } from "../utils/Constants";

export const YoutubeContext = createContext();


export const YoutubeProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState({ name: "New", 
    type: "category" });
    
    useEffect(() => {
       if(selectedCategory.type !== "menu"){
        //  fetchCategory(selectedCategory.name);
       }

    },[selectedCategory]);

    const fetchCategory=(category)=>{
        axios.get(`https://youtube138.p.rapidapi.com/search/?q=${category}`,options)
       .then((response) =>console.log(response))
    }

    return (
        <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </YoutubeContext.Provider>
        );
}
