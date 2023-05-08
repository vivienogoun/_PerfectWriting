/** Import des modules nécessaires */
import Axios from './caller.service'

const base = () => {
    return Axios.get('/')
}

const register = (credentials) => {
    return Axios.post('/register', credentials)
}

const login = (credentials) => {
    return Axios.post('/login', credentials)
}

const logout = () => {
    localStorage.removeItem('token')
}

const getToken = () => {
    return localStorage.getItem('token')
}

const saveToken = (token) => {
    localStorage.setItem('token', token)
}

const isLogged = () => {
    const token = localStorage.getItem('token')
    return !!token
}

export const accountService = {
    base,
    register,
    login,
    logout,
    saveToken,
    getToken,
    isLogged
}