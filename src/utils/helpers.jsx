import axios from "axios";
import { options } from "./Constants";

axios.defaults.baseURL="https://youtube138.p.rapidapi.com/video";

export const getData= async(url)=>{
    const response=await axios.get(url,options);
    return response.data;
}