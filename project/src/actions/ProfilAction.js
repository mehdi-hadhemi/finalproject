import {EDIT_PROFIL, GET_PROFIL,ERROR_PROFIL} from './types'
import axios from'axios'



//get the current profil 
export const getProfil=()=>async dispatch =>{

try{
    const res=await axios.get('api/profil/me')
  dispatch({
      type:GET_PROFIL,
      payload:res.data
  })
}
catch (err){
dispatch({
type:ERROR_PROFIL,
payloed:{msg:err.response.statustext,status:err.response.status}
})

}

}
