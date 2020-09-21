import {post} from '../CallApi'
export const register = (data) => post('/register', data, {})
export const login = (data) => post('/action', {}, data)