import { REGISTER_SUCCES,REGISTER_FAIL,LOGIN_FAIL,LOGIN_SUCCES,USER_LODED,AUTH_ERROR,CLEAR_ERROR,LOGOUT} from './types'
import axios from 'axios'
import setAuthToken from '.././utils/setAuthToken'
export const loadUser=()=>dispatch=>{
    if (localStorage.token){
        setAuthToken(localStorage.token)
    }
    axios.get('/api/auth')
    .then(res=>dispatch({
        type:USER_LODED,    
        payload:res.data
    }))
    .catch(()=>dispatch({
type:AUTH_ERROR
    }))
}
export const register = formData=>dispatch=>{
    const config={
        headers:{
            'content-Type':'application/json'
        }
    }
     axios.post('/api/user',formData,config)
     .then(res=> {
         dispatch({
         type:REGISTER_SUCCES,
         payload:res.data
 
     }) 
     dispatch(loadUser()) 
    })
     .catch(err=>dispatch
       ({ type:REGISTER_FAIL,
        payload:err.response.data.msg
    }))
}  


export const login = formData=>dispatch=>{
    const config={
        headers:{
            'content-Type':'application/json'
        }
    }
     axios.post('/api/auth',formData,config)
     .then(res=> {
         dispatch({
         type:LOGIN_SUCCES,
         payload:res.data
 
     }) 
     dispatch(loadUser()) 
    })
     .catch(err=>dispatch
       ({ type: LOGIN_FAIL,
        payload:err.response.data.msg
    }))
}  











export const clearError=()=>dispatch=>{
    dispatch({
        type:CLEAR_ERROR  
    })
}