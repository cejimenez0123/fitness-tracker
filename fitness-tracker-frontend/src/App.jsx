import { useContext } from "react";
import "./App.css";
import Navbar from "./component/Navbar";

import { Outlet , Navigate,Link} from "react-router-dom";
import { ProtectedRoutes } from "./component/ProtectedRoutes";
function App() {
  return (
    <>
      <div className="">
      <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/signin"> Sign Up</Link></li>
      <li>
      <Link to="/home"> Home</Link>
      </li>
      <li> <Link to="/login"> Login</Link></li>
      <li> <Link to="/login"> Landing</Link></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">fitness</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><Link to="/signin"> Sign Up</Link></li>
      <li>
      <Link to="/home"> Home</Link>
      </li>
      <li> <Link to="/login"> Login</Link></li>
      <li> <Link to="/login"> Landing</Link></li>
    </ul>
  </div>

</div>
        {/* <Navbar /> */}
        {/* <Link to="/signin"> signup</Link>
      <Link to="/home"> home</Link>
      <Link to="/login"> login</Link>
      <Link to="/"> Landing</Link> */}

      <Outlet/>
     
      </div>
    </>
  );
}


const Requiredauth = () => {
  const  {currentUser}  = useContext(ProtectedRoutes);
  if (!currentUser) return <Navigate to="/login" />;
  return (
    <>
      <div className="">
      <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/home"> Home</Link>
      </li>
      <li>
      <Link to="/"> Landing</Link>
      </li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">fitness</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><Link to="/home"> Home</Link>
      </li>
      <li>
      <Link to="/"> Landing</Link>
      </li>
   
    </ul>
  </div>
 
</div>
      {/* <Link to="/home"> home</Link>
      <Link to="/"> Landing</Link> */}

      <Outlet/>

   
      </div>
    </>
  )
}

 


export {App,Requiredauth};




// import axios from "axios";



// axios.post('/', {}, {
//   headers:{
//     'Authorization' : ` Bearer ${toten}`
//   }
// })