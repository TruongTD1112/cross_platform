import axios from 'axios'
import { stringify } from 'querystring'
import {API_URL} from './Constance'
export const CallApi = async (path, method, header, body, ObjectCancelAxios = {}) => {
    const CancelToken = axios.CancelToken
    
    const serverDomain = API_URL
    try {
        return axios({
            url: serverDomain + path,
            method,
            headers: {
                Authorization: 'Bearer ' + header,
                
            },
            data: body,
            cancelToken: new CancelToken(c => {
                ObjectCancelAxios.cancel = c
            })
        })
    } catch (err) {
        console.log(err)
        return ('error')
    }
}

export const post = (path, body, header) => CallApi(path, 'POST', header, body)

