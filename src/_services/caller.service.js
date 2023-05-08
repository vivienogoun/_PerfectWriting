/** Import des modules nécessaires */
import axios from 'axios'
import { accountService } from '@/_services'


const Axios = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
  });

/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use(request => {
    
    // Si connecté on ajoute le token dans l'entête
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+ accountService.getToken()
    }
  
    return request
})



export default Axios