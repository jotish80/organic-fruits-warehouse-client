import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loading from "../Loading/Loading";

 const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    console.log(user)
    const location = useLocation();
    if(loading){
        return <Loading />
    }
  
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;

 