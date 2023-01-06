import React,{ useState} from 'react';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";


const Register = () =>
{
    const [err,setErr] =useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


      try{

       const res = await createUserWithEmailAndPassword(auth, email, password); 
       
      


const storageRef = ref(storage, displayName);

await uploadBytesResumable(storageRef, file).then(() =>{

    
    getDownloadURL(storageRef).then( async(downloadURL) => {  
      try{
        //update profile
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });
      await setDoc(doc(db,"users", res.user.uid),{
        uid: res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      });

      //create empty user chats on firestore
     await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/");

    } catch (err)
    {
      console.log(err);
      setErr(true);
    }
    });
  });

    


      }catch(err)
      {
        setErr(true);
      }
      };


    return (
        <div className = "formContainer">
            <div className = "formWrapper">
                <form onSubmit={handleSubmit}>
                <span className = "logo">Space Chat </span>
                <span className= "title"><small>Register</small></span>
               
                <input type = "text" placeholder = "display name"></input>
                <input type = "email" placeholder = "email"></input>
                <input type = "password" placeholder="password"></input>
                <input style = {{display:"none"}} type = "file" id='file'></input>
               <label htmlFor="file">
                <img style = {{height:"40px"}} src = "https://cdn-icons-png.flaticon.com/512/4211/4211547.png" alt = "avatar"/>
                <span>Add an avatar</span>
                </label>
                <button id="signup">Sign Up</button>
                {err && <span>Something went wrong</span>} 
                <p className='para'>You already have an account ?  <Link to="/register">Login</Link></p>
               </form>
            </div>
        </div>
    )
    }

export default Register;