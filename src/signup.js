import {Link} from "react-router-dom";
import Login from "./login";
import { useState } from "react";

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <form action="submit" id="form">
            <div class="signup-container">
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Name" />
                <label htmlFor="name">Email:</label>
                <input type="email" placeholder="Email" required/>
                <label htmlFor="name">Password:</label>
                <input type="password" placeholder="password" required />
               <div>
                    <span>Instructor</span>
                    <span>Student</span>
                </div>
            </div>
        </form>
    );
}
 
export default SignUp;