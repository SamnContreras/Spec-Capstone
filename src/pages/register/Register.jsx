import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
        <div className="register">
            <span className="registerTitle">Register!</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Username"/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter Email"/>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter Password"/>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/login">
                    Log In
                </Link>
            </button>
        </div>
    )
}
