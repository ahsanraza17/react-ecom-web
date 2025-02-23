import axios from "axios";

const params = {
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_APP_STRAPI_APP_KEY,
    }
};

export const fetchDataFromApi = async (url) => {

    try{
        const {data} = await axios.get(import.meta.env.VITE_APP_DEV_URL + url, params);
        return data;
    }
    catch(error){
        console.log(error)
        return error;
    }
}

export const makePaymentRequest = axios.create({

    baseURL: import.meta.env.VITE_APP_DEV_URL,
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_APP_STRAPI_APP_KEY,
    }
})