import RNFetchBlob from 'rn-fetch-blob'

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