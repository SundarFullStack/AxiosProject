import { DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST,ADD_USER, GET_USER_OBJ,UPDATE_USER } from "./ActionTypes"


const initialState={

  loading:true,
  userlist:[],
  userobj:{},
  errormessage:''
}
export const Reducer = (state=initialState,action) => {
  switch(action.type){
    case MAKE_REQUEST:return{

      ...state,
      loading:true
    }
    case FAIL_REQUEST:return{

      ...state,
      loading:false,
      errormessage:action.payload
    }
    case GET_USER_LIST:return{

      ...state,
      loading:false,
      errormessage:'',
      userlist:action.payload,
      userobj:{}
    }
    case DELETE_USER:return{

      ...state,
      loading:false
    
  }
  case ADD_USER:return{

    ...state,
    loading:false
  }
   case UPDATE_USER:return{

    ...state,
    loading:false
  }
   case GET_USER_OBJ:return{

    ...state,
    loading:false,
    userobj:action.payload
  }
    default:return state
  }

}
 
