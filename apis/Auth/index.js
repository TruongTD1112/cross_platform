import {post} from '../CallApi'
export const register = (data) => post('/register', data, {})
export const login = (data) => post('/login', data, {})
export const logout = (data, token) => post('/logout', data, token)