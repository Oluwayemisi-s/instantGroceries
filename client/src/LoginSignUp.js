import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import { useState } from 'react'
import Header from "./Header"

export default function LoginSignUp( {setUser} ){
    const [signUp, setSignUp] = useState(false)

    function handleFormDisplay(){
        setSignUp(current => !current)
    }

    return(
        <div>
            <Header />
            { signUp? 
                <LoginForm setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> : <SignUpForm setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> 
            }    
        </div>
    )
}