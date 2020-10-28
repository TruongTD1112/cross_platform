import {get, post} from './CallApi'

export const getPostInHome = (token) => get('/getPost', token)
export const likePost = (token, postId, userId) => post('/likePost',{userId: userId, postId: postId}, token)
export const disLikePost = (token, postId, userId) => post('/disLikePost',{userId: userId, postId: postId}, token)