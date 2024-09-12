import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1 className="header">Quizy</h1>
            <h1 className="home-h1">A Simple Quiz App</h1>
            <div className="btn-div">
           <Link to="/container"><button className="btn_start">Start Quiz</button></Link> 
            </div>
        </div>
    );
}
 
export default Home;