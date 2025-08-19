import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name, setName]=useState('')
    const [role,] =useState('')

    //function registerUser(){
    //     const users = [
    //         {
    //             name:n,
    //             email:e,
    //             password:p,
    //             role:r
    //         },
    //         [ 
    //         setEmail(e),
    //         setName(n),
    //         setPassword(p)                                                                      
    //         setRole(r)
    //         ]
    //     ]
    //}


    return (
        <form action="submit" id="signup-form" className="signup-form">
            <h1>Welcome to Quizy</h1>
            <div class="signup-container">
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                placeholder="Name"  
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Email:</label>
                <input
                  type="email"
                  placeholder="Email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                <label htmlFor="name">Password:</label>
                <input 
                type="password" 
                placeholder="password"
                 required 
                 value={password} 
                onChange={(e) => setPassword(e.target.value)}

                 />
                <p>Choose role</p>  
                <select name="role" id="role" >
                    <option value="instructor">Instructor</option>
                    <option value="student">Student</option>
                </select>
            <button type="submit" id="signupbtn" className="signupbtn" >Sign up</button>
            </div>
        </form>
    );
}
 
export default SignUp;