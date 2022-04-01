import { useState } from "react"

export function Login(){

    const [user,setUser] = useState({
        email:'',
        password : ''
    })



    return <div>
        <form>

        <intput type="email" name="email" ></intput>
        <intput type="password" name="password" ></intput>

        </form>
    </div>

}