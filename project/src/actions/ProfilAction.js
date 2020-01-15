import {EDIT_PROFIL} from './types'
import axios from'axios'
///////////////edit the profile

export const edit = updated=>dispatch=>{

   axios.put('/api/user/',updated)
  //  .then(res=> {
       dispatch({
       type:EDIT_PROFIL,
       payload:updated

//        }) })

// .catch(err=>dispatch
//   ({ type: LOGIN_FAIL,
//    payload: err
// }))


   })}
