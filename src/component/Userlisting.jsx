import { useEffect } from "react";
import { FetchUserlist,Removeuser } from "../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";

const Userlisting = (props) => {

  useEffect(()=>{
   props.loaduser()
  },[])

  function handleDelete(code){

    if(window.confirm('Do you want to delete user?')){

      props.removeuser(code);
      props.loaduser();
      toast.success("User removed successfully");

  }
}
  return (
    props.user.loading?<div><h2>Loading...</h2></div>:
    props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
  <div>
    
    <div style={{textAlign:"center"}}>
      <h3>Crud app creation using axios mocks server with redux</h3>
    </div>
    <div className="card">
      <div className="card-header">
       <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>

      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead className="bg-dark text-white">
           <tr>
             <th>Code</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
           </tr>
          </thead>
          <tbody>
            {props.user.userlist && props.user.userlist.map(item=>

              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>
                  <Link to={'/user/edit/'+item.id}className='btn btn-primary m-2'>Edit</Link>
                  <button onClick={()=>{handleDelete(item.id)}}className="btn btn-danger m-2">Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  </div>  );
}


const mapStateToProps = (state)=>{

  return{

    user:state.user

  }
}

const mapDispatchToProps = (dispatch)=>{

  return {

    loaduser:()=>dispatch(FetchUserlist()),
    removeuser:(code)=> dispatch(Removeuser(code))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Userlisting);