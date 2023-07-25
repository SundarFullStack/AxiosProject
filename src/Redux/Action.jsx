  import axios from "axios"
  import { DELETE_USER, MAKE_REQUEST } from "./ActionTypes"
  import { FAIL_REQUEST } from "./ActionTypes"
  import { GET_USER_LIST } from "./ActionTypes"
  import { ADD_USER } from "./ActionTypes"
  import { UPDATE_USER } from "./ActionTypes"
  import { GET_USER_OBJ } from "./ActionTypes"
  import {toast} from "react-toastify";

  export const makeRequest = () => {
    return {
      type:MAKE_REQUEST
    }
  }
  
  export const failRequest = (err) => {
    return {
      type:FAIL_REQUEST,
      payload:err
    }
  }
  
  export const getUserlist = (data) => {
    return {
      type:GET_USER_LIST,
      payload:data
    }
  }

  export const deleteUser=()=>{

    return {
      type:DELETE_USER
    }
  }

  export const addUser=()=>{
    return{

      type:ADD_USER

    }
  }

   export const updateUser=()=>{
    return{

      type:UPDATE_USER

    }
  }

  export const getUserObj = (data) => {
    return {
      type:GET_USER_OBJ,
      payload:data
    }
  }

  export const FetchUserlist=()=>{

    return (dispatch)=>{

      dispatch(makeRequest());
      axios.get("http://localhost:8001/posts").then((response)=>{

      const userlist = response.data;
      dispatch(getUserlist(userlist));
      }).catch(err=>{

        dispatch(failRequest(err.message))
      })
    }
  }
  

  export const Removeuser=(code)=>{

    return (dispatch)=>{

      dispatch(makeRequest());
      axios.delete("http://localhost:8001/posts/"+code).then((response)=>{
      dispatch(deleteUser())

      }).catch(err=>{

        dispatch(failRequest(err.message))
      })
    }
  }
  


  export const FunctionaddUser=(data)=>{

    return (dispatch)=>{

      dispatch(makeRequest());
      axios.post("http://localhost:8001/posts",data).then((response)=>{
      dispatch(addUser());
      toast.success("User added successfully")

      }).catch(err=>{

        dispatch(failRequest(err.message))
      })
    }
  }

    export const FunctionUpdateUser=(data,code)=>{

    return (dispatch)=>{

      dispatch(makeRequest());
      axios.put("http://localhost:8001/posts/"+code,data).then((response)=>{
      dispatch(updateUser());
      toast.success("User updated successfully")

      }).catch(err=>{

        dispatch(failRequest(err.message))
      })
    }
  }
  
    export const FetchUserObj=(code)=>{

    return (dispatch)=>{

      dispatch(makeRequest());
      axios.get("http://localhost:8001/posts/"+code).then((response)=>{
     const userlist = response.data;
      dispatch(getUserObj(userlist));


      }).catch(err=>{

        dispatch(failRequest(err.message))
      })
    }
  }