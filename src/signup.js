import {Link} from "react-router-dom";
import Login from "./login";

const SignUp = () => {
    return (
        <form action="submit" id="form">
            <div>
                <label htmlFor="name">Name:</label>
            </div>
            <button type="submit">Submit</button>
            <Link to={Login}></Link>
        </form>
    );
}
 
export default SignUp;