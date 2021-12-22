import axios from 'axios'

export const getAPI = (URI) => {

    const url = "http://127.0.0.1:8001/api/" + URI;
    console.log(url)
    // リクエストだけは投げておいて非同期処理は利用する側で
    const result = axios.get(url);
    return  result
};

export default getAPI