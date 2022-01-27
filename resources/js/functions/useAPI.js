import axios from 'axios'
import { baseurl } from '../constants'


export const getAPI = async (URI,token = '') => {

    try {
        const url = baseurl + URI;
        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error)
    }
};

export const postAPI = async (URI, data) => {

    try {
        const url = baseurl + URI;
        console.log(url)
        const response = await axios.post(url, data);
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export default getAPI