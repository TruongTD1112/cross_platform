import {get} from './CallApi'

export const getPostInHome = (token) => get('/getPost', token)