import RNFetchBlob from 'rn-fetch-blob'
import {API_URL} from '../Constance'
export const upload = async(method, path, token, data)=>{
    try{
        
        return RNFetchBlob.fetch(
            method, 
            path,
            {
                Authorization: 'Bearer '+token,
                'Content-Type' : 'multipart/form-data',
            },
            [
                {name: 'avatar', filename: 'b.jpg', type: data.mime, data: RNFetchBlob.wrap(data.path) }
            ]
        ).uploadProgress({interval: 100}, (sent, total)=>{
            console.log(sent + " / "+total)
        })
    }catch{err => console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")}
}

export const postNew = async(token, data)=>{
    try{
        const photoes = data.photoes
        return RNFetchBlob.fetch(
            'POST', 
            API_URL + '/postNew?userId='+data.userId,
            {
                Authorization: 'Bearer '+token,
                'Content-Type' : 'multipart/form-data',
            },
            [
                {name: 'userId', data: data.userId },
                {name: 'content', data: data.content},
                ...photoes.map((photo, index)=>({
                    name: 'photo'+index,
                    filename: index+ '.jpg',
                    type: photo.mime,
                    data: RNFetchBlob.wrap(photo.path)
                }))        
            ]
        ).uploadProgress({interval: 100}, (sent, total)=>{
            console.log(sent + " / "+total)
        })
    }catch{err => console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")}
}