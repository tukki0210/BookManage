import axios from 'axios'

const baseurl = "http://127.0.0.1:8001/api/"

export const getAPI = async (URI) => {

    try {
        const url = baseurl + URI;
        const response = await axios.get(url);
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