import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    };
    return (
        <div className = "formContainer">
            <div className = "formWrapper"> 
               
               <form onSubmit={handleSubmit}>
                 <span className = "logo">Space Chat </span>
                <span className= "title"><small>Register</small></span>

                <input type = "email" placeholder = "email"></input>
                <input type = "password" placeholder="password"></input> 
                <input type= "number"  placeholder= "376374982"></input>
                <button id="signup">Sign in</button>
                {err && <span>Something went wrong</span>} 
                <p className='para'>You don't have an account ? <Link to="/register">Register</Link></p>
               </form>
               <section>Contact : 78432980239</section>
            </div>
        </div>
    )
}

export default Login;