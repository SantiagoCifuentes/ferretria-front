import { useState } from "react"
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Login()
{

    const[user,setUser]= useState({
        email:'',
        password: ''
    })

    const { login,loginWithGoogle } = useAuth();

    const navigate = useNavigate();

    const [error,setError]= useState();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
      };

    
      
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
           await login(user.email,user.password)
            navigate("/")//navega a una pagina en particular
        } catch (error) {
            if(error.code==="auth/weak-password")
            setError("La contraseña debe de ser de 6 o más carácteres")
        }
        
    }

    return(

        <div>

        {error  && <p>{error}</p> }
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name = "email"placeholder="youremail@company.com" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange}/>

            <button>Login</button>
        </form>
        <button onClick={handleGoogleSignin}>Inicia sesión con Google</button>
        </div>
    )
}