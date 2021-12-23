import axios from 'axios'

const baseurl = "http://127.0.0.1:8001/api/"

export const getAPI = (URI) => {

    const url = baseurl + URI;
    console.log(url)
    // リクエストだけは投げておいて非同期処理は利用する側で
    const result = axios.get(url);
    return  result
};

export const postAPI = (URI,data) => {

    const url = baseurl + URI;
    console.log(url)
    // リクエストだけは投げておいて非同期処理は利用する側で
    const result = axios.post(url,data);
    return  result
}

export default getAPI