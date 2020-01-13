import {EDIT_PROFIL,GET_PROFIL,ERROR_PROFIL} from '../actions/types'
const initialState={
    profil:null,
    loading:true,
    error:{}
}
const ProfilReducer =(state=initialState,action)=>{
    switch(action.type){
    case GET_PROFIL:
        return {
            ...state,
            profil:action.payload,
            loading:false
        }
        case ERROR_PROFIL:
        return {
            ...state,
            profil:action.payload,
            loading:false
        }
        default :return state
    case EDIT_PROFIL:
        return {
            ...state
        }
}

} 
export default ProfilReducer