import router from '@/main.js'

export function authGuard(){
    let token = localStorage.getItem('token')

    if(token){
        return true
    }

    router.push('/connexion')
}