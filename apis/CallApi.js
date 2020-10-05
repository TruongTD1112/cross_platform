import axios from 'axios'
import { stringify } from 'querystring'

export const CallApi = async (path, method, header, body, ObjectCancelAxios = {}) => {
    const CancelToken = axios.CancelToken
    
    const serverDomain = 'http://localhost:8888'
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

