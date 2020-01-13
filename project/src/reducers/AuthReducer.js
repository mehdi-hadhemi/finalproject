import { REGISTER_SUCCES,REGISTER_FAIL,LOGIN_FAIL,LOGIN_SUCCES,USER_LODED,AUTH_ERROR,CLEAR_ERROR,LOGOUT} from '../actions/types' 
const initialState={
     token:localStorage.getItem('token'),
     isAuthenticated:null,
     user:null,
     error:null

}
const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_LODED:
            return{
                 ...state,
            isAuthenticated:true,
            user:action.payload
        }
        case LOGIN_SUCCES:   
        case REGISTER_SUCCES:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true

            }
            case LOGOUT:
            case LOGIN_FAIL:
            case AUTH_ERROR:
            case REGISTER_FAIL:
                localStorage.removeItem('token')
                return{
                    ...state,
                    token:null,
                    isAuthenticated: false,
                    user:null,
                    error:action.payload    
                }
            case CLEAR_ERROR:
                return {
                    ...state,
                    error:null   
                }


        default:
            return state
    }
}
export default AuthReducer